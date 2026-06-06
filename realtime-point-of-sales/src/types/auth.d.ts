
export type AuthFormState = {
    stasus?: string;
    errors?: {
        email?: string[];
        password?: string[];
        name?: string[];
        role?: string[];
        avatar_url?: string[];
        _form?: string[];
    };
};