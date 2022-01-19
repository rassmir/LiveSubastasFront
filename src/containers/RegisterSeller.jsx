import React, {Fragment} from "react";

const RegisterSeller = () => {
    return (
        <Fragment>
            <div
                className="bg-[url('/src/assets/img/auctioneers.jpeg')] h-screen lg:h-screen bg-cover bg-center opacity-100 bg-scroll">
                <div className="px-96">
                    <div className="text-white pt-10 text-center px-32">
                        <h3 className="lg:text-6xl font-bold text-primary">Live<span className="text-black">Subastas</span>
                        </h3>
                        <div className="mt-4 tracking-wide">
                            <h4 className="font-Poppins-Sb text-2xl">Haga Crecer Su Negocio Y Deleite A Sus
                                Consignadores</h4>
                            <h3 className="mt-4 text-xl">Incluya su próxima subasta en LiveSubastas y llegue a
                                millones de compradores en todo el mundo.</h3>
                        </div>
                    </div>
                    <div className="mt-6 px-32">
                        <div className="p-8 bg-white rounded-3xl">
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="name">
                                        Nombres
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="name" type="text"/>
                                </div>
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="lastname">
                                        Apellidos
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="lastname" type="text"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mt-4">
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="title">
                                        Título
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="title" type="text"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-4">
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="code">
                                        código ciudad
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="code" type="text"/>
                                </div>
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="number">
                                        Número teléfono
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="number" type="text"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-4">
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="email">
                                        correo electrónico
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="email" type="text"/>
                                </div>
                                <div>
                                    <label
                                        className="block text-default font-Poppins-Md text-sm mb-1 uppercase tracking-wider"
                                        htmlFor="postal">
                                        código postal / zip
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:ring-2 ring-primary"
                                        id="postal" type="text"/>
                                </div>
                            </div>
                            <div className="mt-4 font-Poppins-Md text-default uppercase">
                                Soy
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                    <div>
                                        <label className="block text-gray-500 font-Poppins-Md">
                                            <input
                                                className="mr-2 leading-tight h-4 w-4 border border-gray-300 rounded-sm transition duration-200"
                                                type="checkbox"/>
                                            <span className="text-sm ">Casa de subastas</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 font-Poppins-Md">
                                            <input
                                                className="mr-2 leading-tight h-4 w-4 border border-gray-300 rounded-sm transition duration-200"
                                                type="checkbox"/>
                                            <span className="text-sm">Individuo / Consignador</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 mt-2">
                                    <label className="block text-gray-500 font-Poppins-Md">
                                        <input
                                            className="mr-2 leading-tight h-4 w-4 border border-gray-300 rounded-sm transition duration-200"
                                            type="checkbox"/>
                                        <span className="text-sm ">Galería / Distribuidor</span>
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mt-6">
                                <button
                                    className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default RegisterSeller