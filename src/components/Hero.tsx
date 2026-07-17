import { motion } from "framer-motion";

export default function Hero(){

return(

<section
className="relative h-screen">

<img
src="/hero.jpg"
className="absolute w-full h-full object-cover"/>

<div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-black/40"/>

<div className="relative max-w-7xl mx-auto h-full flex items-center">

<div className="w-2/3">

<motion.h1

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

className="text-7xl font-bold text-white leading-tight">

Powering the Future with Reliable Transformer Solutions

</motion.h1>

<p className="text-gray-200 text-xl mt-8 max-w-2xl">

Manufacturer of Inverter Duty Transformers and Power Transformers for Industrial and Renewable Energy Applications.

</p>

<div className="mt-10 flex gap-5">

<button className="bg-red-600 px-8 py-4 rounded-lg text-white">

Get Quote

</button>

<button className="border border-white px-8 py-4 rounded-lg text-white">

Explore Products

</button>

</div>

</div>

</div>

</section>

)

}