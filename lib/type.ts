export interface Card {
    id: number;
    year: string;
    month: string;
    number: string;
    cvv2: string;
    isBlocked: 0 | 1;
}

export interface User {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    cards: Card[];
    isActive: 0 | 1;
}