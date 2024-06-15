import mysql from 'mysql'

export default db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'83146022',
    database:'blog_site'
})
