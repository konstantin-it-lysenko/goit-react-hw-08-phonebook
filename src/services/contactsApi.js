import axios from "axios";
import { contactsApi } from "./contactsConstants";

export const instance = axios.create({
    baseURL: contactsApi.BASE_URL,
})
