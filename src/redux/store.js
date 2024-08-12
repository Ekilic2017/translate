import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Slice/LanguageSlice";
import translateReducer from "./Slice/translateSlice";
export default configureStore(
    {
        reducer:{languageReducer,translateReducer},
    }
);