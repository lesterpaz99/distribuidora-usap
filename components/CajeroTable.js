import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CajeroTable({cashiers}) {
	return <div className=' shadow-xl'>
		<TableContainer component={Paper} className='p-4 border-2 border-emerald-100'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>Cajero&nbsp;ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Empleado&nbsp;ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cashiers?.map((cashier) => (
            <TableRow
              key={cashier.caje_id+cashier.nombre+cashier.apellido}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-emerald-200 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {cashier.caje_id}
              </TableCell>
              <TableCell align="right">{`${cashier.nombre} ${cashier.apellido}`}</TableCell>
              <TableCell align="right">{cashier.emp_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

