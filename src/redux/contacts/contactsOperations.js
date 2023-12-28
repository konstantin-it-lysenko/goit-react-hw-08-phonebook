import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "services/contactsApi";
import { contactsApi } from "services/contactsConstants";

export const getContacts = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
    try {
        const { data } = await instance.get(contactsApi.ENDPOINTS.CONTACTS);

        return data
    } catch (err) {
        thunkAPI.rejectWithValue(err)
    }

})

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const { data } = await instance.post(contactsApi.ENDPOINTS.CONTACTS, contact);

        return data
    } catch (err) {
        thunkAPI.rejectWithValue(err)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await instance.delete(`${contactsApi.ENDPOINTS.CONTACTS}/${id}`,);

        return data
    } catch (err) {
        thunkAPI.rejectWithValue(err)
    }
})