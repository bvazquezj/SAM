export default function Header() {
    return(
        <header className="w-[80dvw] flex flex-row justify-between items-center border-b border-black">
        <div className="flex items-center">
            <img className='size-32 rounded-full' src="/SAM-logo.webp" alt="Imagen del logo SAM" />
            <h1 className="text-xl font-bold">SAM</h1>
        </div>

        <nav className="flex justify-center gap-4 text-md font-bold">
            <a href="/" className="hover:text-zinc-700 hover:underline cursor-pointer ">Inicio</a>
            <a href="/contact" className="hover:text-zinc-700 hover:underline cursor-pointer">Contacto</a>
            <a href="/info" className="hover:text-zinc-700 hover:underline cursor-pointer">Información</a>
            <a href="/Register.html" className="hover:text-zinc-700 hover:underline cursor-pointer">Register</a>
            <a href="/Login.html" className="hover:text-zinc-700 hover:underline cursor-pointer">Log In</a>
        </nav>
    </header>
    );
}