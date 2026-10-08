-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 27 Lut 2025, 10:20
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `grytowarzyskie`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `grytowarzyskie`
--

CREATE TABLE `grytowarzyskie` (
  `id` int(10) UNSIGNED NOT NULL,
  `nazwa` varchar(100) DEFAULT NULL,
  `liczbaGraczy` int(10) UNSIGNED DEFAULT NULL,
  `potrzebne` text DEFAULT NULL,
  `czasRozgrywki` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `grytowarzyskie`
--

INSERT INTO `grytowarzyskie` (`id`, `nazwa`, `liczbaGraczy`, `potrzebne`, `czasRozgrywki`) VALUES
(1, 'Statki', 2, 'Kartka papieru, coś do pisania', 10),
(2, 'Kółko i krzyżyk', 2, 'Kartka papieru, coś do pisania', 1),
(3, 'Państwa - miasta', 5, 'Kartka papieru dla każdego gracza, coś do pisania', 30),
(4, 'Kalambury', 6, 'Tablica i pisak', 30),
(5, 'Piotruś Pan', 2, 'Karty do Piotrusia', 20),
(6, 'Pasjans', 1, 'Karty', 20),
(7, 'Remik', 4, 'Karty', 20),
(8, 'Tysiąc', 3, 'Karty', 15),
(9, 'Makao', 4, 'Karty', 20),
(10, 'Kości', 4, '6 kości do gry', 15),
(11, 'Kości z powtórzeniami', 4, '6 kości do gry', 15),
(12, 'Domino', 2, 'Klocki domino', 20);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `grytowarzyskie`
--
ALTER TABLE `grytowarzyskie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `grytowarzyskie`
--
ALTER TABLE `grytowarzyskie`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
