import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import axios from 'axios';

const BodegaForm = () => {
	const { control, handleSubmit } = useForm({
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
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-1/2 flex flex-col gap-2 p-8'
		>
			<Controller
				name='direccion'
				control={control}
				rules={{ required: true }}
				render={({ field }) => <Input {...field} />}
			/>
			<input
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
	);
};

export default BodegaForm;
