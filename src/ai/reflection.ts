import { getCharacter } from "../character";
import {
    createMemory,
    getLatestMemories,
    getRelevantMemories,
} from "./memory";
import { openai } from "./openai";
import * as config from "../config.json";

// Reflections
// There are two stages to reflections:
// 1.) Generating questions to ask based on the character's memories (these are reflection questions)
// 2.) Generating the reflections based on the questions and retrieved memories
const answerReflectionQuestion = async (
    characterId: string,
    reflectionQuestion: string
) => {
    // Get the character's name & Retrieve the latest 15 memories based on the reflection question
    // This will update the memory's accessedAt timestamp because the NPC is reflecting on it
    const [character, memories] = await Promise.all([
        getCharacter(characterId),
        getRelevantMemories(characterId, reflectionQuestion, 15),
    ]);

    // Create the reflection prompt
    let reflectionPrompt = `Statements about ${character.name}\n`;

    for (let i = 0; i < memories.length; i++) {
        const memory = memories[i];
        reflectionPrompt += `${i + 1}. ${memory.memory}\n`;
    }

    reflectionPrompt +=
        "What 5 high-level insights can you infer from the above statements? (example format: insight (because of 1, 5, 3))";

    // Generate the reflection
    const completion = await openai.createChatCompletion({
        model: config.model,
        messages: [{ role: "user", content: reflectionPrompt }],
    });

    // Parse the completion (remove numbers e.g. 1. , and trim)
    const reflections = completion.data.choices[0].message.content
        .replace(/[0-9]. /g, "")
        .trim()
        .split("\n");

    // Add the reflections to the database as a memory
    for (let i = 0; i < reflections.length; i++) {
        createMemory(character.id, reflections[i]);
    }
};

const generateReflection = async (characterId: string) => {
    // Retrieve the latest 100 memories
    // TODO: 100 is an arbitrary number, we should figure out a better way to do this
    // Maybe we can use the timestamp of the last reflection to determine which memories to retrieve
    // So that we're not retrieving the same memories over and over again
    const memories = await getLatestMemories(characterId, 100);

    // Figure out the most important questions to ask, and reflect on
    let generateReflectionQuestionsPrompt;
    for (let i = 0; i < memories.length; i++) {
        const memory = memories[i];
        generateReflectionQuestionsPrompt += `${i + 1}. ${memory.memory}\n`;
    }

    generateReflectionQuestionsPrompt += `Given only the information above, what are 3 most salient high-level questions we can answer about the subjects in the statements?\n`;

    // Generate the reflection questions
    const completion = await openai.createChatCompletion({
        model: config.model,
        messages: [
            { role: "user", content: generateReflectionQuestionsPrompt },
        ],
    });

    const reflectionQuestions = completion.data.choices[0].message.content;

    // Parse the reflection questions (remove the numbers e.g. (1. ), and split by new line)
    const reflectionQuestionsParsed = reflectionQuestions
        .replace(/[0-9]. /g, "")
        .trim()
        .split("\n");

    // Answer the reflection questions
    for (let i = 0; i < reflectionQuestionsParsed.length; i++) {
        answerReflectionQuestion(characterId, reflectionQuestionsParsed[i]);
    }
};

export { generateReflection };
