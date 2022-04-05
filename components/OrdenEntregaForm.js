import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';
import axios from 'axios';

const OrdenEntregaForm = () => {
	const [value, setValue] = useState(null);

	const { control, handleSubmit, formState } = useForm({
		defaultValues: {
			fecha_entrega: '',
			arti_id: '',
			prov_id: '',
		},
	});

	const onSubmit = async ({ fecha_entrega, arti_id, prov_id }) => {
		console.log({
			fecha_entrega: format(fecha_entrega, 'yyyy-MM-dd HH-mm-ss'),
			arti_id: Number(arti_id),
			prov_id: Number(prov_id),
		});
		const rta = await axios.post('api/ordenes_entrega', {
			fecha_entrega: format(fecha_entrega, 'yyyy-MM-dd HH-mm-ss'),
			arti_id: Number(arti_id),
			prov_id: Number(prov_id),
		});
		console.log(rta);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-1/2 flex flex-col gap-2 p-8'
		>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Controller
					name='fecha_entrega'
					control={control}
					render={({ field }) => (
						<DatePicker
							label='Fecha de entrega'
							value={value}
							onChange={(newValue) => {
								field.onChange(newValue);
								setValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					)}
				/>
			</LocalizationProvider>
			<Controller
				name='arti_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						{...field}
						error={!formState.dirtyFields.arti_id}
						label='ID del articulo'
						type='number'
						placeholder='Ejm: 5'
						variant='outlined'
						required={true}
						helperText={
							!formState.dirtyFields.arti_id ? 'Este campo es requerido' : ''
						}
					/>
				)}
			/>
			<Controller
				name='prov_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField
						{...field}
						error={!formState.dirtyFields.prov_id}
						label='ID del proveedor'
						placeholder='Ejm: 2'
						variant='outlined'
						type='number'
						required={true}
						helperText={formState.errors.prov_id?.message}
					/>
				)}
			/>
			<input
				value='Guardar'
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400 disabled:bg-slate-50 disabled:ring-0 disabled:cursor-default'
				disabled={!formState.errors}
			/>
		</form>
	);
};

export default OrdenEntregaForm;
