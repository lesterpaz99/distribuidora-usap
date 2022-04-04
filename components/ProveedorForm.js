import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ProveedorForm = () => {
	const schema = yup
		.object({
			nombre: yup.string().required(),
			direccion: yup.string(),
			telefono: yup.string().required(),
			email: yup.string(),
		})
		.required();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	/* 	const e = useForm({
		defaultValues: {
			nombre: '',
			direccion: '',
			telefono: '',
			email: '',
		},
	});
	console.log(e); */

	const onSubmit = async ({ nombre, direccion, telefono, email }) => {
		const rta = await axios.post('api/proveedores', {
			nombre,
			direccion,
			telefono,
			email,
		});
		console.log({
			nombre,
			direccion,
			telefono,
			email,
		});
		console.log(rta);
	};

	return (
		<>
			<h2>Proveedores</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-1/2 flex flex-col gap-2 p-8'
			>
				<Controller
					name='nombre'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label='Nombre'
							placeholder='Ingresar nombre'
						/>
					)}
				/>
				<Controller
					name='direccion'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label='Direccion'
							placeholder='1ra Calle, 3ra Ave'
							variant='outlined'
						/>
					)}
				/>
				<Controller
					name='telefono'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label='Telefono'
							placeholder='+504 9274-1234'
						/>
					)}
				/>
				<Controller
					name='email'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<TextField
							type='email'
							{...field}
							label='Email'
							placeholder='someone@mail.com'
						/>
					)}
				/>
				<input
					disabled={errors}
					type='submit'
					className='bg-green-500 ring-2 ring-green-300 hover:cursor-pointer active:bg-green-400'
				/>
			</form>
		</>
	);
};

export default ProveedorForm;
