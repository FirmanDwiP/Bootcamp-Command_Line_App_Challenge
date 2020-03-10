const stringTransform = require('caporal')
stringTransform
    .version('1.0.0')
    .description('CLI Challenge')
    .command('start')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .option('--repeat <times>', 'repeat string', stringTransform.INTEGER, 1)
    .action((args, options, logger) => {
        logger.info(args.text.toLowerCase(" ")) // perintah untuk lowercase
        logger.info(args.text.toUpperCase(" ")) // perintah uppercase
        logger.info(args.text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" "))
    }) //setiap text yang dipisah split, index pertama akan di uppercase dan digabung dengan index ke 1 yang lowercase
    stringTransform.parse(process.argv)