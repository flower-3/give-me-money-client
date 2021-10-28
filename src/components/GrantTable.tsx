import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Pagination from '@material-ui/lab/Pagination';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GrantServiceList } from '../interface/Grant.Interface';
import { getGrantServiceList, getGrantServiceDetail } from '../api/grant/getGrantService';

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin: '30px auto',
  },
  container: {
    maxHeight: 440,
  },
  pagination: {
    padding: '15px',
    justifyContent: 'center',
    display: 'flex',
  },
});

const columns = [
  { label: '지원유형', width: '10%' },
  { label: '서비스명', width: '15%' },
  { label: '지원대상', width: '40%' },
  { label: '신청기한', width: '20%' },
  { label: '부서명', width: '10%' },
  { label: '조회수', width: '5%' },
] as const;

export default function GrantTable() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [grant, setGrant] = React.useState<GrantServiceList | null>(null);
  const [error, setError] = React.useState<unknown>();

  React.useEffect(() => {
    try {
      setLoading(true);
      getGrantServiceList(page, rowsPerPage).then((data) => {
        setGrant(data.response);
        setError(data.error);
      });
      setLoading(false);
    } catch (e) {
      setError(e);
      alert('getGrantServiceList error message: ' + error);
    }
  }, [page]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event.target.value));
    setPage(1);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index} style={{ width: column.width }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <CircularProgress disableShrink />
            ) : (
              grant?.data.map((row) => (
                <TableRow hover key={row.서비스ID}>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{row[column.label]}</TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Pagination
          showFirstButton
          showLastButton
          className={classes.pagination}
          color="secondary"
          count={grant != null ? Math.round(grant.totalCount / rowsPerPage) : 0}
          variant="outlined"
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </Paper>
  );
}
