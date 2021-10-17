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
import { GrantServiceList } from '../interface/Grant.Interface';
import axios, { AxiosResponse } from 'axios';

const useStyles = makeStyles({
  root: {
    width: '90%',
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

const columns = ['지원유형', '서비스명', '지원대상', '신청기한', '부서명', '조회수'] as const;

export default function GrantTable() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [grant, setGrant] = React.useState<GrantServiceList | null>(null);

  let url = `http://34.83.199.174:8080/api/v1/gov24/v1/serviceList?page=${page}&perPage=${rowsPerPage}`;

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<GrantServiceList | any> = await axios(url, {
          params: { page: page, perPage: rowsPerPage },
        });
        setGrant(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 아예 안쓰는 거면 _ 로 하는게 좋다. (아는거면 쓰는게 좋음)
  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
    url = `http://34.83.199.174:8080/api/v1/gov24/v1/serviceList?page=${page}&perPage=${rowsPerPage}`;
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // + 보다는 number로 명시해서 형변환해주는게 좋다.
    setRowsPerPage(+event.target.value);
    setPage(1);
    url = `http://34.83.199.174:8080/api/v1/gov24/v1/serviceList?page=${page}&perPage=${rowsPerPage}`;
  };
  // 테이블도 따로 useTable로 빼면 좋음
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
            {!loading &&
              grant?.data.map((row) => (
                <TableRow hover key={row.서비스ID}>
                  {columns.map((column, index) => (
                    <TableCell key={index}>{row[column]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Pagination
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
