const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAll(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM applications LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}
async function create(application){
    console.log(application);
    const result = await db.query(
      `INSERT INTO applications 
      ( name, data, createdBy) 
      VALUES 
      ( '${application.name}', '${application.data}', '${application.createdBy}')`
    );
  
    let message = 'Error in creating new application ';
  
    if (result.affectedRows) {
      message = 'application created successfully';
    }
  
    return {message};
  }
module.exports = {
    getAll,
    create
}