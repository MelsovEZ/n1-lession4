'use client';
import React from 'react';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import {getAllProducts} from '../services/productsService';
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
}

const queryClient = new QueryClient();

function Product() {
    const {isLoading, error, data} = useQuery<Product[]>('products', getAllProducts);

    if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center bg-gray-100">Error fetching
        products</div>;

    if (!data) return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-center py-4">All Products</h1>
            <Link href="/create"><h1 className="text-3xl font-bold text-center py-4">Create</h1></Link>
            <div className="max-w-md mx-auto">
                {data.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
                        <p className="text-xl font-semibold mb-2">{product.title}</p>
                        <p className="text-lg">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Product/>
        </QueryClientProvider>
    );
}
