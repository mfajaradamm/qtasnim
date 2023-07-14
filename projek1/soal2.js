let ipa = 70;
let bahasaIndonesia = 90;
let mtk = 80;
let ips = 67;

let mapel = [ipa,bahasaIndonesia,mtk,ips];
let total = [ipa + bahasaIndonesia + mtk + ips]

let jumlah = mapel.length;
let avg = total / jumlah;
// let avg = 50;

let grade;
if (avg >= 90) {
    grade = 'grade A';
} else if (avg >= 80 && avg < 90) {
    grade = 'grade B';
} else if (avg >= 70 && avg < 80) {
    grade = 'grade C';
} else if (avg >= 60 && avg < 70 ) {
    grade = 'grade D';
} else {
    grade = 'grade E'
}

console.log('rata-rata' + avg);
console.log(grade);