CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price decimal(10, 2) NOT NULL,
    description_food TEXT,
    active BOOLEAN DEFAULT TRUE,
    image_url VARCHAR(255)
);
CREATE TABLE sale (
    id SERIAL PRIMARY KEY,
    total decimal(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE sale_detail (
    id SERIAL PRIMARY KEY,
    food_id INTEGER REFERENCES food(id),
    quantity INTEGER NOT NULL,
    total decimal(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);