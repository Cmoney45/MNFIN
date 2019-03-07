// models.Show.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employees"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
