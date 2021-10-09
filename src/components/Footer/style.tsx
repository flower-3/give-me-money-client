import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 115,
    padding: 20,
  },
  grid: {
    height: 120,
    padding: 10,
  },
  profileGridItem: {
    display: 'flex',
  },
}));

export { useStyles };
