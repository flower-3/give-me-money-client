import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const columns = ['지원유형', '서비스명', '지원대상', '신청기한', '부서명', '조회수'] as const;

// using this example until getting grant API
const Grant = {
  page: 0,
  perPage: 0,
  totalCount: 0,
  currentCount: 0,
  data: [
    {
      서비스ID: 'string1',
      지원유형: 'string1',
      서비스명: 'string1',
      서비스목적: 'string1',
      지원대상: 'string1',
      선정기준: 'string1',
      지원내용: 'string1',
      신청방법: 'string1',
      신청기한: 'string1',
      상세조회URL: 'string1',
      소관기관코드: 'string1',
      소관기관명: 'string1',
      부서명: 'string1',
      조회수: 0,
    },
    {
      서비스ID: 'string2',
      지원유형: 'string2',
      서비스명: 'string2',
      서비스목적: 'string2',
      지원대상: 'string2',
      선정기준: 'string2',
      지원내용: 'string2',
      신청방법: 'string2',
      신청기한: 'string2',
      상세조회URL: 'string2',
      소관기관코드: 'string2',
      소관기관명: 'string2',
      부서명: 'string2',
      조회수: 0,
    },
  ],
};

export default function GrantTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Grant.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.서비스ID}>
                {columns.map((column, index) => (
                  <TableCell key={index}>{row[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Grant.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
