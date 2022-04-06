import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getInvoices(req, res);
		case 'POST':
			return saveInvoices(req, res);
	}
}

const getInvoices = async (req, res) => {
	const [result] = await pool.query('SELECT * FROM factura');
	return res.status(200).json(result);
}

const saveInvoices = async (req, res) => {
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