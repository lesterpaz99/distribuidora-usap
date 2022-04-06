import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getCashiers(req, res);
		case 'POST':
			return saveCashiers(req, res);
	}
}

const getCashiers = async (req, res) => {
	const [result] = await pool.query('SELECT * FROM cajero INNER JOIN empleado ON cajero.emp_id = empleado.emp_id');
	console.log(result);
	res.status(200).json(result)
}

const saveCashiers = async (req, res) => {
	const { emp_id } = req.body;

	let [rta] = await pool.query('INSERT INTO cajero SET ?', {
		emp_id,
	});

	return res.status(200).json({
		emp_id,
		caje_id: rta.insertId,
	});
}