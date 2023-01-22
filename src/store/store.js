import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/Slice/ProductSlice";
import loaderReducer from "../components/Slice/LoaderSlice";

export default configureStore({
    reducer : {
        product : productReducer,
        loader : loaderReducer,
    }
})