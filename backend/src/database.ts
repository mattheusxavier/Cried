import { Sequelize } from 'sequelize'

const sequelize = new Sequelize("mysql://b0ccb5fb9ae440:b36e382f@us-cdbr-east-02.cleardb.com/heroku_2c248019420b0cf")
// const sequelize = new Sequelize("mysql://root:root@localhost:3306/pitu")

export default sequelize