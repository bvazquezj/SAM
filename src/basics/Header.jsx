export default function Header() {
    return(
        <header className="w-[80dvw] flex flex-row justify-between items-center border-b border-black">
        <div className="flex items-center">
            <img className='size-32 rounded-full' src="/SAM-logo.webp" alt="Imagen del logo SAM" />
            <h1 className="text-xl font-bold">SAM</h1>
        </div>

        <nav className="flex justify-center gap-4 text-md font-bold">
            <link to="/" className="hover:text-zinc-700 hover:underline cursor-pointer ">Inicio</link>
            <link to="/contact" className="hover:text-zinc-700 hover:underline cursor-pointer">Contacto</link>
            <link to="/info" className="hover:text-zinc-700 hover:underline cursor-pointer">Información</link>
            <link to="/Register.html" className="hover:text-zinc-700 hover:underline cursor-pointer">Register</link>
            <link to="/Login.html" className="hover:text-zinc-700 hover:underline cursor-pointer">Log In</link>
        </nav>
    </header>
    );
}