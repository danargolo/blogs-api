const throwError = (message, status) => {
  throw Object.assign(
    new Error(message), 
    { status: status },
  );
}

module.exports = {
  throwError,
}