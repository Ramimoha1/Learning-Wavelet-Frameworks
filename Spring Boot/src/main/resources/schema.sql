CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- photo table schema
CREATE TABLE IF NOT EXISTS photo  (
    id UUID primary key DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) not null,
    content_type VARCHAR(50) not null,
    data BYTEA  not null
);