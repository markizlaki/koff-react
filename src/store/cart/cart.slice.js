import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "./../../const";

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async (_, { getState, rejectedWithValue }) => {
        const state = getState();
        const token = state.auth.accessToken;

        try {
            const response = await fetch(`${API_URL}api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Не удалось загрузить содержимое корзины");
            }

            return response.json();
        } catch (error) {
            return rejectedWithValue(error.message);
        }
    },
);

export const addProductToCart = createAsyncThunk(
    "cart/addProductToCart",
    async (productData, { getState, rejectedWithValue }) => {
        const state = getState();
        const token = state.auth.accessToken;

        try {
            const response = await fetch(`${API_URL}api/cart/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error("Не удалось добавить товар в корзину");
            }

            return response.json();
        } catch (error) {
            return rejectedWithValue(error.message);
        }
    },
);

const initialState = {
    products: [],
    totalPrice: 0,
    totalCount: 0,
    loadingFetch: false,
    loadingAdd: false,
    loadingUpdate: false,
    loadingRemove: false,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase();
    },
});

export default cartSlice.reducer;
