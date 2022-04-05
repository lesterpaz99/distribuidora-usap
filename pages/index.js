import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import ArticleForm from '../components/ArticleForm';
import BodegaForm from '../components/BodegaForm';
import ClienteForm from '../components/ClienteForm';
import EmpleadoForm from '../components/EmpleadoForm';
import FacturaForm from '../components/FacturaForm';
import ProveedorForm from '../components/ProveedorForm';
import OrdenEntregaForm from '../components/OrdenEntregaForm';
import axios from 'axios';
import ArticleTable from '../components/ArticleTable';
import ClientTable from '../components/ClientTable';

export default function Home({articles, clients}) {
	return <div className='w-3/6'>
			<h1>Home</h1>

			<br />
			<h2>Articulos</h2>
			<ArticleTable articles={articles} />

			<br />
			<h2>Clientes</h2>
			<ClientTable clients={clients} />
	</div>
}


export const getServerSideProps = async (context) => {
	const { data: articles } = await axios.get('http://localhost:3000/api/articles');

	const {data: clients} = await axios.get('http://localhost:3000/api/clientes');

	console.log(articles)

	return {
		props: {
			articles, clients
		}
	}
}