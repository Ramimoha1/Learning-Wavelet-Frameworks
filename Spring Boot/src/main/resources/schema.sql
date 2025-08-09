CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- photo table schema
CREATE TABLE IF NOT EXISTS photo  (
    id UUID primary key DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) not null,
    content_type VARCHAR(50) not null,
    data BYTEA  not null
);

-- photo table schema
CREATE TABLE IF NOT EXISTS citation  (
    id UUID primary key DEFAULT uuid_generate_v4(),
    Matric foreign key references student,
    filename VARCHAR(255) not null,
    content_type VARCHAR(50) not null,
    data BYTEA  not null
    );

-- Student table schema
CREATE TABLE IF NOT EXISTS student  (
    Matric VARCHAR(10) primary key ,
    Name  VARCHAR(255) not null,
    faculty VARCHAR(50) not null,
    profile_photo BYTEA  not null
    );

-- Student table schema
CREATE TABLE IF NOT EXISTS car_registration  (
    car_plate  VARCHAR(255) primary key not null,
    matric VARCHAR(10) foreign key references student
);



