export default theme => ({
  container: {
    padding: '0px 15px 10px 15px',
  },
  button: {
    margin: typeof theme.spacing === 'function' ? theme.spacing(1) : '15px',
  },
  textField: {
    marginBottom: '15px',
  },
});
