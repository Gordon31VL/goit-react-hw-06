import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"
import filtersReducer from "./filtersSlice"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

export const rootReducer = combineReducers({
        contacts: contactsReducer,
        filters: filtersReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);