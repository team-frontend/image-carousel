DROP DATABASE images;
CREATE DATABASE images;

\c images;

CREATE TABLE IF NOT EXISTS carousel(
  id SERIAL PRIMARY KEY,
  imageUrl TEXT,
  houseID INT NOT NULL
);

\COPY images FROM 'database/NoSQL/imagesfile.tsv' DELIMITER '\t';