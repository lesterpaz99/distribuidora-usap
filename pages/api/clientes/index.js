import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
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
}
