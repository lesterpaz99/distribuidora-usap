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

export default function Home() {
	return <OrdenEntregaForm />;
}
