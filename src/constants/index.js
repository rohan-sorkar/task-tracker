import { genId } from "../utils";

export const fakeTasks = [
    {
        id: genId.next().value,
        title: 'send files to dambo',
        description: 'something something something',
        isSelect: false,
        isComplete: false,
        date: new Date()
    },
    {
        id: genId.next().value,
        title: 'i need to buy a jeans',
        description: 'something something something',
        isSelect: false,
        isComplete: true,
        date: new Date()
    }
]