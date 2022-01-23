import React, {Fragment, useEffect, useState} from "react";
import SidebarAdmin from "./layout/SidebarAdmin";
import {FiExternalLink} from "react-icons/fi";
import Datatable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../actions/generalActions";
import {
    ADD_CATEGORY, DELETE_CATEGORY,
    ERROR_CATEGORY,
    GET_ALL_CATEGORIES,
    LOAD_CATEGORY,
    UPDATE_CATEGORY
} from "../../types/categoriesTypes";
import {PencilIcon, TrashIcon} from "@heroicons/react/outline";
import {useForm} from "react-hook-form";
import Modal from "../../utils/Modal";
import {deleteAll, postAll, updateAll} from "../../actions/crudActions";

const Category = () => {
    const dispatch = useDispatch();
    const [modalCreateCategory, setModalCreateCategory] = useState(false);
    const [modalEditCategory, setModalEditCategory] = useState(false);
    const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
    const [category, setCategory] = useState({
        name: ''
    })
    const {categories} = useSelector(state => state.categoriesReducers);
    useEffect(() => {
        dispatch(getAll('category', LOAD_CATEGORY, GET_ALL_CATEGORIES, ERROR_CATEGORY))
    }, [dispatch])

    const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();

    const openCloseCreateCategory = () => {
        setModalCreateCategory(!modalCreateCategory)
        reset({
            name: ''
        })
    }

    const openCloseEditCategory = () => {
        setModalEditCategory(!modalEditCategory)
    }

    const openCloseDeleteCategory = () => {
        setModalDeleteCategory(!modalDeleteCategory)
    }

    const openModalByType = (row, type) => {
        setValue('id', row.id)
        setValue('name', row.name)
        setCategory({
            name: row.name
        })

        if (type === "edit") {
            openCloseEditCategory()
        }
        if (type === "delete") {
            openCloseDeleteCategory()
        }
    }

    const FormCreateCategory = (data) => {
        const {name} = data;
        const Fdata = new FormData();
        Fdata.append('name', name);
        dispatch(postAll('admi/category', Fdata, ADD_CATEGORY, ERROR_CATEGORY, true, '', ''))
        reset({
            name: ''
        })
        setModalCreateCategory(false)
    }

    const FormEditCategory = (data) => {
        const {name, id} = data;
        const Fdata = new FormData();
        Fdata.append('_method', 'PATCH');
        Fdata.append('name', name);
        dispatch(updateAll('admi/category', id, Fdata, UPDATE_CATEGORY, ERROR_CATEGORY, 'Actualizado Correctamente', ''))
        reset({
            name: ''
        })
        setModalEditCategory(false);
    }

    const FormDeleteCategory = (data) => {
        const {id} = data;
        const Fdata = new FormData();
        dispatch(deleteAll('admi/category', id, DELETE_CATEGORY, ERROR_CATEGORY, 'Eliminado Correctamente', ''))
        setModalDeleteCategory(false);
    }

    const DatatableCategory = () => {
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
                name: 'CATEGORÍA',
                selector: row => row.name
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
                <Modal height="max-w-2xl" onOpen={modalCreateCategory} onClose={setModalCreateCategory}>
                    <form onSubmit={handleSubmit(FormCreateCategory)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Nombre De Categoría
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
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>

                <Modal height="max-w-2xl" onOpen={modalEditCategory} onClose={setModalEditCategory}>
                    <form onSubmit={handleSubmit(FormEditCategory)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Nombre De Categoría
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

                <Modal height="max-w-2xl" onOpen={modalDeleteCategory} onClose={setModalDeleteCategory}>
                    <form onSubmit={handleSubmit(FormDeleteCategory)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <h2 className="text-[20px] text-center font-Poppins-Sb">Estás seguro que deseas
                                eliminar la categoría: <br/>
                                <span className="text-primary">"{category.name}"</span> ?</h2>
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
                    data={categories}
                    print={false}
                    export={false}
                    filterPlaceholder="Buscar Categoría"
                >
                    <Datatable
                        columns={columns}
                        data={categories}
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
                        <h3 className="font-Poppins-Sb text-[24px] text-primary">Lista de categorías</h3>
                    </div>
                    <div>
                        <button
                            onClick={() => openCloseCreateCategory()}
                            className="flex items-center gap-2 text-white bg-primary px-6 py-2.5 rounded-lg hover:opacity-80">
                            <FiExternalLink className="w-5 h-5"/>
                            Crear Categoría
                        </button>
                    </div>
                </div>
                {DatatableCategory()}
            </SidebarAdmin>
        </Fragment>
    )
}
export default Category;