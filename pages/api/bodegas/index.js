import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getWarehouses(req, res);
		case 'POST':
			return saveWarehouses(req, res);
	}
}

const getWarehouses = async (req, res) => {
	const [result] = await pool.query('SELECT * FROM bodega');
	return res.status(200).json(result);
}

const saveWarehouses = async (req, res) => {
	const { direccion } = req.body;
	const [rta] = await pool.query('INSERT INTO bodega SET ?', { direccion });
	console.log('rta', rta);
	return res.status(200).json({ direccion, bod_id: rta.insertId });
}