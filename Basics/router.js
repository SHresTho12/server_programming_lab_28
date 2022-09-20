const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const {form } = require("./controllers/FormController");

const fs = require("fs");

router.get("/", getCV);
router.get("/information", form);

router.post("/information", (req, res) => {


const {name , Designation,address,email,number} = req.body;

educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));
  languages = fs.readFileSync("data/language", { encoding: "utf-8"})
  languages = JSON.parse(String(languages));
  skills = fs.readFileSync("data/skill", { encoding: "utf-8"})
  skills = JSON.parse(String(skills));
  experiences = fs.readFileSync("data/workexp", { encoding: "utf-8"})
  experiences = JSON.parse(String(experiences));
  edus = [];
  language = [];
  skill = [];
  workexps = [];
  for (let key in educations) {
    edus.push(educations[key]);
  }
  for (let key in skills) {
    skill.push(skills[key]);
  }
  for (let key in languages) {
  language.push(languages[key]);
  }
  for (let key in experiences) {
    workexps.push(experiences[key]);
    }
  res.render("cv", { name: name,Designation:Designation,address:address,email:email,number:number, educations: edus , languages: language, skills: skill, workexps: workexps});

})
module.exports = router;
