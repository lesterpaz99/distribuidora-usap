import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BodegaTable({bodegas}) {
	return <div className=' shadow-xl'>
		<TableContainer component={Paper} className='p-4 border-2 border-emerald-100'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>ID de la bodega</TableCell>
            <TableCell align="right">Direccion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bodegas.map((bodega) => (
            <TableRow
              key={bodega.bod_id+bodega.direccion}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-emerald-200 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {bodega.bod_id}
              </TableCell>
              <TableCell align="right">{bodega.direccion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

