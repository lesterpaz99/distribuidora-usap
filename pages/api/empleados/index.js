import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
			const { nombre, apellido, direccion, fecha_nacimiento, telefono, email } =
				req.body;

			let [rta] = await pool.query('INSERT INTO empleado SET ?', {
				nombre,
				apellido,
				direccion,
				fecha_nacimiento,
				telefono,
				email,
			});

			return res.status(200).json({
				nombre,
				apellido,
				direccion,
				fecha_nacimiento,
				telefono,
				email,
				emp_id: rta.insertId,
			});
	}
}
