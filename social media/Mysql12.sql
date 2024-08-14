CREATE DATABASE social_media_dashboard;

USE social_media_dashboard;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    linkedin VARCHAR(255),
    github VARCHAR(255)
);
