const errorHandler = (err: any) =>
  err.message
    ? err.message /* Error From React*/
    : err.data
    ? err.data[0] /* Only first Error From API*/
    : err.error; /* Error From Browser*/
export default errorHandler;
