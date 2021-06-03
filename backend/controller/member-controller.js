var express = require('express')
var router = express.Router()
const { sql, poolPromise } = require('../db-connect')

class MainController {
  //get all data of member
  async MembergetAllData(req, res) {
    try {
      const pool = await poolPromise
      console.log(pool)
      const result = await pool.request().query('select * from [dbo].[Members]')
      res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  //add Member
  async MemberaddNewData(req, res) {
    try {
      if (
        req.body.Member_FirstName != null &&
        req.body.Member_LastName != null &&
        req.body.Mobile_No != null &&
        req.body.Email_ID != null &&
        req.body.Password != null
      ) {
        const pool = await poolPromise
        const result = await pool
          .request()
          .input('Member_FirstName', sql.VarChar, req.body.Member_FirstName)
          .input('Member_LastName', sql.VarChar, req.body.Member_LastName)
          .input('Mobile_No', sql.VarChar, req.body.Mobile_No)
          .input('Email_ID', sql.VarChar, req.body.Email_ID)
          .input('Password', sql.VarChar, req.body.Password)
          .query(
            'INSERT INTO [dbo].[Members] (Member_FirstName,Member_LastName,Mobile_No,Email_ID,Password) VALUES (@Member_FirstName,@Member_LastName,@Mobile_No,@Email_ID,@Password) '
          )
        res.json(result)
      } else {
        res.send('Please fill all the details!')
      }
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  //update Member
  async MemberupdateData(req, res) {
    try {
      if (
        req.body.Member_ID != null &&
        req.body.Member_FirstName != null &&
        req.body.Member_LastName != null &&
        req.body.Mobile_No != null &&
        req.body.Email_ID != null &&
        req.body.Password != null
      ) {
        const pool = await poolPromise
        const result = await pool
          .request()
          .input('Member_ID', sql.UniqueIdentifier, req.body.Member_ID)
          .input('Member_FirstName', sql.VarChar, req.body.Member_FirstName)
          .input('Member_LastName', sql.VarChar, req.body.Member_LastName)
          .input('Mobile_No', sql.VarChar, req.body.Mobile_No)
          .input('Email_ID', sql.VarChar, req.body.Email_ID)
          .input('Password', sql.VarChar, req.body.Password)
          .query(
            'UPDATE [dbo].[Members] SET Member_FirstName = @Member_FirstName, Member_LastName =@Member_LastName, Mobile_No=@Mobile_No,Email_ID=@Email_ID,Password=@Password WHERE Member_ID = @Member_ID'
          )
        res.json(result)
      } else {
        res.send('All fields are required!')
      }
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  //delete Member
  async MemberdeleteData(req, res) {
    const Member_ID = req.params.id
    try {
      if (Member_ID != null) {
        console.log(Member_ID)
        const pool = await poolPromise
        const result = await pool
          .request()
          .input('Member_ID', sql.UniqueIdentifier, Member_ID)
          .query('DELETE FROM [dbo].[Members] WHERE Member_ID = @Member_ID')
        res.json(result)
      } else {
        res.send('Please fill all the details!')
      }
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
}

const controller = new MainController()
module.exports = controller
