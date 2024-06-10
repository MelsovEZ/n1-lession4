import {ProductList} from './components/ProductList'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <ProductList/>
            <Footer/>
        </main>
    );
}
