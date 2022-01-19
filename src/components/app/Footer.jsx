import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <Fragment>
            <div className="bg-secondary px-72 py-14 grid grid-cols-3 gap-8 font-Poppins-Rg">
                <div className="text-default px-16">
                    <span className="font-Poppins-Sb text-xl">Compañía</span>
                    <ul className="leading-loose mt-2">
                        <li>Acerca de</li>
                        <li>Noticias</li>
                        <li>Carreras</li>
                        <li>Ayuda</li>
                        <li>Comentarios</li>
                    </ul>
                </div>
                <div className="text-default px-16">
                    <span className="font-Poppins-Sb text-xl">Subastas</span>
                    <ul className="leading-loose mt-2">
                        <li>Calendario de subasta</li>
                        <li>Directorio de la casa de subasta</li>
                        <li>Resultados del precio de subasta</li>
                        <li>Subastas cerca de mí</li>
                        <li>Como funcionan las subastas</li>
                    </ul>
                </div>
                <div className="text-default px-16">
                    <span className="font-Poppins-Sb text-xl">Venta</span>
                    <ul className="leading-loose mt-2">
                        <li>
                            <a href="#" className="hover:text-hprimary">
                                Inicio de sesión del subastador
                            </a>
                        </li>
                        <li>
                            <NavLink to="registro-vendedor" className="hover:text-hprimary">
                                Conviertete en vendedor
                            </NavLink>
                        </li>
                        <li>Consignar un artículo</li>
                        <li>Centro de recursos para vendedores</li>
                        <li>Reseñas del vendedor</li>
                        <li>Por qué vender</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer