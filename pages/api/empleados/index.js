import { pool } from '../../../config/db';

export default async function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getEmployees(req, res);
		case 'POST':
			return saveEmployees(req, res);
	}
}

const getEmployees = async (req, res) => {
	const [result] = await pool.query('SELECT * FROM empleado');
	return res.status(200).json(result);
}

const saveEmployees = async (req, res) => {
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