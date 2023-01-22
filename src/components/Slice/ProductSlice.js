import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",

  initialState: {
    products: [],
    article: {},
    favoriteArticles: [],
  },

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeProducts: (state) => {
      state.products = null;
    },
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    setFavoriteArticles: (state, action) => {
      state.favoriteArticles = [...state.favoriteArticles, action.payload];
    },
    removeFavoriteArticle: (state, action) => {
      state.favoriteArticles = state.favoriteArticles.filter(
        x => x.id !== action.payload.id
      )
    },
  },
});

export const getArticle = (state) => state.product.article;
export const getProducts = (state) => state.product.products;
export const getFavoriteArticles = (state) => state.product.favoriteArticles;

export const {
  setProducts,
  removeProducts,
  setArticle,
  setFavoriteArticles,
  removeFavoriteArticle,
} = productSlice.actions;

export default productSlice.reducer;
