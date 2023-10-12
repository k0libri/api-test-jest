import axios from 'axios';
import { User, GetUsersResponse } from '../models/user';

const baseUrl = 'https://reqres.in/api'

export const getAllUsers = async () => {
    try {
        return await axios.get<GetUsersResponse>(`${baseUrl}/users`);
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

export const userIdWithMethod = async (method: string, id: number) => {
    const conf = {
        method: method,
        baseURL: baseUrl,
        url: `/users/${id}`
    }
    try {
        return await axios<User>(conf);
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