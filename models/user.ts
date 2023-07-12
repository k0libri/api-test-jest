export type User = {
    data: {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string
    }
};

export type GetUsersResponse = {
    data: User[];
};


export type UpdateUserResponse = {
    updatedAt: string
}