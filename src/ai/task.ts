import { Character } from "@prisma/client";

let tasks = {
    A1: [
        {
            task: "Catch up to James",
            priority: 1,
        },
        {
            task: "Go to Nume Village",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A2: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A3: [
        {
            task: "Chop wood with Eleanor Wraithwind",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A4: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A5: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A6: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A7: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A8: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A9: [
        {
            task: "Chop wood with Will Turner",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A10: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A11: [
        {
            task: "Mine stone",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
    A12: [
        {
            task: "Carry out your daily dutiies",
            priority: 1,
        },
        {
            task: "Catch up with other villagers",
            priority: 2,
        },
        {
            task: "Maintain a healthy lifestyle",
            priority: 3,
        },
    ],
};

async function getUnfinishedTasks(character: Character) {
    return tasks;
}

interface Task {
    task: string;
    priority: number;
    createdAt: Date;
}

function updateTasks(characterId: string, updatedTasks: Task[]) {
    tasks[characterId] = updatedTasks;
}

export { getUnfinishedTasks, updateTasks };
