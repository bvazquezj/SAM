import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header className="w-[80dvw] flex flex-row justify-between items-center border-b border-black">
        <div className="flex items-center">
            <img className='size-32 rounded-full' src="/SAM-logo.webp" alt="Imagen del logo SAM" />
            <h1 className="text-xl font-bold">SAM</h1>
        </div>

        <nav className="flex justify-center gap-4 text-md font-bold">
            <Link to="/LandinPage" className="hover:text-zinc-700 hover:underline cursor-pointer">Inicio</Link>
            <Link to="/contact" className="hover:text-zinc-700 hover:underline cursor-pointer">Contacto</Link>
            <Link to="/info" className="hover:text-zinc-700 hover:underline cursor-pointer">Información</Link>
            <Link to="/Register" className="hover:text-zinc-700 hover:underline cursor-pointer">Register</Link>
            <Link to="/Login" className="hover:text-zinc-700 hover:underline cursor-pointer">Log In</Link>
        </nav>
    </header>
    );
}