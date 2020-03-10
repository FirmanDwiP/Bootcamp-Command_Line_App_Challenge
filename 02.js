const Arithmetic = require('caporal')
Arithmetic
    .version('1.0.0')
    .description('CLI Challenge')
    .command('add') //perintah penambahan
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(x => parseFloat(x));
        logger.info(convert.reduce((a,b) => a+b ));
    })
    .command('substract') // perintah pengurangan
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(x => parseFloat(x));
        logger.info(convert.reduce((a,b) => a-b ));
    })
    .command('multiply') // perintah perkalian
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(x => parseFloat(x));
        logger.info(convert.reduce((a,b) => a*b ));
    })
    
    .command('divide') // perintah pembagian
    .argument('[numb....]' , 'input number')
    .action((args, options, logger) => {
        const convert = args.numb.map(x => parseFloat(x));
        logger.info(convert.reduce((a,b) => a/b ));
    })
    Arithmetic.parse(process.argv)