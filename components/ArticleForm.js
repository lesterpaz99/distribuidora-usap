import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const ArticleForm = () => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			nombre: '',
			descripcion: '',
			precio: 0,
			cli_id: 0,
			bod_id: 0,
		},
	});

	const onSubmit = async ({ nombre, descripcion, precio, cli_id, bod_id }) => {
		const rta = await axios.post('api/articles', {
			nombre,
			descripcion,
			precio,
			cli_id,
			bod_id,
		});
		console.log({ nombre, descripcion, precio, cli_id, bod_id });
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
				render={({ field }) => <Input {...field} placeholder='Nombre' />}
			/>
			<Controller
				name='descripcion'
				control={control}
				render={({ field }) => (
					<TextField {...field} placeholder='Descripcion' />
				)}
			/>
			<Controller
				name='cli_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input {...field} placeholder='Id del cliente' />
				)}
			/>
			<Controller
				name='bod_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<Input {...field} placeholder='Id de la Bodega' />
				)}
			/>
			<input
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
	);
};

export default ArticleForm;
