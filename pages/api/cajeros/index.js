import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return res.status(200).json('Getting cajeros');
		case 'POST':
			const { emp_id } = req.body;

			let [rta] = await pool.query('INSERT INTO cajero SET ?', {
				emp_id,
			});

			return res.status(200).json({
				emp_id,
				caje_id: rta.insertId,
			});
	}
}
