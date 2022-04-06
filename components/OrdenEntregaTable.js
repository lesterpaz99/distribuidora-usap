import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrdenEntregaTable({deliver_orders}) {
	return <div className=' shadow-xl'>
		<TableContainer component={Paper} className='p-4 border-2 border-emerald-100'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>Orden&nbsp;entrega&nbsp;ID</TableCell>
            <TableCell align="right">fecha_entrega</TableCell>
            <TableCell align="right">Articulo&nbsp;ID</TableCell>
            <TableCell align="right">Proveedor&nbsp;ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliver_orders?.map((order) => (
            <TableRow
              key={order.ord_ent_id+order.fecha_entrega}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-blue-100 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {order.ord_ent_id}
              </TableCell>
              <TableCell align="right">{order.fecha_entrega}</TableCell>
              <TableCell align="right">{order.arti_id}</TableCell>
              <TableCell align="right">{order.prov_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

