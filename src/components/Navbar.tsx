import { Link } from "react-router-dom";

export default function Navbar() {
    return (

<nav className="fixed top-0 left-0 w-full z-50">

<div className="mx-auto max-w-7xl flex justify-between items-center px-8 py-5">

<Link to="/">

<img
src="/logo.png"
className="h-14"
/>

</Link>

<div className="flex gap-10">

<Link to="/">Home</Link>

<Link to="/products">Products</Link>

<a href="#about">About</a>

<a href="#contact">Contact</a>

</div>

<Link
to="#contact"
className="bg-red-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-red-700 transition">

Get Quote

</Link>

</div>

</nav>

    );
}