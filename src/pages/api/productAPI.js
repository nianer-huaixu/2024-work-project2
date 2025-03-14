const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'yangdong20240815',
  database: 'products',
});


export default async function GET(request, response) {
  // console.log(request);
  const {name} = request.body
  console.log(name);
    try {
      const connection = await pool.getConnection();
      const [results1, fields1] = await connection.query(`SELECT * FROM productmain where name ='${name}'`);
      const [results2, fields2] = await connection.query(`SELECT * FROM productintro where name ='${name}'`);
      const [results3, fields3] = await connection.query(`SELECT * FROM productchemical where name ='${name}'`);
      const [results4, fields4] = await connection.query(`SELECT * FROM productphysics where name ='${name}'`);
      const [results5, fields5] = await connection.query(`SELECT * FROM productmechanical where name ='${name}'`);
      const [results6, fields6] = await connection.query(`SELECT * FROM productuse where name ='${name}'`);
      connection.release();
      return response.json({ 
        productMain: results1[0],
        intro:results2[0],
        chemical:results3[0],
        physics:results4[0],
        mechanical:results5[0],
        use:results6[0]
      });
    } catch (error) {
      console.error('Error:', error);
      return response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }