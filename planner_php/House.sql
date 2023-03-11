create database book;

use book;

create table entry(
    id int primary key auto_increment,
    title varchar(255) not null,
    titletyp ENUM('Einnahme', 'Ausgabe') not null,
    amount decimal(19,2),
    titledate date
);