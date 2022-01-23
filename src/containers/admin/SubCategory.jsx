import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../actions/generalActions";
import {PencilIcon, TrashIcon} from "@heroicons/react/outline";
import DataTableExtensions from "react-data-table-component-extensions";
import Datatable from "react-data-table-component";
import SidebarAdmin from "./layout/SidebarAdmin";
import {FiExternalLink} from "react-icons/fi";
import {
    ADD_SUBCATEGORY, DELETE_SUBCATEGORY,
    ERROR_SUBCATEGORY,
    GET_ALL_SUBCATEGORIES,
    LOAD_SUBCATEGORY
} from "../../types/subcategoriesTypes";
import {useForm} from "react-hook-form";
import Modal from "../../utils/Modal";
import {ERROR_CATEGORY, GET_ALL_CATEGORIES, LOAD_CATEGORY} from "../../types/categoriesTypes";
import {deleteAll, postAll} from "../../actions/crudActions";

const SubCategory = () => {
    const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const [modalCreateSubcategory, setModalCreateSubcategory] = useState(false);
    const [modalEditSubcategory, setModalEditSubcategory] = useState(false);
    const [modalDeleteSubcategory, setModalDeleteSubcategory] = useState(false);
    const [subcategory, setSubcategory] = useState({
        name: ''
    })
    const {subcategories} = useSelector(state => state.subcategoriesReducers);
    const {categories} = useSelector(state => state.categoriesReducers);

    useEffect(() => {
        dispatch(getAll('category/sub', LOAD_SUBCATEGORY, GET_ALL_SUBCATEGORIES, ERROR_SUBCATEGORY))
        dispatch(getAll('category', LOAD_CATEGORY, GET_ALL_CATEGORIES, ERROR_CATEGORY))
    }, [dispatch])

    const openCloseCreateSubcategory = () => {
        setModalCreateSubcategory(!modalCreateSubcategory)
        reset({
            name: ''
        })
    }

    const openCloseEditSubcategory = () => {
        setModalEditSubcategory(!modalEditSubcategory)
    }

    const openCloseDeleteSubcategory = () => {
        setModalDeleteSubcategory(!modalDeleteSubcategory)
    }

    const openModalByType = (row, type) => {
        setValue('id', row.id)
        setValue('name', row.name)
        setSubcategory({
            name: row.name
        })

        if (type === "edit") {
            openCloseEditSubcategory()
        }
        if (type === "delete") {
            openCloseDeleteSubcategory()
        }
    }

    const FormCreateSubcategory = (data) => {
        const {name, category_id} = data;
        const Fdata = new FormData();
        Fdata.append('name', name);
        Fdata.append('category_id', category_id);
        dispatch(postAll('admi/category/sub', Fdata, ADD_SUBCATEGORY, ERROR_SUBCATEGORY, true, '', ''))
        reset({
            name: '',
            category_id: ''
        })
        setModalCreateSubcategory(false)
    }

    const FormDeleteCategory = (data) => {
        const {id} = data;
        const Fdata = new FormData();
        dispatch(deleteAll('admi/category/sub',id,DELETE_SUBCATEGORY,ERROR_SUBCATEGORY,'Eliminado Correctamente', ''))
        setModalDeleteSubcategory(false);
    }


    const DatatableSubcategory = () => {
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
                name: 'SUBCATEGORÍA',
                selector: row => row.category_name
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
                                    onClick={() => openModalByType(row, 'delete')}
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
                <Modal height="max-w-2xl" onOpen={modalCreateSubcategory} onClose={setModalCreateSubcategory}>
                    <form onSubmit={handleSubmit(FormCreateSubcategory)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Nombre De Subcategoría
                                </label>
                                <input
                                    id="name"
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                                    ${errors.name ? "border-red-500 ring-1 ring-red-500" : "focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    {...register("name", {required: true})}
                                    name="name" type="text"
                                />
                                {errors.name?.type === 'required' &&
                                    <p className="text-xs text-red-500 mt-1 absolute">Este campo es requerido</p>}
                            </div>
                            <div>
                                <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
                                    Categoría
                                </label>
                                <div className="relative">
                                    <select className={`block appearance-none w-full border rounded text-gray-700 py-3 px-4 pr-28 rounded-md
                                 leading-tight focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
                                            {...register("category_id")}>
                                        {categories.map(value => (
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

                <Modal height="max-w-2xl" onOpen={modalDeleteSubcategory} onClose={setModalDeleteSubcategory}>
                    <form onSubmit={handleSubmit(FormDeleteCategory)} className="p-8">
                        <div className="grid grid-cols-1 gap-y-6">
                            <h2 className="text-[20px] text-center font-Poppins-Sb">Estás seguro que deseas
                                eliminar la subcategoría: <br/>
                                <span className="text-primary">"{subcategory.name}"</span> ?</h2>
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
                    data={subcategories}
                    print={false}
                    export={false}
                    filterPlaceholder="Buscar Subcategoría"
                >
                    <Datatable
                        columns={columns}
                        data={subcategories}
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
                        <h3 className="font-Poppins-Sb text-[24px] text-primary">Lista de subcategorías</h3>
                    </div>
                    <div>
                        <button
                            onClick={() => openCloseCreateSubcategory()}
                            className="flex items-center gap-2 text-white bg-primary px-6 py-2.5 rounded-lg hover:opacity-80">
                            <FiExternalLink className="w-5 h-5"/>
                            Crear Subcategoría
                        </button>
                    </div>
                </div>
                {DatatableSubcategory()}
            </SidebarAdmin>
        </Fragment>
    )
}
export default SubCategory