import React, {Fragment, useEffect} from "react";
import {BiArchive, BiArchiveOut, BiBookmark, BiChevronDown, BiHomeAlt} from "react-icons/bi";
import {FiMenu} from "react-icons/fi";
import {SearchIcon} from "@heroicons/react/solid";
import { Menu } from '@headlessui/react'
import {IoExitOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authProfile} from "../../../actions/usersActions";
import {GET_USER_AUTH, LOGIN_FAIL} from "../../../types/usersTypes";

const SidebarAdmin = ({children}) => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.usersReducers);
    useEffect(() => {
        dispatch(authProfile('auth/user-profile',GET_USER_AUTH,LOGIN_FAIL))
    }, [dispatch])
         return(
             <Fragment>
                 <div className="relative min-h-screen md:flex">
                     <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                         <a href="#" className="block p-4 text-white font-bold">Live<span>Subastas</span></a>
                         <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                             <FiMenu className="h-5 w-5"/>
                         </button>
                     </div>

                     <div
                         className="sidebar w-80 space-y-10 py-7 px-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r">
                         <h2 className="font-black text-center text-[26px]">Live<span className="text-primary">Subastas</span></h2>
                         <nav>
                             <NavLink to="/admin/inicio" className="flex items-center px-4 py-3 mt-5 transition-colors
                              duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" activeClassName="text-white bg-primary hover:bg-primary hover:text-white">
                                 <BiHomeAlt className="h-5 w-5"/>
                                 <span className="mx-4 font-medium">Inicio</span>
                             </NavLink>
                             <NavLink to="/admin/categorias" className="flex items-center px-4 py-3 mt-5 transition-colors
                              duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" activeClassName="text-white bg-primary hover:bg-primary hover:text-white">
                                 <BiArchive className="h-5 w-5"/>
                                 <span className="mx-4 font-medium">Categorías</span>
                             </NavLink>
                             <NavLink to="/admin/subcategorias" className="flex items-center px-4 py-3 mt-5 transition-colors
                              duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" activeClassName="text-white bg-primary hover:bg-primary hover:text-white">
                                 <BiArchiveOut className="h-5 w-5"/>
                                 <span className="mx-4 font-medium">Subcategorías</span>
                             </NavLink>
                             <NavLink to="/admin/marcas" className="flex items-center px-4 py-3 mt-5 transition-colors
                              duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700" activeClassName="text-white bg-primary hover:bg-primary hover:text-white">
                                 <BiBookmark className="h-5 w-5"/>
                                 <span className="mx-4 font-medium">Marcas</span>
                             </NavLink>
                         </nav>
                     </div>

                     <div className="w-full">
                         <div className="py-6 px-10 border-b w-full flex justify-between items-center">
                             <div className="w-700px">
                                 <label className="relative block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                        <SearchIcon className="h-6 w-6 fill-gray-300"/>
                                    </span>
                                             <input
                                                 className="placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary sm:text-sm"
                                                 placeholder="Buscar aquí..." type="text"/>
                                     </label>
                             </div>
                             <div>
                                 <Menu as="div" className="relative inline-block text-left">
                                     <div>
                                         <Menu.Button className="inline-flex gap-2 justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                             {users.name}
                                             <BiChevronDown className="w-5 h-5"/>
                                         </Menu.Button>
                                     </div>
                                     <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-Poppins-Rg">
                                         <div className="px-3 py-2.5">
                                             <Menu.Item>
                                                 {({ active }) => (
                                                     <button
                                                         className={`${
                                                             active ? 'bg-primary text-white' : 'text-gray-900'
                                                         } group flex items-center gap-2 rounded-md items-center w-full px-3 py-2.5 text-[14px]`}
                                                     >
                                                     <IoExitOutline className="w-5 h-5"/>
                                                         Salir
                                                     </button>
                                                 )}
                                             </Menu.Item>
                                         </div>
                                     </Menu.Items>
                                 </Menu>
                             </div>
                         </div>
                         <div className="bg-neutro px-14 py-10">
                              <div className="bg-white rounded-xl p-10">
                                  {children}
                              </div>
                         </div>
                     </div>

                 </div>
             </Fragment>
         )
}
export default SidebarAdmin