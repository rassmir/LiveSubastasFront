import React, {Fragment, useEffect, useState} from "react";
import SidebarAdmin from "./layout/SidebarAdmin";
import {FiExternalLink} from "react-icons/fi";
import {PencilIcon, TrashIcon} from "@heroicons/react/outline";
import Modal from "../../utils/Modal";
import DataTableExtensions from "react-data-table-component-extensions";
import Datatable from "react-data-table-component";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../actions/generalActions";
import {ERROR_SUBCATEGORY, GET_ALL_SUBCATEGORIES, LOAD_SUBCATEGORY} from "../../types/subcategoriesTypes";
import {useForm} from "react-hook-form";
import {deleteAll, postAll, updateAll} from "../../actions/crudActions";
import {ADD_BRAND, DELETE_BRAND, ERROR_BRAND, GET_ALL_BRANDS, LOAD_BRAND, UPDATE_BRAND} from "../../types/brandsTypes";

const Brand = () => {
    const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();

    const dispatch = useDispatch();
    const [modalCreateBrand, setModalCreateBrand] = useState(false);
    const [modalEditBrand, setModalEditBrand] = useState(false);
    const [modalDeleteBrand, setModalDeleteBrand] = useState(false);
    const [brand, setBrand] = useState({
        name: ''
    })
    const {subcategories} = useSelector(state => state.subcategoriesReducers);
    const {brands} = useSelector(state => state.brandsReducers);
    useEffect(() => {
        dispatch(getAll('mark', LOAD_BRAND, GET_ALL_BRANDS, ERROR_BRAND))
        dispatch(getAll('category/sub', LOAD_SUBCATEGORY, GET_ALL_SUBCATEGORIES, ERROR_SUBCATEGORY))
    }, [dispatch])

    const openCloseCreateBrand = () => {
        setModalCreateBrand(!modalCreateBrand)
        reset({
            name: ''
        })
    }

    const openCloseEditBrand = () => {
        setModalEditBrand(!modalEditBrand)
    }

    const openCloseDeleteBrand = () => {
        setModalDeleteBrand(!modalDeleteBrand)
    }

    const openModalByType = (row, type) => {
        setValue('id', row.id)
        setValue('name', row.name)
        setBrand({
            name: row.name
        })

        if (type === "edit") {
            openCloseEditBrand()
        }

        if (type === "delete") {
            openCloseDeleteBrand()
        }
    }

    const FormCreateBrand = (data) => {
        const {name, sub_category_id} = data;
        const Fdata = new FormData();
        Fdata.append('name', name);
        Fdata.append('sub_category_id', sub_category_id);
        dispatch(postAll('admi/mark', Fdata, ADD_BRAND, ERROR_BRAND, true, '', ''))
        reset({
            name: ''
        })
        setModalCreateBrand(false)
    }

    const FormEditBrand = (data) => {
        const {name, id} = data;
        const Fdata = new FormData();
        Fdata.append('_method', 'PATCH');
        Fdata.append('name', name);
        dispatch(updateAll('admi/category', id, Fdata, UPDATE_BRAND, ERROR_BRAND, 'Actualizado Correctamente', ''))
        reset({
            name: ''
        })
        setModalEditBrand(false);
    }

    const FormDeleteBrand = (data) => {
        const {id} = data;
        dispatch(deleteAll('admi/mark', id, DELETE_BRAND, ERROR_BRAND, 'Eliminado Correctamente', ''))
        setModalDeleteBrand(false);
    }

    const DatatableBrand = () => {
        const customStyles = {
            rows: {
                style: {
                    minHeight: '60px',
                    fontSize: '15px',
                    fontWeight: '500'
                }
            },
            headCells: {
                style: {
                    paddingLeft: '58px',
                    backgroundColor: '#FF7400',
                    color: '#fff',
                    fontSize: '16px',
                },
            },
            cells: {
                style: {
                    paddingLeft: '54px',
                },
            },
        };
        const columns = [
            {
                name: 'ID',
                selector: row => row.id
            },
            {
                name: 'MARCA',
                selector: row => row.name
            },
            {
                name: 'SUBCATEGORÍA',
                selector: row => row.sub_Category
            },
            {
                name: 'ACCIONES',
                selector: row => {
                    return (
                        <React.Fragment>
                            <button className="bg-yellow-400 px-4 py-2 rounded-md hover:opacity-90 mr-3"
                                    onClick={() => openModalByType(row, 'edit')}
                            >
                                <PencilIcon className="w-5 h-5"/>
                            </button>
                            <button className="bg-red-500 px-4 py-2 rounded-md hover:opacity-90 text-white"
                                    onClick={() => openModalByType(row, "delete")}
                            >
                                <TrashIcon className="w-5 h-5"/>
                            </button>

                        </React.Fragment>
                    );
                }
            }
        ]
        return (
            <Fragment>
                <Modal height="max-w-2xl" onOpen={modalCreateBrand} onClose={setModalCreateBrand}>
                    <form onSubmit={handleSubmit(FormCreateBrand)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Nombre De Marca
                                </label>
                                <input
                                    id="name"
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.name ? "border-red-500 ring-1 ring-red-500" : "focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    {...register("name", {required: true})}
                                    name="name" type="text"
                                />
                                {errors.name?.type === 'required' &&
                                    <p className="text-xs text-red-500 mt-1 absolute">Este campo es requerido</p>}
                            </div>
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Subcategoría
                                </label>
                                <div className="relative">
                                    <select className={`block appearance-none w-full border rounded text-gray-700 py-3 px-4 pr-28 rounded-md
                                 leading-tight focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                                            {...register("sub_category_id")}>
                                        <option disabled>Seleccione subcategoría</option>
                                        {subcategories.map(value => (
                                            <option key={value.id} value={value.id}>
                                                {value.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grSecond1-c2">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>

                <Modal height="max-w-2xl" onOpen={modalEditBrand} onClose={setModalEditBrand}>
                    <form onSubmit={handleSubmit(FormEditBrand)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Nombre De Marca
                                </label>
                                <input
                                    id="name"
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.name ? "border-red-500 ring-1 ring-red-500" : "focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    {...register("name", {required: true})}
                                    name="name" type="text"
                                />
                                {errors.name?.type === 'required' &&
                                    <p className="text-xs text-red-500 mt-1 absolute">Este campo es requerido</p>}
                            </div>
                            <div>
                                <button
                                    className="w-full bg-primary hover:bg-hprimary text-white font-Poppins-Bd py-3 px-4 rounded">
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>

                <Modal height="max-w-2xl" onOpen={modalDeleteBrand} onClose={setModalDeleteBrand}>
                    <form onSubmit={handleSubmit(FormDeleteBrand)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <h2 className="text-[20px] text-center font-Poppins-Sb">Estás seguro que deseas
                                eliminar la marca: <br/>
                                <span className="text-primary">"{brand.name}"</span> ?</h2>
                            <div>
                                <button
                                    className="w-full bg-red-600 hover:bg-red-500 text-white font-Poppins-Bd py-3 px-4 rounded">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>

                <DataTableExtensions
                    columns={columns}
                    data={brands}
                    print={false}
                    export={false}
                    filterPlaceholder="Buscar Marca"
                >
                    <Datatable
                        columns={columns}
                        data={brands}
                        fixedHeader={true}
                        customStyles={customStyles}
                        pagination={true}
                    />
                </DataTableExtensions>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <SidebarAdmin>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-Poppins-Sb text-[24px] text-primary">Lista de marcas</h3>
                    </div>
                    <div>
                        <button
                            onClick={() => openCloseCreateBrand()}
                            className="flex items-center gap-2 text-white bg-primary px-6 py-2.5 rounded-lg hover:opacity-80">
                            <FiExternalLink className="w-5 h-5"/>
                            Crear Marca
                        </button>
                    </div>
                </div>
                {DatatableBrand()}
            </SidebarAdmin>
        </Fragment>
    )
}
export default Brand;