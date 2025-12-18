import { User , Card } from "./type";

const bank =[
  {
    "bank": "mellat",
    "title": "بانک ملت",
    "bin": "610433"
  },
  {
    "bank": "saderat",
    "title": "بانک صادرات ایران",
    "bin": "603769"
  },
  {
    "bank": "saman",
    "title": "بانک سامان",
    "bin": "621986"
  },
  {
    "bank": "pasargad",
    "title": "بانک پاسارگاد",
    "bin": "502229"
  },
  {
    "bank": "day",
    "title": "بانک دی",
    "bin": "502938"
  },
  {
    "bank": "parsian",
    "title": "بانک پارسیان",
    "bin": "622106"
  },
  {
    "bank": "en",
    "title": "بانک اقتصاد نوین",
    "bin": "627412"
  },
];

const usersData: User[] = [
    {
        id: 101,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 1,
        cards: [
            { id: 1, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 2, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
            { id: 3, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
            { id: 4, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 5, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
            { id: 6, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
        ]
    },
    {
        id: 101,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 1,
        cards: [
            { id: 1, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 2, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
        ]
    },

    {
        id: 101,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 0,
        cards: [
            { id: 1, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 2, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
        ]
    },

];
export  {bank , usersData};