import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProveedorTable({providers}) {
	return <div className=' shadow-xl'>
		<TableContainer component={Paper} className='p-4 border-2 border-emerald-100'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>ID del proveedor</TableCell>
            <TableCell align="right">Fecha&nbsp;de&nbsp;entrega</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[].map((provider) => (
            <TableRow
              key={provider.prov_id+provider.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-emerald-200 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {provider.prov_id}
              </TableCell>
              <TableCell align="right">{provider.nombre}</TableCell>
              <TableCell align="right">{provider.direccion}</TableCell>
              <TableCell align="right">{provider.telefono}</TableCell>
              <TableCell align="right">{provider.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

