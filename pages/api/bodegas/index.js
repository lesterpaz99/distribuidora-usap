import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
			const { direccion } = req.body;
			const [rta] = await pool.query('INSERT INTO bodega SET ?', { direccion });
			console.log('rta', rta);
			return res.status(200).json({ direccion, bod_id: rta.insertId });
	}
}
