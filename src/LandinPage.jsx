
export default function LandinPage() {
    return (
        <div className=" w-full h-full" style={{ backgroundColor: 'black'}}>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-9xl text-white font-sans">SAM</h1>
                <p className="m-5 text-white">Sentiment Analysis Machine</p>
                <div className="mt-10 px-0"> {/* Este div contiene el botón */}
                    <a href="/landinPage.html" className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 text-black px-8 py-3 rounded-lg font-mono text-2xl">
                        Pruebame
                    </a>
                </div>
            </div>
        </div>
    );
}

