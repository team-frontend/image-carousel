DROP DATABASE IF EXISTS img_carousel;

CREATE DATABASE img_carousel;

-- POSTGRES
\c img_carousel

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  imageUrl TEXT,
  houseId INT,
  houseName TEXT
);

COPY images(imageUrl,houseId, houseName)
FROM :fname DELIMITER ',' CSV HEADER;

-- MYSQL
-- USE img_carousel;

-- CREATE TABLE images (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   imageUrl TEXT,
--   houseID INT,
--   houseName TEXT,
-- );

-- CREATE TABLE house (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   description TEXT
-- );
