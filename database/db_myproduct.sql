-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Nov 2019 pada 21.17
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_myproduct`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_category`
--

CREATE TABLE `tb_category` (
  `id` int(12) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_category`
--

INSERT INTO `tb_category` (`id`, `name`) VALUES
(1, 'Komik'),
(3, 'Novel');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_product`
--

CREATE TABLE `tb_product` (
  `id` int(12) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `category` int(12) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_product`
--

INSERT INTO `tb_product` (`id`, `title`, `description`, `category`, `date_created`, `date_updated`) VALUES
(1, 'Bokutachi wa Benkyou ga Dekinai Vol.1', 'Nariyuki Yuiga, Murid kelas 3 SMA yang mengincar rekomendasi universitas, tiba-tiba ditunjuk sebagai tutor dua gadis jenius, Fumino dan Rizu! kedua gadis ini terlihat sangat sempurna, tapi sebenarnya mereka memiliki kekhawatiran yang tak terduga!', 1, '2019-11-04 17:30:16', '2019-11-04 17:30:16'),
(2, 'Kimi no Suizou wo Tabetai Vol.1', 'Tanpa sengaja, aku menemukan buku harian teman sekelasku, Sakura Yamauchi, yang berjudul \'Hidup Bersama Penyakit\'. Di dalamnya, tertulis bahwa dia mengidap penyakit pankreas dan hidupnya tidak akan lama lagi. Sejak saat itu, Sakura yang periang bersikeras menghabiskan sisa hidupnya bersamaku, si cowok kutu buku yang tertutup. Dari sanalah hubungan kami yang aneh dimulai...', 1, '2019-11-04 20:49:13', '2019-11-04 20:49:13'),
(3, 'Kimi no Suizou wo Tabetai Vol.2', 'Sakura mendadak harus dirawat di rumah sakit. Awalnya, aku bersikap seperti biasa. Namun, dirinya yang seakan-akan menyembunyikan sesuatu membuatku penasaran. Tidak... Sejujurnya, aku mencemaskan Sakura. Kebenaranya pun terungkap saat aku tidak bisa lagi menahan diriku. Ternyata, dia...', 1, '2019-11-04 21:49:55', '2019-11-04 22:07:04'),
(8, 'Kishuku Gakkou no Juliet Vol.1', 'Di Perguruan Dahlia, terdapat dua kubu asrama yang saling bermusuhan, yaitu \'White Cat\' yang dipimpin oleh Juliet Persia, serta \'Black Dog\' yang dipimpin oleh Romeo Inuzuka. Namun, di balik pertikaian sengit antara kedua asrama yang sudah berjalan selama bertahun-tahun itu, ternyata diam-diam Inuzuka memendam perasaan terhadap Persia!. Dapatkah Sang Romeo mendapatkan hati sang Juliet?!', 1, '2019-11-08 00:03:57', '2019-11-08 09:39:42'),
(9, 'Kishuku Gakkou no Juliet Vol.2', 'Romeo Inuzuka dan Juliet Persia telah menjadi sepasang kekasih. Walau demikian, mereka harus merahasiakan hubungan mereka karena kondisi kedua negara masing-masing yang saling bermusuhan. Pada saat itu, Inuzuka tanpa sengaja mendengar bahwa ternyata Hasuki, teman masa kecilnya, diam-diam juga menaruh hati padanya... Apa yang akan Inuzuka lakukan?!', 1, '2019-11-08 00:53:25', '2019-11-08 10:01:40'),
(14, 'Kishuku Gakkou no Juliet Vol.3', 'Festival Olahraga yang menjadi sorotan kedua negara telah mencapai puncaknya! Akan tetapi, Persia harus mundur dari pertandingan karena disabotase oleh rekannya sendiri... Keringat serta air mata perjuangan Persia... kini termotivasi Inuzuka untuk berjuang di pertandingan penentuan, yaitu \'lomba kuda perang\'. Asrama manakah yang pada akhirnya akan memenangkan Festival Olahraga?!', 1, '2019-11-08 10:39:35', '2019-11-08 10:39:35'),
(16, 'Kishuku Gakkou no Juliet Vol.4', 'Kakak laki-laki Inuzuka, Airu, mulai mencurigai hubungan antara Inuzuka dan Persia. Rencana Inuzuka untuk merayakan ulang tahun Persia berdua pun akhirnya hancur berantakan. Akan tetapi, demi tetap merayakan ulang tahun Persia, dengan mengelabuhi kakaknya, Inuzuka melibatkan teman-temannya dan menyerbu masuk ke \'asrama White Cat\'. Nama strategi rahasia ini adalah \'Festival Melempar Pai\'!', 1, '2019-11-08 11:33:47', '2019-11-08 11:33:47'),
(18, 'Kishuku Gakkou no Juliet Vol.5', 'Inuzuka yang ingin berkencan dengan Persia di tengah-tengah kegiatan karyawisata mereka, akhirnya mengajak Persia melihat matahari terbenam di mercusuar terlantar. Namun, tiba-tiba terjadi pasang air laut sehingga mereka berdua terjebak dan harus menghabiskan malam berdua di sana!', 1, '2019-11-20 22:03:24', '2019-11-20 22:03:24'),
(21, 'Koi wa Ameagari no You ni Vol.1', 'Akira Tachibana, siswi SMA 17 tahun yang cantik, populer, dan atletis. Alih-alih berpacaran dengan cowok keren yang sebaya dengannya, hati si cantik Akira malah terpaut pada pria berusia45 tahun. Masami Kondo namanya, seorang manajer restoran keluarga. Sebenarnya, apa yang membuat Akira jatuh cinta pada pria bernyali kecil dengan penampilan tak terawat itu?', 1, '2019-11-25 20:51:44', '2019-11-25 20:51:44'),
(22, 'Koi wa Ameagari no You ni Vol.2', 'Akhirnya, Akira menyatakan perasaannya kepada Masami. Pria paruh baya itut kebingungan. Apa yang remaja cantik itu sukai dari dirinya yang payah ini? Sambil bercanda, Masami bilang mereka harus coba berkencan agar Akira sadar bahwa dirinya tidak menarik. Tak disangka, ajakanya membuat gadis itu antusias dan Masami terpaksa menyanggupinya! Apahkah kencan itu akan berjalan dengan lancar, ya...', 1, '2019-11-25 20:58:35', '2019-11-25 20:58:35'),
(23, 'Koi wa Ameagari no You ni Vol.3', 'Saat tidak tau bagaimana cara menghadapi perasaan Akira yang semakin kuat, Masami malah merasakan kembali semangat yang harusnya sudah lama hilang, Kesempatan didekati gadis cantik berumur 17 tahun seperti ini pasti hanya akan terjadi sekali seumur hidupnya. Musim panas kali ini, pria paruh baya itu seakan menjadi muda lagi...', 1, '2019-11-25 21:01:25', '2019-11-25 21:01:25'),
(24, 'Koi wa Ameagari no You ni Vol.4', '\'Kamu tau tentangku?\' Kata-kata dingin dari Masami itu terus terngiang di kepala Akira, sampai-sampai sang gadis nekat menerjang badai demi menjenguk Masami yang sedang sakit. Setelah Akira menyatakan rasa cemas yang menghantui dirinya sambil menangis, Masami tiba-tiba memeluk Akira. Sepertinya, hubungan mereka semakin berkembang!?', 1, '2019-11-25 21:04:35', '2019-11-25 21:04:35');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_category`
--
ALTER TABLE `tb_category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_product_ibfk_1` (`category`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_category`
--
ALTER TABLE `tb_category`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `tb_product`
--
ALTER TABLE `tb_product`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tb_product`
--
ALTER TABLE `tb_product`
  ADD CONSTRAINT `tb_product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `tb_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
