const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));
  languages = fs.readFileSync("data/language.json", { encoding: "utf-8"})
  languages = JSON.parse(String(languages));
  skills = fs.readFileSync("data/skill.json", { encoding: "utf-8"})
  skills = JSON.parse(String(skills));
  experiences = fs.readFileSync("data/workexp.json", { encoding: "utf-8"})
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
  res.render("cv", { name: "Talimul Bari", educations: edus , languages: language, skills: skill, workexps: workexps});
};

module.exports = { getCV: getCV };
