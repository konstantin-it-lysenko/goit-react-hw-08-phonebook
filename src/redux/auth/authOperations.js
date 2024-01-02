import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthorizationHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const unsetAuthorizationHeader = () => {
    axios.defaults.headers.common.Authrization = '';
}

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        setAuthorizationHeader(data.token);

        return data
    } catch (err) {

    }
})

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        setAuthorizationHeader(data.token);

        return data
    } catch (err) {

    }
})

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');

        unsetAuthorizationHeader();
    } catch (err) {

    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisteedToken = state.auth.token;

    if (persisteedToken === null) {
        return thunkAPI.rejectWithValue('No user token')
    };

    setAuthorizationHeader(persisteedToken);
    try {
        const { data } = await axios.get('/users/current');

        return data
    } catch (err) {

    }
})
