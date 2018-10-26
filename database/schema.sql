DROP DATABASE IF EXISTS img_carousel;

CREATE DATABASE img_carousel;

USE img_carousel;

CREATE TABLE images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  imageUrl TEXT,
  houseID INT
);

CREATE TABLE house (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT
);
