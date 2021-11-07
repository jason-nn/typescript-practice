interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

// For the most part, you can choose based on personal preference, and TypeScript will tell you if
// it needs something to be the other kind of declaration. If you would like a heuristic,
// use interface until you need to use features from type.
