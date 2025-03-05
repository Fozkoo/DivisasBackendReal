-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-03-2025 a las 19:26:25
-- Versión del servidor: 8.0.39
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `divisasdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `divisas`
--

CREATE TABLE `divisas` (
  `id` int NOT NULL,
  `moneda` varchar(50) DEFAULT NULL,
  `casa` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `compra` double DEFAULT NULL,
  `venta` double DEFAULT NULL,
  `fechaActualizacion` varchar(255) DEFAULT NULL,
  `tipoDivisa` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `divisas`
--

INSERT INTO `divisas` (`id`, `moneda`, `casa`, `nombre`, `compra`, `venta`, `fechaActualizacion`, `tipoDivisa`, `tipo`) VALUES
(1, 'USD', 'tarjeta', 'tarjeta', 1357.53, 1409.53, '2025-02-28T15:18:00.000Z', 'dolares', 'tarjeta'),
(2, 'USD', 'oficial', 'oficial', 1044.25, 1084.25, '2025-02-28T15:18:00.000Z', 'dolares', 'oficial'),
(3, 'EUR', 'oficial', 'Euro', 1102.3089, 1108.0853, '2025-02-28T16:55:00.000Z', 'cotizaciones', 'eur'),
(4, 'BRL', 'oficial', 'Real Brasileño', 180.7895, 180.8801, '2025-02-28T13:30:00.000Z', 'cotizaciones', 'brl'),
(5, 'CLP', 'oficial', 'Peso Chileno', 1.1081, 1.1081, '2025-02-28T13:30:00.000Z', 'cotizaciones', 'clp'),
(6, 'UYU', 'oficial', 'Peso Uruguayo', 25.0219, 25.0221, '2025-02-28T13:30:00.000Z', 'cotizaciones', 'uyu'),
(7, 'USD', 'blue', 'blue', 1210, 1230, '2025-03-03T19:58:00.000Z', 'dolares', 'blue'),
(8, 'USD', 'bolsa', 'bolsa', 1225.1, 1231.3, '2025-03-03T19:58:00.000Z', 'dolares', 'bolsa'),
(9, 'USD', 'contadoconliqui', 'Contado con liquidación', 1221.3, 1222, '2025-03-03T19:58:00.000Z', 'dolares', 'contadoconliqui'),
(10, 'USD', 'mayorista', 'Mayorista', 1061.75, 1064.75, '2025-02-28T11:51:00.000Z', 'dolares', 'mayorista'),
(11, 'USD', 'cripto', 'Cripto', 1238.3, 1240, '2025-03-03T19:58:00.000Z', 'dolares', 'cripto');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `divisas`
--
ALTER TABLE `divisas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `divisas`
--
ALTER TABLE `divisas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
