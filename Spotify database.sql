CREATE DATABASE  IF NOT EXISTS `spotify` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `spotify`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: spotify
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `artist` (
  `artistid` int(11) NOT NULL AUTO_INCREMENT,
  `artistname` varchar(45) NOT NULL,
  `dob` varchar(45) NOT NULL,
  `bio` varchar(45) NOT NULL,
  PRIMARY KEY (`artistid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'Justin Bieber','1994-04-21',''),(3,'Sonu Nigam','1981-10-02','Rockstar'),(4,'Atif Aslam','1995-02-26','Love songs'),(5,'Honey Singh','1992-02-19','Rap songs');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `songs` (
  `songid` int(11) NOT NULL AUTO_INCREMENT,
  `songname` varchar(45) DEFAULT NULL,
  `dateofrelease` varchar(45) DEFAULT NULL,
  `artwork` varchar(45) DEFAULT NULL,
  `artist` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`songid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (11,'Love me','Jul 20, 2022','98fc366e-ef4c-4dca-88fb-43acab87fae9.png','1'),(12,'Blue eyes','Jul 18, 2012','1f9f2cab-a34c-4d23-8d82-cfbae0071fc2.png','5'),(13,'Ranjha','Jul 12, 2022','2cd5c04e-487a-4053-9472-ab0c28d6a80d.jpg','4'),(14,'Heeriye','Jul 11, 2012','946419a2-9f6a-4a93-87c7-5d6d0c3db64c.png','3'),(15,'Do Pal','Jul 18, 2022','ec8d3a83-f43f-4e66-88e5-8eb46559e00a.jfif','3'),(16,'Sunny Sunny','Apr 14, 2016','911be676-7051-4f75-8603-9f1131cce1a9.jpg','5');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'spotify'
--

--
-- Dumping routines for database 'spotify'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-20 13:28:27
