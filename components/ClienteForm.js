import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { format } from 'date-fns';
import axios from 'axios';

const ClienteForm = () => {
	const [value, setValue] = useState(null);

	const { control, handleSubmit } = useForm({
		defaultValues: {
			nombre: '',
			apellido: '',
			direccion: '',
			fecha_nacimiento: value,
			telefono: '',
			email: '',
		},
	});

	const onSubmit = async ({
		nombre,
		apellido,
		direccion,
		fecha_nacimiento,
		telefono,
		email,
	}) => {
		const rta = await axios.post('api/clientes', {
			nombre,
			apellido,
			direccion,
			fecha_nacimiento,
			telefono,
			email,
		});
		console.log({
			nombre,
			apellido,
			direccion,
			fecha_nacimiento: format(fecha_nacimiento, 'yyyy-MM-dd HH-mm-ss'),
			telefono,
			email,
		});
		console.log(rta);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-1/2 flex flex-col gap-2 p-8'
		>
			<Controller
				name='nombre'
				control={control}
				rules={{ required: true }}
				render={({ field }) => <Input {...field} placeholder='nombre' />}
			/>
			<Controller
				name='apellido'
				control={control}
				render={({ field }) => <TextField {...field} placeholder='apellido' />}
			/>
			<Controller
				name='direccion'
				control={control}
				render={({ field }) => <TextField {...field} placeholder='direccion' />}
			/>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<Controller
					name='fecha_nacimiento'
					control={control}
					render={({ field }) => (
						<DatePicker
							label='Fecha Nacimiento'
							value={value}
							onChange={(newValue) => {
								field.onChange(newValue);
								setValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} {...field} />}
						/>
					)}
				/>
			</LocalizationProvider>
			<Controller
				name='telefono'
				control={control}
				render={({ field }) => <TextField {...field} placeholder='telefono' />}
			/>
			<Controller
				name='email'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input type='email' {...field} placeholder='email' />
				)}
			/>
			<input
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
	);
};

export default ClienteForm;
