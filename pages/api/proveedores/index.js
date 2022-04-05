import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
			const { nombre, direccion, telefono, email } = req.body;
			const [rta] = await pool.query('INSERT INTO proveedor SET ?', {
				nombre,
				direccion,
				telefono,
				email,
			});
			console.log('rta', rta);
			return res.status(200).json({
				nombre,
				direccion,
				telefono,
				email,
				prov_id: rta.insertId,
			});
	}
}
