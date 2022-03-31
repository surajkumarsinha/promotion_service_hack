const logger = (
  loggingData,
  methodName,
  className,
  type = 'APPLICATION LOG'
) => {
  if (type === 'ERROR') {
    console.log(
      '\x1b[31m',
      'ERROR:  ',
      '\x1b[31m',
      `reference: ${className}/${methodName}`
    );
    console.log('\x1b[0m', loggingData);
  } else {
    console.log(
      '\x1b[32m',
      'INFO: ',
      '\x1b[33m',
      `reference: ${className}/${methodName}`
    );
    console.log('\x1b[0m', loggingData);
  }
};

module.exports = { logger };
