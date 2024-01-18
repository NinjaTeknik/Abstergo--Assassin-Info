//import mysql from "mysql2/promise"
import { PrismaClient } from "@prisma/client";

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sample-db',
    password: 'root',
  });

export async function POST(request) {
    const body = await request.json()
    console.log(body)
    const sql = 'SELECT name, phone, address, gender FROM users WHERE id='+body.ID+' LIMIT 1'


    const [rows, fields] = await connection.query({
        sql,
        rowsAsArray: false,
        // ... other options
      });
    return Response.json({ rows })
}