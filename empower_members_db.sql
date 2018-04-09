-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 25 Apr 2017 la 22:27
-- Versiune server: 5.7.17-0ubuntu0.16.04.2
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empower_members_db`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` char(128) NOT NULL,
  `salt` char(128) NOT NULL,
  `name` char(255) NOT NULL,
  `cnp` char(20) NOT NULL,
  `serie` char(5) NOT NULL,
  `number` char(20) NOT NULL,
  `workplace_info` char(255) NOT NULL,
  `verified` int(11) DEFAULT '0',
  `admin` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `members`
--

INSERT INTO `members` (`id`, `username`, `email`, `password`, `salt`, `name`, `cnp`, `serie`, `number`, `workplace_info`, `verified`, `admin`) VALUES
(13, 'empowerUnverified', 'empowerUnverified@gmail.com', '6055ed0e6b7cceb20f3dc22c5439a31e5f3b9f943224655214c0d4b88de12855704a8be2896673f056866b621c4b8c34d2b8f68b95b1e1590ce0413e825e2af2', 'b9043dfa19e896cc8c23a1945625676c7eb2ffbeef4260a6be77be95c6d51c61479f74dec362ed2b632987c7b7b5978bfa4ebf0fdec29a7ae00af667990100ee', 'Empower Unverified', '1990215360046', 'RT', '006978', 'Sectia 9 Bucuresti', 0, 0),
(14, 'empowerVerified', 'empowerVerified@gmail.com', 'b74990d0782def84ed89b6ddb7c94dcdd8f7dbe7cf3932f7535c102d6c7211de3b13a2329cd999f74a5760c28a8b888e3a7304e9112b281505d9c70b721981a5', 'bbf3f0421476cfacba79ab2790946e75f1e70fb9b1ab26d0476767022e45d7fa58f33887d8ecb1df21678f6f3791595780c39bdf7906ac99431b4f4c497939e1', 'Empower Verified', '1990215003646', 'RT', '127755', 'Sectia 9 Bucuresti', 1, 0),
(15, 'empowerAdmin', 'empowerAdmin@gmail.com', '78b7baf854ed69b868c5eda1f3c21de89c4eb9b5d0e1f8537685d2cc8bc404b185c1b35ab8aec910ece7c8be40a9e781aaf14908b164e9192c7af8b6a53637ea', 'cb61407804f78cec2ff6461ce5ca90e3cd562e5103e8bec1ebadf126e17afbe47caf2c5922621a734fc9aa15c466fddee1575eab624a09a8767c584463fa83c1', 'Empower Admin', '1990215003646', 'RT', '006978', 'Sectia 9 Bucuresti', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
