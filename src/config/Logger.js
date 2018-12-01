import winston, { config } from 'winston';
import { CONSTANTES } from "./Constantes";

/**
 * @description Configurations transports log.
 */
const configurationLogger = {
    file: {
      level: 'info',
      filename: CONSTANTES.PATH_FILE_LOG,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'error',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
};

/**
 * @description Setting logger
 */
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(configurationLogger.file),
        new winston.transports.Console(configurationLogger.console)
    ],
    exitOnError: false
});

logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
};

export default logger;
  