import Header from "./basics/Header"

export default function HomePage() {
    
    const sendVideo = (e) => {
        fetch("http://localhost:3000/video", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: e.target.value,
            }),
        })
    }
    
    return (
        <>
           <Header></Header>

            <main className="w-[80dvw] h-[75dvh] flex flex-row justify-between items-center">
                <form action="submit" className="w-full flex justify-center items-center p-10 gap-4">
                    <input placeholder="https://www.youtube.com/watch?v=7M2kFOzax0w&ab_channel=BandaiNamcoEntertainmentAmerica" type="text" className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" />
                    <button onClick={sendVideo} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Enviar
                    </button>
                </form>
            </main>

            <footer className="h-[30vh] w-full mt-4 bg-gray-300 flex flex-row justify-start items-center px-[10%]">
                <img className="size-36 rounded-full" src="/SAM-logo.webp" alt="Imagen del logo SAM" />
                <h1 className="text-xl font-bold">SAM</h1>
            </footer>
        </>
    )
}