'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _Constantes = require('./Constantes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Configurations transports log.
 */
var configurationLogger = {
    file: {
        level: 'info',
        filename: _Constantes.CONSTANTES.PATH_FILE_LOG,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false
    },
    console: {
        level: 'warning',
        handleExceptions: true,
        json: false,
        colorize: true
    }
};

/**
 * @description Setting logger
 */
var logger = _winston2.default.createLogger({
    transports: [new _winston2.default.transports.File(configurationLogger.file), new _winston2.default.transports.Console(configurationLogger.console)],
    exitOnError: false
});

logger.stream = {
    write: function write(message, encoding) {
        logger.info(message);
    }
};

exports.default = logger;