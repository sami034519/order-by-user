// '../config/db.js'
import { Sequelize, DataTypes } from "sequelize";

const sequelize1 = new Sequelize("studentdata", "root", "root_123", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

const Student = sequelize1.define("student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  studentname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
export { sequelize1, Student };
