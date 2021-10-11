import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
  },
  grid: {
    height: 120,
    padding: 10,
  },
  profileGridItem: {
    display: 'flex',
  },
  appBottomBar: {
    top: 'auto',
    bottom: 0,
    height: '100%',
  },
  copyright: {
    position: 'absolute',
    left: '50%',
    top: '80%',
    transform: 'translate(-50%, -50%)',
  },
}));

export { useStyles };
