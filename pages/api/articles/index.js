import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
			const { nombre, descripcion, precio, cli_id, bod_id } = req.body;
			const [rta] = await pool.query('INSERT INTO articulo SET ?', {
				nombre,
				descripcion,
				precio,
				cli_id,
				bod_id,
			});
			console.log('rta', rta);
			return res
				.status(200)
				.json({
					nombre,
					descripcion,
					precio,
					cli_id,
					bod_id,
					arti_id: rta.insertId,
				});
	}
}
