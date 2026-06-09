export type MenuFormState = {
  stasus?: string;
  errors?: {
    id?: string[];
    name?: string[];
    description?: string[];
    price?: string[];
    discount?: string[];
    category?: string[];
    role?: string[];
    image_url?: string[];
    is_available?: string[];
    _form?: string[];
  };
};
