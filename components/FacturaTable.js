import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FacturaTable({invoices}) {
	return <div className=' shadow-xl'>
		<TableContainer component={Paper} className='p-4 border-2 border-emerald-100'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>Numero&nbsp;factura</TableCell>
            <TableCell align="right">Cliente&nbsp;ID</TableCell>
            <TableCell align="right">Cajero&nbsp;ID</TableCell>
            <TableCell align="right">Impuesto</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Fecha&nbsp;de&nbsp;emisión</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices?.map((invoice) => (
            <TableRow
              key={invoice.num_fac+invoice.fecha}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-emerald-100 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {invoice.num_fac}
              </TableCell>
              <TableCell align="right">{invoice.cli_id}</TableCell>
              <TableCell align="right">{invoice.caje_id}</TableCell>
              <TableCell align="right">{invoice.impuesto / 100} %</TableCell>
              <TableCell align="right">L {invoice.subtotal}</TableCell>
              <TableCell align="right">L {invoice.total}</TableCell>
              <TableCell align="right">{invoice.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

