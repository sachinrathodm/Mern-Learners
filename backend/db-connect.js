const sql = require('mssql')
const config = {
  user: 'DB_A28824_learners_admin',
  password: 'Learners@123',
  server: 'SQL6007.site4now.net',
  database: 'DB_A28824_learners',
  trustServerCertificate: true,
}
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch((err) => console.log('Database Connection Failed! Bad Config: ', err))
module.exports = {
  sql,
  poolPromise,
}
