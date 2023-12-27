import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "services/contactsApi";
import { contactsApi } from "services/contactsConstants";

export const fetchContactsThunk = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
    try {
        const { data } = await instance.get(contactsApi.ENDPOINTS.CONTACTS);

        return data
    } catch (err) {
        console.error(err)
        thunkAPI.rejectWithValue(err)
    }

})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post(contactsApi.ENDPOINTS.CONTACTS, contact);

        return data
    } catch (err) {
        console.error(err)
        thunkAPI.rejectWithValue(err)
    }
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`${contactsApi.ENDPOINTS.CONTACTS}/${id}`,);

        return data
    } catch (err) {
        console.error(err)
        thunkAPI.rejectWithValue(err)
    }
})