//import mysql from "mysql2/promise"

import { PrismaClient } from "@prisma/client";

// const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'sample-db',
//     password: 'root',
//   });

const prisma = new PrismaClient()

// export async function POST(request) {
//     const body = await request.json()
//     console.log(body)
//     const sql = 'SELECT name, phone, address, gender FROM users WHERE id='+body.ID+' LIMIT 1'

//     const [rows, fields] = await connection.query({
//         sql,
//         rowsAsArray: false,
//         // ... other options
//       });
//     return Response.json({ rows })
// }

export async function POST() {
  try {
    // Her bruger vi "await" for at vente på, at prisma.user.findMany() bliver færdig, før vi går videre.
    const allUsers = await prisma.users.findMany();
    console.log(allUsers);

    // Send responsen til frontend
    return new Response(JSON.stringify({ success: true, data: allUsers }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (fejl) {
    // Hvis der opstår en fejl, vil vi udskrive den og afslutte processen med exit code 1.
    console.error(fejl);
    process.exit(1);

    // Send en fejlrespons til frontend
    return {
      status: 500, // Intern serverfejl
      body: {
        success: false,
        error: "Der opstod en intern fejl.",
      },
    };
  } finally {
    // Uanset om der opstår en fejl eller ej, vil vi sikre os, at forbindelsen til databasen afsluttes korrekt.
    await prisma.$disconnect();
  }
}