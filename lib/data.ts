import { User  } from "./type";

const banks =[
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
            { id: 1, pan: "610433....1234", exYear: "05", exMonth: "12", cvv2: "123", use: 0 },
            { id: 2, pan: "603769....5678", exYear: "06", exMonth: "01", cvv2: "456", use: 0 },
            { id: 3, pan: "621986....5678", exYear: "06", exMonth: "01", cvv2: "456", use: 0 },
            { id: 4, pan: "502229....1234", exYear: "05", exMonth: "12", cvv2: "123", use: 0 },
            { id: 5, pan: "502938....5678", exYear: "06", exMonth: "01", cvv2: "456", use: 0 },
            { id: 6, pan: "622106....5678", exYear: "06", exMonth: "01", cvv2: "456", use: 0 },
        ]
    },
    {
        id: 102,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 1,
        cards: [
            { id: 1, pan: "6037....1234", exYear: "05", exMonth: "12", cvv2: "123", use: 0 },
            { id: 2, pan: "5892....5678", exYear: "06", exMonth: "01", cvv2: "456", use: 0 },
        ]
    },

    {
        id: 103,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 0,
        cards: [
            { id: 1, pan: "6037....1234", exYear: "05", exMonth: "12", cvv2: "123", use: 0 },
            { id: 2, pan: "5892....5678", exYear: "06", exMonth: "01", cvv2: "456", use: 0 },
        ]
    },

];
export  {banks , usersData};