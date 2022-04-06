import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';

import ArticleForm from '../components/ArticleForm';
import ArticleTable from '../components/ArticleTable';

import BodegaForm from '../components/BodegaForm';
import BodegaTable from '../components/BodegaTabe';

import ClienteForm from '../components/ClienteForm';
import ClientTable from '../components/ClientTable';

import EmpleadoForm from '../components/EmpleadoForm';
import EmpleadoTable from '../components/EmpleadoTable';
import CajeroTable from '../components/CajeroTable';

import FacturaForm from '../components/FacturaForm';
import FacturaTable from '../components/FacturaTable';

import ProveedorForm from '../components/ProveedorForm';
import ProveedorTable from '../components/ProveedorTable';

import OrdenEntregaForm from '../components/OrdenEntregaForm';
import OrdenEntregaTable from '../components/OrdenEntregaTable';

import axios from 'axios';
import Layout from '../layout/Layout';

export default function Home({articles, clients, warehouses, employees, invoices, cashiers, providers}) {
	return <Layout>
		<div className='w-full'>
		<div className='w-3/4 my-0 mx-auto'>
			{/* Here Grid with the links to forms */}

			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Articulos</h2>
			<ArticleTable articles={articles} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Clientes</h2>
			<ClientTable clients={clients} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Bodegas</h2>
			<BodegaTable bodegas={warehouses} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Empleados</h2>
			<EmpleadoTable employees={employees} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Cajeros</h2>
			<CajeroTable cashiers={cashiers} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Facturas</h2>
			<FacturaTable invoices={invoices} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Ordenes de entrega</h2>
			<OrdenEntregaTable invoices={invoices} />

			<br />
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>Proveedor</h2>
			<ProveedorTable providers={providers} />

	</div>
	</div>
	</Layout>
}


export const getServerSideProps = async (context) => {
	const { data: articles } = await axios.get('http://localhost:3000/api/articles');

	const {data: clients} = await axios.get('http://localhost:3000/api/clientes');

	const {data: warehouses} = await axios.get('http://localhost:3000/api/bodegas');

	const {data: employees} = await axios.get('http://localhost:3000/api/empleados');

	const {data: invoices} = await axios.get('http://localhost:3000/api/facturas'); 

	const {data: cashiers} = await axios.get('http://localhost:3000/api/cajeros');

	const {data: providers} = await axios.get('http://localhost:3000/api/proveedores');

	return {
		props: {
			articles, clients, warehouses, employees, invoices, cashiers, providers
		}
	}
}