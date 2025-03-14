const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'yangdong20240815',
  database: 'products',
});


export default async function POST(request, response) {
  const {field} = request.body
  console.log(field);
    try {
      const connection = await pool.getConnection();
      const [results1, fields1] = await connection.query(`SELECT name FROM productmain where name like '%${field}%'`);
      connection.release();
      return response.json({ data: results1});
    } catch (error) {
      console.error('Error:', error);
      return response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }