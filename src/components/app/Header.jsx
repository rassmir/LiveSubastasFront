import React, {Fragment, useState} from "react";
import logo from '../../assets/img/logo.png'
import {SearchIcon} from "@heroicons/react/solid";
import Modal from "../../utils/Modal";
import bglogin from "../../assets/img/img-login.jpeg";
import bgregister from "../../assets/img/img-register.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {fregister} from "../../actions/usersActions";
import {REGISTER_FAIL, REGISTER_SUCCESS} from "../../types/usersTypes";
import {useForm} from "react-hook-form";

const Header = () => {
    const users = useSelector(state => state.usersReducers);
    console.log(users)
    const dispatch = useDispatch();
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);

    const {register, formState: {errors}, handleSubmit, reset} = useForm();

    const onOpenCloseModalRegister = () => {
        setModalRegister(!modalRegister)
        setModalLogin(false);
    }

    const onOpenCloseModalLogin = () => {
        setModalLogin(!modalLogin)
        setModalRegister(false)
    }

    const FormRegister = (data) => {
        const {email, password, name} = data;

        const Fdata = new FormData();
        Fdata.append('email', email);
        Fdata.append('password', password);
        Fdata.append('name', name);
        Fdata.append('rol', '1');
        dispatch(fregister('auth/register', Fdata, REGISTER_SUCCESS, REGISTER_FAIL, true, 'Registrado Correctamente', 'Fallo En El Registro'))
        reset({
            email: '',
            password: '',
            name: '',
            terms: false
        })

        setModalRegister(false)
    }

    const guestLinks = () => {
        return(
            <Fragment>
                <div className="flex text-2xl space-x-8">
                    <button onClick={() => onOpenCloseModalRegister()}
                            className="font-Poppins-Bd text-primary hover:text-hprimary">Crear Cuenta
                    </button>
                    <button onClick={() => onOpenCloseModalLogin()}>
                        Iniciar Sesión
                    </button>
                </div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="px-24 py-8 border font-Poppins-Rg">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/"><img src={logo} alt="" className="h-40px"/></a>
                    </div>
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
                    {guestLinks()}
                </div>
            </div>
            <Modal onOpen={modalRegister} onClose={setModalRegister}>
                <div className="flex font-Poppins-Rg">
                    <div className="w-6/12">
                        <img src={bglogin} alt="" className="rounded-l-3xl"/>
                    </div>
                    <form onSubmit={handleSubmit(FormRegister)} className="w-6/12">
                        <img src={logo} className="h-8 m-auto mt-8" alt=""/>
                        <div className="text-center mt-5">
                            <h4 className="font-bold text-xl">Registrate y comienza a ofertar</h4>
                        </div>
                        <div className="px-12">
                            <div className="mb-6 mt-4">
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.name ? "border-red-500 ring-1 ring-red-500" : "focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    {...register("name", {required: true})}
                                    name="name" type="text"
                                    placeholder="Ingrese su nombre"/>
                                {errors.name?.type === 'required' &&
                                    <p className="text-xs text-red-500 mt-1 absolute">Este campo es requerido</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.email ? "border-red-500 ring-1 ring-red-500" : "focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    {...register("email", {required: true})}
                                    name="email" type="email"
                                    placeholder="Ingrese correo electrónico"/>
                                {errors.email &&
                                    <p className="text-xs text-red-500 mt-1 absolute">Este campo es requerido</p>}
                            </div>
                            <div className="mb-7">
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.password ? "border-red-500 ring-1 ring-red-500" : "focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    {...register("password", {required: true})}
                                    name="password" type="password"
                                    placeholder="Ingrese contraseña"/>
                                {errors.password &&
                                    <p className="text-xs text-red-500 mt-1 absolute">Este campo es requerido</p>}
                            </div>
                        </div>
                        <div className="mb-3 text-center">
                            <label className="px-14 block text-gray-500 font-Poppins-Bd">
                                <input
                                    className={`mr-2 leading-tight h-4 w-4 transition duration-200 ${
                                        errors.terms ? "border-red-500 ring-2 ring-red-500" : "ring-gray-500"
                                    }`}
                                    type="checkbox"
                                    name="terms"
                                    {...register("terms", {required: true})}
                                />
                                <span className="text-sm">
                                    Acepto los términos , políticas de privacidad y cookies.
                                 </span>
                            </label>
                        </div>
                        <div className="mt-2 px-12">
                            <button
                                className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                Registrarse
                            </button>
                        </div>
                        <div className="mt-2 text-center">
                                <span className="text-sm">
                                    Ya tienes una cuenta. <button onClick={() => onOpenCloseModalLogin()}
                                                                  className="text-primary font-Poppins-Bd">Entrar</button>
                                 </span>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal onOpen={modalLogin} onClose={setModalLogin}>
                <div className="flex font-Poppins-Rg">
                    <div className="w-6/12">
                        <img src={bgregister} alt="" className="rounded-l-3xl"/>
                    </div>
                    <div className="w-6/12">
                        <img src={logo} className="h-8 m-auto mt-10" alt=""/>
                        <div className="text-center mt-5">
                            <h4 className="font-bold text-xl">Inicia Sesión y comienza a ofertar</h4>
                        </div>
                        <div className="px-12 mt-10">
                            <div className="mb-4">
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:shadow-outline"
                                    id="email" type="text" placeholder="Correo"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary focus:shadow-outline"
                                    id="password" type="text" placeholder="Correo"/>
                            </div>
                        </div>
                        <div className="mt-8 px-12">
                            <button
                                className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                Entrar
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                                <span className="text-sm">
                                    Aún no tienes una cuenta?. <button onClick={() => onOpenCloseModalRegister()}
                                                                       className="text-primary font-Poppins-Bd">Registrate</button>
                                 </span>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}
export default Header
