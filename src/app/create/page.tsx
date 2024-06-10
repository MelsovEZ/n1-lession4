'use client';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import {getCategories} from '../services/productsService';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function CreateProduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
    });
    const [categories, setCategories] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories().then();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://fakestoreapi.com/products', formData);
            console.log(response.data);
            alert('Product created successfully!');
            router.push('/');
        } catch (error) {
            alert('Error creating product');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl mb-4">Create Product</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="w-full mb-4 px-4 py-2 border rounded"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <input
                        className="w-full mb-4 px-4 py-2 border rounded"
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <textarea
                        className="w-full mb-4 px-4 py-2 border rounded"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                    <select
                        className="w-full mb-4 px-4 py-2 border rounded"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <input
                        className="w-full mb-4 px-4 py-2 border rounded"
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <button
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default function Create() {
    return (
        <main>
            <Navbar/>
            <CreateProduct/>
            <Footer/>
        </main>
    );
}