import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface ExtraOption {
  id: number;
  name: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  quantity: number;
  price: number;
  size: string;
  extraOptions: ExtraOption[];
}

interface CartState {
  products: Product[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
