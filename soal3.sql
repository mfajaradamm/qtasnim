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

SELECT pembeli.nama AS pembeli , alattulis.nama AS barang ,alattulis.harga AS harga_barang FROM alattulis INNER JOIN pembeli ON alattulis.id_pembeli = pembeli.id
