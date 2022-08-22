import axios from "."
import { Token } from "../models/models";

export let dataToken: Token = {
    success: false,
    token: '',
}

export const getToken = async () => {
    const responseData = await axios.get('token');
    dataToken = await responseData.data 
}