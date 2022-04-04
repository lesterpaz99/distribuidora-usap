import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { endOfDay, format } from 'date-fns';
import axios from 'axios';

const FacturaForm = () => {
	const [total, setTotal] = useState(0);
	const [tax, setTax] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [errorCliente, setErrorCliente] = useState(false);
	const [errorCajero, setErrorCajero] = useState(false);

	const handleTax = (newValue) => setTax(newValue);
	const handleSubtotal = (newValue) => setSubtotal(newValue);

	const handleTotal = () => {
		const appliedTax = Number(subtotal) * (Number(tax) / 100);
		setTotal(Number(subtotal) + Number(appliedTax));
	};

	const handleErrors = (e) => {
		if (e.target.id === 'cli_id') {
			if (e.target.value.length === 0) {
				setErrorCliente(true);
				return;
			}
			setErrorCliente(false);
			return;
		}
		if (e.target.id === 'caje_id') {
			if (e.target.value.length === 0) {
				setErrorCajero(true);
				return;
			}
			setErrorCajero(false);
			return;
		}
	};

	const { control, handleSubmit } = useForm({
		defaultValues: {
			cli_id: '',
			caje_id: '',
			impuesto: 0,
			subtotal: 0,
			total: 0,
		},
	});

	const onSubmit = async ({ cli_id, caje_id, impuesto, subtotal }) => {
		console.log({
			cli_id,
			caje_id,
			impuesto: parseFloat(impuesto),
			subtotal: parseFloat(subtotal),
			total,
			fecha: format(new Date(), 'yyyy-MM-dd HH-mm-ss'),
		});
		const rta = await axios.post('api/facturas', {
			cli_id,
			caje_id,
			impuesto: parseFloat(impuesto),
			subtotal: parseFloat(subtotal),
			total,
			fecha: format(new Date(), 'yyyy-MM-dd HH-mm-ss'),
		});
		console.log(rta);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-1/2 flex flex-col gap-2 p-8'
		>
			<Controller
				name='cli_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						{...field}
						id='cli_id'
						error={errorCliente}
						label='ID del cliente'
						type='number'
						placeholder='Ejm: 5'
						variant='outlined'
						required={true}
						helperText={errorCliente ? 'Este campo es requerido' : ''}
						onChange={(e) => {
							handleErrors(e);
							field.onChange(e.target.value);
						}}
					/>
				)}
			/>
			<Controller
				name='caje_id'
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						id='caje_id'
						error={errorCajero}
						label='ID del cajero'
						placeholder='Ejm: 2'
						variant='outlined'
						type='number'
						required={true}
						helperText={errorCajero ? 'Este campo es requerido' : ''}
						onChange={(e) => {
							handleErrors(e);
							field.onChange(e.target.value);
						}}
					/>
				)}
			/>
			<Controller
				name='impuesto'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						{...field}
						label='Impuesto'
						placeholder='Ingrese el impuesto a aplicar'
						variant='outlined'
						type='number'
						onChange={(e) => {
							field.onChange(e.target.value);
							handleTax(e.target.value);
							handleTotal();
						}}
						value={tax}
					/>
				)}
			/>
			<Controller
				name='subtotal'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						{...field}
						label='Subtotal'
						placeholder='Ingrese el total de la compra'
						variant='outlined'
						type='number'
						onChange={(e) => {
							field.onChange(e.target.value);
							handleSubtotal(e.target.value);
							handleTotal();
						}}
						value={subtotal}
					/>
				)}
			/>
			<div>
				<h2 className='text-lg font-medium'>Total: </h2>{' '}
				<span className='ordinal slashed-zero tabular-nums'>
					L {Number(total).toFixed(2)}
				</span>
			</div>
			<input
				value='Guardar'
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
	);
};

export default FacturaForm;
