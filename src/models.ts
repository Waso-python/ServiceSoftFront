export interface IProduct {
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface IAccessToken {
    access_token?: string,
    token_type?: string,
    detail?: []
}


export interface IUsers {
    id?: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    firm_id?: number,
    role_id?: number,
    password: string,
    confirmed: boolean
}