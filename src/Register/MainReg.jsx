import Header from "../basics/Header";
export function MainReg() {

  return (
    <>
      <Header></Header>
      <main className="w-[80dvw] h-[75dvh] flex flex-row justify-center items-center">
        <div className="w-full min-h-[80dvh] flex items-center justify-center">
          <div className="w-full bg-white shadow-md rounded-lg flex">
            <div className="w-1/2 h-auto">
              <img
                src="src\assets\svg\registerSvg.svg"
                alt="Shopping"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-2">Crear cuenta</h2>
              <p className="text-gray-600 mb-6">Pon tus datos debajo</p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email o Numero de Telefono"
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
                  Crear cuenta
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center border border-gray-300 p-2 rounded mt-4"
                >
                  <img
                    src="src\assets\img\google.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Registrarse con Google
                </button>
              </form>
              <p className="text-gray-600 mt-6 text-center">
                ¿Ya tienes una cuenta?{' '}
                <a href="Login.html" className="text-blue-500">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}