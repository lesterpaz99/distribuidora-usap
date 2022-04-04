import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { format } from 'date-fns';

const EmpleadoForm = () => {
	const [value, setValue] = useState(null);
	const [checked, setChecked] = useState(false);

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			nombre: '',
			apellido: '',
			direccion: '',
			fecha_nacimiento: value,
			telefono: '',
			email: '',
			isCajero: checked,
		},
	});

	const onSubmit = async ({
		nombre,
		apellido,
		direccion,
		fecha_nacimiento,
		telefono,
		email,
		isCajero,
	}) => {
		const responseEmp = await axios.post('api/empleados', {
			nombre,
			apellido,
			direccion,
			fecha_nacimiento: format(fecha_nacimiento, 'yyyy-MM-dd HH-mm-ss'),
			telefono,
			email,
		});

		let responseCaje = null;
		if (isCajero) {
			responseCaje = await axios.post('api/cajeros', {
				emp_id: responseEmp.data.emp_id,
			});
		}
		console.log({
			nombre,
			apellido,
			direccion,
			fecha_nacimiento,
			telefono,
			email,
			isCajero,
		});
		console.log('empres', responseEmp);
		console.log('cajeres', responseCaje);

		setChecked(false);
		reset({
			nombre: '',
			apellido: '',
			direccion: '',
			fecha_nacimiento: null,
			telefono: '',
			email: '',
			isCajero: checked,
		});
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
							{...field}
							label='Fecha Nacimiento'
							onChange={(newValue) => {
								setValue(newValue);
								field.onChange(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
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
			<Controller
				name='isCajero'
				control={control}
				render={({ field }) => (
					<div>
						<Switch
							{...field}
							onChange={(e) => {
								setChecked(e.target.checked);
								field.onChange(e.target.checked);
							}}
							inputProps={{ 'aria-label': 'controlled' }}
						/>
						<span>Cajero</span>
					</div>
				)}
			/>
			<input
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
	);
};

export default EmpleadoForm;
