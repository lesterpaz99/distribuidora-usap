import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ArticleTable({articles}) {
	return <div>
		<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
				{}
        <TableHead>
          <TableRow>
            <TableCell>ID del articulo</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cliente ID</TableCell>
            <TableCell align="right">Bodega ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow
              key={article.arti_id+article.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							className='hover:bg-emerald-200 cursor-pointer'
            >
              <TableCell component="th" scope="row">
                {article.arti_id}
              </TableCell>
              <TableCell align="right">{article.nombre}</TableCell>
              <TableCell align="right">{article.precio}</TableCell>
              <TableCell align="right">{article.cli_id}</TableCell>
              <TableCell align="right">{article.bod_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	</div>
}

