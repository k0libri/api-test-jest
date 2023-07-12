require('dotenv').config()
import axios from 'axios';
const baseUrl = process.env.BASE_URL;
import { User, GetUsersResponse } from '../models/user';

export async function getAllUsers() {
    try {
        const response = await axios.get<GetUsersResponse>(`${baseUrl}/users`);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error message: ', error.message);
            throw error;
        } else {
            console.error('An unexpected error: ', error);
            throw new Error('An unexpected error happened');
        }
    }
};

export async function userIdWithMethod(method: string, id: number){
    const conf = {
        method: method,
        baseURL: baseUrl,
        url: `/users/${id}`
    }
    try {
        const response = await axios<User>(conf);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error message: ', error.message);
            throw error;
        } else {
            console.error('An unexpected error: ', error);
            throw new Error('An unexpected error happened');
        }
    }
};