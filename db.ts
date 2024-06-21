import mysql2 from 'mysql2';
import { Pool } from 'mysql2/promise';

export class DB {
    conn: Pool;

    constructor() {
        this.conn = mysql2.createPool({
            database: 'signup',
            host: 'localhost',
            user: 'root',
            password: ''
        }).promise();
    }

    async query(sql: string, params: any[]) {
        const [rows] = await this.conn.execute(sql, params);
        return rows;
    }
}
