import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const ArticleForm = () => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			nombre: '',
			descripcion: '',
			precio: '',
			cli_id: '',
			bod_id: '',
		},
	});

	const onSubmit = async ({ nombre, descripcion, precio, cli_id, bod_id }) => {
		const rta = await axios.post('api/articles', {
			nombre,
			descripcion,
			precio: 0.00,
			cli_id,
			bod_id,
		});
		console.log({ nombre, descripcion, precio, cli_id, bod_id });
		console.log(rta);

		reset();
	};

	return (
		<div>
			<h2>CRUD Articulo</h2>
					<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-1/2 flex flex-col gap-2 p-8'
		>
			<Controller
				name='nombre'
				control={control}
				rules={{ required: true }}
				render={({ field }) => <TextField {...field} label='Nombre' placeholder='Jugo' />}
			/>
			<Controller
				name='descripcion'
				control={control}
				render={({ field }) => (
					<TextField {...field} label='Descripcion' placeholder='Sabor Naranja, 1Lt Premium' />
				)}
			/>
						<Controller
				name='precio'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField {...field} type='number' label='Precio' placeholder='L 38.00' />
				)}
			/>
			<Controller
				name='cli_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField {...field} type='number' label='ID del cliente' placeholder='Ejm: 1' />
				)}
			/>
			<Controller
				name='bod_id'
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextField {...field} type='number' label='ID de la bodega' placeholder='Ejm: 2' />
				)}
			/>
			<input
				type='submit'
				className='bg-green-300 ring-2 ring-cyan-300 hover:cursor-pointer active:bg-green-400'
			/>
		</form>
		</div>
	);
};

export default ArticleForm;
