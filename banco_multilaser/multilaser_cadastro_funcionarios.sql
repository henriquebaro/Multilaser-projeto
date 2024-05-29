-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: multilaser
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cadastro_funcionarios`
--

DROP TABLE IF EXISTS `cadastro_funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastro_funcionarios` (
  `nome` varchar(100) NOT NULL,
  `rg` varchar(20) NOT NULL,
  `data_nascimento` date NOT NULL,
  `cep` varchar(10) NOT NULL,
  `celular` varchar(20) DEFAULT NULL,
  `cargo` varchar(100) NOT NULL,
  `departamento` varchar(100) NOT NULL,
  `data_admissao` date NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  `id_funcionarios` int NOT NULL AUTO_INCREMENT,
  `senha` int DEFAULT NULL,
  PRIMARY KEY (`id_funcionarios`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_funcionarios`
--

LOCK TABLES `cadastro_funcionarios` WRITE;
/*!40000 ALTER TABLE `cadastro_funcionarios` DISABLE KEYS */;
INSERT INTO `cadastro_funcionarios` VALUES ('henrique','123333','0463-03-05','85573','213231','gerenciador','chefia geral','0044-03-05','ique.bp.hb@gmail.com','123321',14,123),('josivania','8762214','0003-12-31','234314','124774812','chefia','geral','0023-04-12','ique.bp.hb@gmail.com','123123',15,21102329);
/*!40000 ALTER TABLE `cadastro_funcionarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-28 21:51:59
