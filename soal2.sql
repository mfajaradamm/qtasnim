-- 1. Create
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

-- 2. Read
SELECT * FROM alattulis;
SELECT nama FROM alattulis;

-- 3. Update
UPDATE alattulis SET harga = 'Rp.20.000' WHERE id = 4;
UPDATE alattulis SET name = 'pensil warna' WHERE id = 4;

-- 4. Delete
DELETE FROM alattulis WHERE nama = 'penghapus';
