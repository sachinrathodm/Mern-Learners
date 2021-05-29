const sql = require('mssql')

const db = async () => {
  try {
    await sql.connect(
      'Server=SQL6007.site4now.net,1433;Database=DB_A28824_learners;User Id=DB_A28824_learners_admin;Password=Learners@123;Encrypt=true;trustServerCertificate=true'
    )
    console.log('[INFO] Database Connected...')
  } catch (err) {
    console.log('[Error] ' + err)
  }
}

module.exports = db
