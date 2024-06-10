import React from 'react';
import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-gray-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold">MyStore</a>
                <div>
                    <Link href="/" className="mx-2 p-2 font-bold border border-transparent rounded-xl bg-gray-900">
                        Home
                    </Link>
                    <Link href="/create" className="mx-2 p-2 font-bold border border-transparent rounded-xl bg-gray-900">
                        Create Product
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
