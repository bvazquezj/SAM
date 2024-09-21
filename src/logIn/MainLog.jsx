import Header from "../basics/Header";
export function MainLog() {

  return (
    <>
      <Header></Header>

      <main>
        <div className="min-h-[80dvh] flex items-center justify-center">
          <div className="max-w-4xl w-full bg-white shadow-md rounded-lg flex">
            <div className="w-1/2 h-auto">
              <img
                src="src\assets\svg\loginSvgI.svg"
                alt="image"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-2">Iniciar sesión</h2>
              <p className="text-gray-600 mb-6">Ingresa tus datos debajo</p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Email or Numero de teléfono"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-2 rounded mt-4"
                >
                  Log In
                </button>
              </form>
              <div className="flex justify-between mt-4">
                <a href="/forgot-password" className="text-red-500">
                  olvide mi contraseña
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
