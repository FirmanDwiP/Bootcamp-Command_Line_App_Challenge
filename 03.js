const palindrome = require('caporal')
palindrome
    .version('1.0.0')
    .description('CLI Challenge')
    .command('start')
    .argument('<text>','input text', palindrome.STRING)
    .action((args, options, logger) => {
        const result = args.text.toLowerCase().replace(/[^\w]/gi, "") // kata di lower case kemudian apabila ada kalimat spesial diganti dengan kalimat regex
        logger.info(`String : "${args.text}`);
        logger.info(result === [...result].reverse().join('') ? "Is palindrome? Yes" : "Is Palindrome? No") //pengecekan palindrome menggunakan if
    })
    palindrome.parse(process.argv)