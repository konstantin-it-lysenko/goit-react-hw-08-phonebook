import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');

        return data
    } catch ({ message }) {
        return thunkAPI.rejectWithValue(message)
    }

})

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', contact);

        return data
    } catch ({ message }) {
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`,);

        return data
    } catch ({ message }) {
        return thunkAPI.rejectWithValue(message)
    }
})
