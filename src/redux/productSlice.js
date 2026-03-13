import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../services/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProducts();

    // simulate product sizes
    const sizes = ["S", "M", "L", "XL"];

    const productsWithSize = response.data.products.map((product) => ({
      ...product,
      size: sizes[Math.floor(Math.random() * sizes.length)]
    }));

    return productsWithSize;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load products";
      });
  }
});

export default productSlice.reducer;