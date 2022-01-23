import React, {Fragment} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {fLogin} from "../../actions/usersActions";
import {LOGIN_FAIL, LOGIN_SUCCESS} from "../../types/usersTypes";

const Login = () => {
    const dispatch = useDispatch();
    const {register, formState: {errors}, handleSubmit, reset} = useForm();
    const FormLogin = (data) => {
        const {email, password} = data;
        const Fdata = new FormData();
        Fdata.append('email', email);
        Fdata.append('password', password);
        dispatch(fLogin('auth/login',Fdata,'Autenticado Correctamente',LOGIN_SUCCESS,
                 'inicio',LOGIN_FAIL,'Credenciales Incorrectas'))
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <Fragment>
            <div
                className="bg-[url('/src/assets/img/auctioneers.jpeg')] h-screen lg:h-screen bg-cover bg-center opacity-100 bg-scroll">
                <div className="px-96 pt-40">
                    <div className="text-white pt-10 text-center px-32">
                        <h3 className="lg:text-6xl font-bold text-primary">Live<span
                            className="text-black">Subastas</span></h3>
                    </div>
                    <div className="mt-10 px-32">
                        <form onSubmit={handleSubmit(FormLogin)}>
                            <div className="p-8 bg-white rounded-3xl border border-2 border-primary">
                                <div className="grid grid-cols-1 gap-y-6">
                                    <div>
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
                                    <div>
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
                                    <div className="mt-2">
                                        <button
                                            className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                            Ingresar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Login