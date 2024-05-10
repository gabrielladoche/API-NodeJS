import pg from 'pg';

const { Pool: PgPool } = pg;

const pool = new PgPool({
    user: 'postgres',
    host: 'localhost',
    database: 'bdcopa',
    password: '#0gl@zng23*',
    port: 5432
});

// Conectando com o banco 
pool.connect()


export default pool

