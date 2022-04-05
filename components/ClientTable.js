import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ClientTable({clients}) {
	return <div>
		<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>ID del cliente</TableCell>
            <TableCell align="right">P.&nbsp;nombre</TableCell>
            <TableCell align="right">P.&nbsp;apellido</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">Fecha&nbsp;de&nbsp;nacimiento</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.cli_id+client.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-blue-100 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {client.cli_id}
              </TableCell>
              <TableCell align="right">{client.nombre}</TableCell>
              <TableCell align="right">{client.apellido}</TableCell>
              <TableCell align="right">{client.direccion}</TableCell>
              <TableCell align="right">{client.fecha_nacimiento}</TableCell>
              <TableCell align="right">{client.telefono}</TableCell>
              <TableCell align="right">{client.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

