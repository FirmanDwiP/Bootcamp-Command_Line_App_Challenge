var program = require('caporal');
var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
program
    .version('1.0.0')
    .description('CLI Challenge')
    .command('ip-external')
    .action((args, options, logger) => {
        logger.info(console.log(networkInterfaces.lo[0].address))
        /// lo = External IP Address
    })
    program.parse(process.argv)
