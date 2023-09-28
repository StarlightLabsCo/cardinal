import { Character } from "@prisma/client";

let tasks = {
    A1: [
        {
            task: "Catch up with Lucy",
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
            task: "Head to Nume Village at 9.34, -53.9. to pick up some supplies.",
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
            task: "Chop trees to gain wood for the village.",
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
            task: "Catch up with Thomas",
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
            task: "Chop trees for wood for the village.",
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
            task: "Head to the lake town at 68.93, -22.78 to meet with the other villagers.",
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
            task: "Reflect on the beauty of the lake",
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
            task: "Head to Nume Village at 9.34, -53.9. to go home for the day.",
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
            task: "Talk to the other villagers about the recent events",
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
