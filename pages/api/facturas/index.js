import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
			const { cli_id, caje_id, impuesto, subtotal, total, fecha } = req.body;
			const [rta] = await pool.query('INSERT INTO factura SET ?', {
				cli_id,
				caje_id,
				impuesto,
				subtotal,
				total,
				fecha,
			});
			console.log('rta', rta);
			return res.status(200).json({
				cli_id,
				caje_id,
				impuesto,
				subtotal,
				total,
				fecha,
				num_fac: rta.insertId,
			});
	}
}
