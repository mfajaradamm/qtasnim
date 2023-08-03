// 1.Method Concat adalah method yang digunakan untuk menggabungkan dua atau lebih array menjadi sebuah array.
const peralatanTulis = ['pensil','pulpen'];
const pakaian = ['baju','celana','topi'];

const barang = peralatanTulis.concat(pakaian);
console.log(barang);

// 2.Method Length adalah method yang digunakan untuk menghitung jumlah karakter yang ada.
const Drink = ['jus mangga','nutrisari','marimas','jasjus'];
let size = Drink.length;
console.log(size);

// 3.Method Push adalah method yang digunakan untuk menambahkan satu atau lebih elemen ke akhir array.
const makanan = ['nasi goreng','mie ayam']
makanan.push('ayam goreng','seafood')
console.log(makanan)

// 4.Method Shift adalah method yang digunakan untuk menghapus array pertama dan menggeser array yang lainnya
const mobil = ['avanza','suzuki','inofa'];
mobil.shift();
console.log(mobil);

//5. Method Unshift adalah method yang digunakan untuk menambahkan item baru ke awal array.
const namePerson = ['doni','john','charsen'];
namePerson.unshift('miguel')
console.log(namePerson);

// 6.Method Replace adalah method yang digunakan untuk  mengganti bagian dari string yang diberikan dengan substring baru.
const text = 'selamat datang di Kota Bandung, Kuningan merupakan kota kuda'
let newText = text.replace('Bandung', 'Kuningan');
console.log(newText);

// 7.Method ReplaceAll adalah method yang digunakan untuk mengganti semua string yang dituju.
const text1 = 'saya suka kucing, kucing adalah hewan pemakan karnifora, kucing juga hewan yang lucu'
let textNew = text1.replaceAll('kucing','harimau')
console.log(textNew);

// 8.Method Sort adalah method yang digunakan untuk mengurutkan array.
const electornic = ['handphone','laptop','tv']
electornic.sort();
console.log(electornic);

// 9.Method UPPERCASE adalah method yang digunakan untuk mengubah semua huruf kecil menjadi huruf besar.
const teksSmall = 'Selamat Datang Di PT Qtasnim';
let teksBig = teksSmall.toLocaleUpperCase();
console.log(teksBig);

// 10.Method lowercase adalah method yang digunakan untuk mengubah semua huruf besar menjadi huruf kecil.
const bigText = 'SELAMAT DATANG DI PT QTASNIM';
let smallText = bigText.toLowerCase();
console.log(smallText);

// 11.method Pop adalah method yang digunakan untuk menghapus nilai satu atau lebih nilai
const hanphone = ['xiaomi','samsung','oppo']
hanphone.pop();
console.log(hanphone);

// 12.method at adalah method yang digunakan untuk menentukan index dari sebuah array/string
const array = ['handphone','seafood']
let array1 = array.at(1)
console.log(array1)

// 13.Metode fill()mengisi elemen tertentu dalam array dengan nilai,jadi kalo kita mengisi nilai maka nilai yang didalam array akan berubah semua
const pet = ['kucing','harimau','burung'];
console.log(pet.fill('fox'));

// 14.Mengurutkan sort()elemen sebagai string dalam urutan abjad dan menaik.
const nama = ['rehan','gilang','adam'];
console.log(nama.sort())