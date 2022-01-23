import React, {Fragment, useState} from 'react'
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import {Tab} from '@headlessui/react'
import Modal from "../../utils/Modal";
import visa from "../../assets/img/icons/visa.svg"
import master from "../../assets/img/icons/mastercard.svg"
import amex from "../../assets/img/icons/amex.svg"
import diners from "../../assets/img/icons/diners.svg"

const Profile = () => {
    const [modalCreditCard, setModalCreditCard] = useState(false);

    const openCloseModalCreditCard = () => {
        setModalCreditCard(!modalCreditCard)
    }

    return (
        <Fragment>
            <Header/>
            <div className="px-24 mt-16 font-Poppins-Rg">
                <h4 className="font-Poppins-Sb text-[28px] text-primary text-center">Configuración De Cuenta</h4>
                <Tab.Group>
                    <Tab.List className="mt-12 space-x-24 font-Poppins-Sb text-[18px] text-center">
                        <Tab className={({selected}) =>
                            selected ? 'text-primary' : 'text-black'
                        }>
                            Mi Perfil
                            <hr className="w-[180px] h-[5px] bg-gray-400"/>
                        </Tab>
                        <Tab className={({selected}) =>
                            selected ? 'text-primary' : 'text-black'
                        }>
                            Mis Pagos
                            <hr className="w-[180px] h-[5px] bg-gray-400"/>
                        </Tab>
                        <Tab className={({selected}) =>
                            selected ? 'text-primary' : 'text-black'
                        }>
                            Mis Direcciones
                            <hr className="w-[180px] h-[5px] bg-gray-400"/>
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="px-80 mt-16 mb-32">
                        <Tab.Panel>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1"
                                           htmlFor="firstname">
                                        Nombre Completo
                                    </label>
                                    <input
                                        id="firstname"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="name" type="text"

                                    />
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1" htmlFor="surname">
                                        Apellido Completo
                                    </label>
                                    <input
                                        id="surname"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="surname" type="text"

                                    />
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1"
                                           htmlFor="firstname">
                                        Tipo Documento
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none transition ease-in-out text-gray-500 shadow w-full px-3 py-2.5 border border-solid border-gray-200 rounded"
                                            name="type_doc">
                                            <option disabled selected>Seleccione ...</option>
                                            <option value="cex">CEX</option>
                                            <option value="pasaporte">Pasaporte</option>
                                            <option value="cedula">Cedula</option>
                                        </select>
                                        <div
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1" htmlFor="surname">
                                        Número Documento
                                    </label>
                                    <input
                                        id="surname"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="num_doc" type="number"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1" htmlFor="phone">
                                        Celular
                                    </label>
                                    <input
                                        id="phone"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="phone" type="number"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1"
                                           htmlFor="ocupation">
                                        Profesión
                                    </label>
                                    <input
                                        id="ocupation"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="phone" type="text"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1"
                                           htmlFor="facebook">
                                        Link Facebook
                                    </label>
                                    <input
                                        id="facebook"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="facebook" type="text"
                                    />
                                </div>
                                <div>
                                    <label className=" block text-primary text-[15px] font-bold mb-1"
                                           htmlFor="instagram">
                                        Link Instagram
                                    </label>
                                    <input
                                        id="instagram"
                                        className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                        name="instagram" type="text"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mt-8 mb-32">
                                <button
                                    className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                    Actualizar
                                </button>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <h4 className="text-[17px]">No se encontró ninguna tarjeta en el archivo, agregue una hoy
                                para aumentar
                                sus posibilidades de ser aprobado para ofertar.
                            </h4>
                            <div className="mt-4">
                                <button
                                    onClick={() => openCloseModalCreditCard()}
                                    className="bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-6 rounded">
                                    Agregar Tarjeta De Crédito
                                </button>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <Modal onOpen={modalCreditCard} onClose={setModalCreditCard}>
                 <div className="py-12 px-28">
                     <h4 className="text-center font-Poppins-Sb text-[20px] tracking-wide">Obtenga la aprobación más rápido con una tarjeta registrada</h4>
                     <p className="mt-6">Esto nos ayudará a verificar su elegibilidad para ofertar y le dará una mejor oportunidad de
                         obtener la aprobación para ofertar, pero no se le cobrará a su tarjeta.
                     </p>
                     <p className="text-center mt-10 text-[18px]">Aceptamos todas las tarjetas de crédito</p>
                     <div className="mt-4 grid grid-cols-4">
                         <div className="m-auto">
                             <img src={visa} className="h-20 w-20" alt=""/>
                         </div>
                         <div className="m-auto">
                             <img src={master} className="h-20 w-20" alt=""/>
                         </div>
                         <div className="m-auto">
                             <img src={diners} className="h-20 w-20" alt=""/>
                         </div>
                         <div className="m-auto">
                             <img src={amex} className="h-20 w-20" alt=""/>
                         </div>
                     </div>
                     <div className="mt-8">
                         <div className="grid grid-cols-1 gap-y-4">
                             <div>
                                 <label className=" block text-primary text-[15px] font-bold mb-1"
                                        htmlFor="card">
                                     Nombre De La Tarjeta
                                 </label>
                                 <input
                                     id="card"
                                     className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                     name="name" type="text"
                                 />
                             </div>
                             <div>
                                 <label className=" block text-primary text-[15px] font-bold mb-1"
                                        htmlFor="card_number">
                                     Número Tarjeta
                                 </label>
                                 <input
                                     id="card_number"
                                     className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                     name="card_number" type="text"
                                 />
                             </div>
                         </div>
                         <div className="grid grid-cols-2 gap-6 mt-4">
                             <div>
                                 <label className=" block text-primary text-[15px] font-bold mb-1"
                                        htmlFor="expiración">
                                     Expiración
                                 </label>
                                 <input
                                     id="expiración"
                                     className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                     name="expiration" type="number"
                                 />
                             </div>
                             <div>
                                 <label className=" block text-primary text-[15px] font-bold mb-1"
                                        htmlFor="cvv">
                                     Cvv
                                 </label>
                                 <input
                                     id="cvv"
                                     className="shadow appearance-none border rounded w-full
                                            py-3 px-3 text-gray-700 leading-tight focus:outline-none
                                            focus:shadow-outline focus:border-primary focus:ring-1
                                            focus:ring-primary"
                                     name="cvv" type="number"
                                 />
                             </div>
                         </div>
                         <div className="grid grid-cols-1 mt-6">
                             <div className="m-auto">
                                 <button
                                     className="bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-6 rounded">
                                     Guardar Tarjeta
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
            </Modal>
            <Footer/>
        </Fragment>
    )
}
export default Profile