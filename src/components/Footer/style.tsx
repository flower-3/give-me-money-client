import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginTop: 10,
  },
  appBottomBar: {
    top: 'auto',
    bottom: 0,
    height: '100%',
    marginTop: 10,
  },
  grid: {
    height: '100%',
  },
}));

export { useStyles };
