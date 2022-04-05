import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { TextField } from '@mui/material';

const BodegaForm = () => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			direccion: '',
		},
	});

	const onSubmit = async ({ direccion }) => {
		const rta = await axios.post('/api/bodegas', {
			direccion,
		});
		console.log({ direccion });
		console.log(rta);

		reset({direccion: ''})
	};

	return (
		<div>
			<h2>Bodega</h2>
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-1/2 flex flex-col gap-2 p-8'
		>
			<Controller
				name='direccion'
				control={control}
				rules={{ required: true }}
				render={({ field }) => <TextField {...field} label='Direccion' placeholder='33 Calle, Sector El Polvorin' />}
			/>
			<input
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
		</div>
	);
};

export default BodegaForm;
