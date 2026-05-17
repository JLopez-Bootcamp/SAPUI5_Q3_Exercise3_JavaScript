/* Given the data below, output the data(Name and Age) of the person with 
the highest number of skillset. A dynamic code should be created. 
Output: Name: Patrick 
        Age: 22 */

var record = [{ 
    "Name":"Gibo", 
    "Age":16, 
    "SkillSet" : [{ "Skill":"SAP UI5" }, { "Skill":"SAP HANA" }] }, 
    {
    "Name":"Patrick", 
    "Age":22, 
    "SkillSet" : [{ "Skill":"SAP UI5" }, { "Skill":"SAP HANA" }, { "Skill":"SAP ABAP" }] }, 
    { 
    "Name":"MJ", 
    "Age":24, 
    "SkillSet" : [{ "Skill":"SAP HANA" }] 
}]; 

var mostSkills = 0; 
var personMostSkills = null;

// Go through each record to find the person with the highest number of skills
for (var i = 0; i < record.length; i++) {
    var skillCount = record[i].SkillSet.length; 
    if (skillCount > mostSkills) { 
        mostSkills = skillCount; 
        personMostSkills = record[i]; 
    } 
} 

console.log("Name: " + personMostSkills.Name); 
console.log("Age: " + personMostSkills.Age);