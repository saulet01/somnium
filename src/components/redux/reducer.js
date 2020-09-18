import { ADD_TO_BUCKETS, CLEAR_BUCKETS } from "./types";

const initialState = {
    data: [
        { id: 1, title: "Триумфальная арка", price: 5000, author: "Эрих Мария Ремарк", img: "https://i4.mybook.io/p/512x852/book_covers/4b/7c/4b7c23f0-df60-4b8d-b401-8b8ce1518d04.jpe?v2" },
        { id: 2, title: "Шантарам", price: 7500, author: "Грегори Дэвид Робертс", img: "https://cdn.f.kz/prod/152/151062_550.jpg" },
        {
            id: 3,
            title: "Мартин Иден",
            price: 3200,
            author: "Джек Лондон",
            img: "https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_134_514.jpg",
        },
    ],
    buckets: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BUCKETS:
            if (state.buckets.includes(action.payload)) {
                return {
                    ...state,
                };
            } else {
                return {
                    ...state,
                    buckets: [...state.buckets, action.payload],
                };
            }

        case CLEAR_BUCKETS:
            return {
                ...state,
                buckets: [],
            };

        default:
            return state;
    }
}
