const throwError = (message, status) => {
  throw Object.assign(
    new Error(message), 
    { status },
  );
};

module.exports = {
  throwError,
};