-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 23 Mar 2017 la 19:59
-- Versiune server: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empower_db`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `offense`
--

CREATE TABLE `offense` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `urgency` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `offense`
--

INSERT INTO `offense` (`id`, `name`, `urgency`) VALUES
(1, 'Crima', 1),
(3, 'Accident rutier', 1),
(4, 'Focuri de arma', 1),
(5, 'Jaf armat', 1),
(6, 'Furt/Actiuni de inselatorie', 1),
(7, 'Deranjarea linistii publice', 0),
(8, 'Incalcarea proprietatii private', 0),
(9, 'Violente domestice', 0);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `name` char(64) NOT NULL,
  `description` varchar(2500) NOT NULL,
  `offenseid` int(11) NOT NULL,
  `date` char(15) NOT NULL,
  `adress` char(128) NOT NULL,
  `cnp` bigint(64) NOT NULL,
  `serie` char(21) NOT NULL,
  `number` int(21) NOT NULL,
  `visibility` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `reports`
--

INSERT INTO `reports` (`id`, `name`, `description`, `offenseid`, `date`, `adress`, `cnp`, `serie`, `number`, `visibility`) VALUES
(14, 'Betivi deranjeaza linistea publica', 'Niste betivi din fata blocului tipa in gura mare la ora 2 noaptea. Va rog sa veniti sa ii luati', 7, '23.03.2017', 'Str.Turnu Magurele nr.19 Bucuresti', 1990215360046, 'RT', 6934, 1),
(15, 'Vecinul isi loveste sotia', 'Vecinul meu isi tot loveste sotia. Aceasta tipa insa nu putem suna la politie, dansul este foarte agresiv iar peretii sunt subtiri. Va rog sa trimiteti un echipaj. Acesta sta la etajul 3 ap 16', 9, '23.03.2017', 'Str. Turnu Magurele nr.19 bl. S1', 1990215460036, 'RQ', 6924, 1),
(16, 'Tineri fumeaza in spatele casei in curtea mea', 'Un grup de tineri fumeaza etnobotanice in spatele casei mele. Mirosul este foarte neplacut, iar acestia incalca proprietatea mea privata. Va pot oferi mai multe date la nr. de telefon 0731524423', 8, '23.03.2017', 'Str.Turnu Magurele nr.19', 1990215460036, 'RG', 6978, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `offense`
--
ALTER TABLE `offense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `offense`
--
ALTER TABLE `offense`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
