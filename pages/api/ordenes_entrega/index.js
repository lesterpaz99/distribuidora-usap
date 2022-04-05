import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting articles');
		case 'POST':
			const { fecha_entrega, arti_id, prov_id } = req.body;
			const [rta] = await pool.query('INSERT INTO orden_entrega SET ?', {
				fecha_entrega,
				arti_id,
				prov_id,
			});
			console.log('rta', rta);
			return res.status(200).json({
				fecha_entrega,
				arti_id,
				prov_id,
				ord_ent_id: rta.insertId,
			});
	}
}
