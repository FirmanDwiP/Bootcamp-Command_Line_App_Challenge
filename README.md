# Review Materi 

## NPM
Salah satu tool yang akan sering digunakan dalam Nodejs adalah NPM (Node Package Manager). NPM sudah otomatis terinstal saat kita menginstal Nodejs. NPM dapat kita gunakan untuk:
1. Membuat Project Baru;
2. Menginstal modul atau library;
3. Menjalankan skrip command line.

#### Inisiakisasi NPM
Pertama kita harus menyediakan direktori untuk project-nya. Silahkan buat direktori baru dengan perintah ini:
```sh
mkdir belajar-npm
```
Lalu masuk ke direktori tersebut dan ketik perintah npm init -y.
```sh
cd belajar-npm
npm init -y
```
#### Mengenal File package.json
File package.json adalah file yang berisi deskripsi dari project Nodejs. NPM membutuhkan file ini untuk bisa bekerja. Informasi project berisi nama, versi, dan deskripsi. Lalu di bagian script, berisi skrip-skrip bash atau command line untuk dieksekusi dengan NPM.
Selain properti-properti di atas, masih ada lagi properti lain:
1. depedencies berisi keterangan modul atau library yang dibutuhkan aplikasi;
2. devDependencies berisi keterangan modul atau library yang dibutuhkan untuk pengembangan aplikasi.

#### Menginstal Modul dengan NPM
Apabila kita membutuhkan modul atau library, kita bisa menyuruh NPM untuk menginstalnya.

Perintahnya seperti ini:
```sh
npm install <nama modul>
```

#### Remove 
Untuk menghapus library pihak ketiga bisa dengan melakukan perintah npm un package_name atau npm un package_name -g untuk third library yang bersifat global

#### NPM Command
Perintah yang umum dijalankan pada NPM:
- npm i package_name
- npm i package_name1 package_name2
- npm un package_name
- npm un package_name1 package_name2
- npm up
- npm up package_name
- npm up -g
- npm list
- npm help

## CLI
CLI (Command line interface) adalah sebuah mekanisme untuk melakukan interaksi dengan program dengan menggunakan sebuah teks untuk menjalankan tugas tertentu.

### Caporal
setup caporal pada node js
```sh
mkdir cli-app
cd cli-app/
npm init -y
npm i caporal
```
## command caporal
```sh
const stringTransform = require('caporal')
stringTransform
    .version('1.0.0')
    .description('CLI Challenge')
    .command('start')
    .argument('<text>','input text', stringTransform.STRING, 'start challenge')
    .option('--repeat <times>', 'repeat string', stringTransform.INTEGER, 1)
    .action((args, options, logger) => {
        logger.info(console.log("Hello Word !"))
    })
    stringTransform.parse(process.argv)
```
argument = perintah yang memberikan value setelah memanggil command.
option = Perintah yang memberikan value setelah memanggil command (sama seperti argument namun penulisannya berbeda).