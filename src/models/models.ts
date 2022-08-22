export type User = {
    id?: number;
    name: string;
    email: string;
    phone: string;
    position?: string;
    position_id: number;
    registration_timestamp?: number;
    photo: string | File;
}

export type DTOUser = {
    total_users: number;
    success?: boolean;
    message: string
    users: User[];
}

export type Position = {
    id: number;
    name: string;
}

export type DTOPosition = {
    success: boolean;
    positions: Position[]
}

export type Validations = {
    isEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
    isEmail?: boolean;
    isPhone?: boolean;
    isFile?: boolean;
}

export type Token = {
    success: boolean;
    token: string;
}