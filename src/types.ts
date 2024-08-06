// src/types.ts
export interface CartItem {
    description?: string;
    id: string;
    name: string;
    price: string;
    slug?: string;
    image: {
        sourceUrl: string;
        title: string;
    };
}

export interface Category {
    id: string;
    slug: string;
    name: string;
}