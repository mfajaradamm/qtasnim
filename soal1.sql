CREATE DATABASE belajar;

CREATE TABLE alatTulis (
  id serial NOT NULL,
  nama VARCHAR (225) NOT NULL,
  harga VARCHAR (225) NOT NULL,
  jumlah VARCHAR (225) NOT NULL,
  PRIMARY KEY (id)
)

INSERT INTO pembeli (id,nama,harga,jumlah) VALUES 
('1','pencil','Rp.3.000','1'),
('2','pulpen','Rp.5.000','1'),
('3','penghapus','Rp.2.000','1'),
('4','penggaris','Rp.3.000','1'),

CREATE TABLE pembeli (
  id serial NOT NULL,
  nama VARCHAR (225) NOT NULL,
  alamat VARCHAR (100) NOT NULL,
  email VARCHAR (50) NOT NULL,
  nomor VARCHAR (50) NOT NULL,
  PRIMARY KEY (id)
)

INSERT INTO pembeli (id,nama,alamat,email,nomor) VALUES 
('0001','rehan','jatinangor','rehan@gmail.com',08847738734),
('0002','irvan','cileunyi','irvan@gmail.com',08877388223)
