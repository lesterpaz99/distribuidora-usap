import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getClients(req, res);
		case 'POST':
			return saveClients(req, res);
	}
}

const getClients = async (req, res) => {
	const [result] = await pool.query('SELECT * FROM cliente');
	console.log(result)
	return res.status(200).json(result);
}

const saveClients = async (req, res) => {
	const { nombre, apellido, direccion, fecha_nacimiento, telefono, email } =
				req.body;
			const [rta] = await pool.query('INSERT INTO cliente SET ?', {
				nombre,
				apellido,
				direccion,
				fecha_nacimiento,
				telefono,
				email,
			});
			console.log('rta', rta);
			return res.status(200).json({
				nombre,
				apellido,
				direccion,
				fecha_nacimiento,
				telefono,
				email,
				cli_id: rta.insertId,
			});
}