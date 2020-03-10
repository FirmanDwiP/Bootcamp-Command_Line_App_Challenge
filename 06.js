var program = require('caporal');
var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
program
    .version('1.0.0')
    .description('CLI Challenge')
    .command('ip')
    .action((args, options, logger) => {
        logger.info(console.log(networkInterfaces.wlp3s0[0].address))
        // wlp3so = IP Address in private network
    })
    program.parse(process.argv)