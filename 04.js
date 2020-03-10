const Obfuscator = require('caporal');

Obfuscator
    .version('1.0.0')
    .description('CLI Challenge')
    .command('obfuscate')
    .argument('<text>','input text',Obfuscator.STRING)
    .action((args, options, logger) => {
        const obfuscate = (x) => {
            const y = [];
            for (let i = 0; i < x.length; i++) {
                y.push(`&#${x.charCodeAt(i)};`);
                // Metode charCodeAt () mengembalikan Unicode karakter pada indeks yang ditentukan dalam sebuah string.
            }
            return y.join('');
        }
        logger.info(obfuscate(args.text));
    })

    Obfuscator.parse(process.argv)