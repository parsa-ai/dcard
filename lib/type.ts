export interface Card {
    exYear: string;
    exMonth: string;
    pan: string;
    cvv2: string;
    use: 0 | 1;
}

export interface User {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    cards: string;
    isActive: 0 | 1;
}