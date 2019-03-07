// models.Employee.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  // What is the user's role in the app
  role: {
    type: String,
    required: true
  },
  // What Company is the Employee apart of
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company"
  },
  // All unique info for the user
  info: {
    userName: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
  },
  recentlyViewedPages: [
    {
      type: String,
    }
  ],
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
