import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function EmpleadoTable({employees}) {
	return <div className=' shadow-xl'>
		<TableContainer component={Paper} className='p-4 border-2 border-emerald-100'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>ID del empleado</TableCell>
            <TableCell align="right">P.&nbsp;nombre</TableCell>
            <TableCell align="right">P.&nbsp;apellido</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Fecha&nbsp;de&nbsp;nacimiento</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((employee) => (
            <TableRow
              key={employee.emp_id+employee.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-emerald-200 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {employee.emp_id}
              </TableCell>
              <TableCell align="right">{employee.nombre}</TableCell>
              <TableCell align="right">{employee.apellido}</TableCell>
              <TableCell align="right">{employee.direccion}</TableCell>
              <TableCell align="right">{employee.fecha_nacimiento}</TableCell>
              <TableCell align="right">{employee.telefono}</TableCell>
              <TableCell align="right">{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

