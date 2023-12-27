import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContactThunk, fetchContacts, fetchContactsThunk } from "./contactsOperations";

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const handlePending = (state) => {
    state.error = null
    state.isLoading = true
}

const handleFulfilled = (state, { payload }) => {
    state.items = payload
    state.isLoading = false
}

const handleRejected = (state, { payload }) => {
    state.error = payload
    state.isLoading = false
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.pending, handlePending)
            .addCase(fetchContactsThunk.fulfilled, handleFulfilled)
            .addCase(fetchContactsThunk.rejected, handleRejected)
            .addCase(addContactThunk.pending, handlePending)
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {

            })
        // [fetchContacts.pending]: state => { state.error = null; state.isLoading = true },
        // [fetchContacts.fulfilled]: (state, { payload }) => { state.items = payload; state.isLoading = false },
        // [fetchContacts.rejected]: (state, { payload }) => { state.error = payload; state.isLoading = false },

    }
});

const persistedContactsConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

export const persistedContactsReducer = persistReducer(persistedContactsConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;
