'use strict';




function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let fPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
 
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){

        spamFillTable(fPeople);
        document.getElementById("alertUnknown").innerHTML = "We found..."
    
    }else{
        document.getElementById("alertUnknown").innerHTML = "This person is not in our records. Try another name."

       
    }
}

let userInput = "landScaper Gender male Eye Color brown"
let hiphipArray = [];

let input = userInput.toLowerCase();


function declareAttributes(input){
    let attributes = input.split(" ")
    return attributes;
 }
 




function declareGender(declaredAttributesArray) {
    for (let i = 0; i < declaredAttributesArray.length; i++) {
       
        if (declaredAttributesArray[i].includes("male")){
           let yGender = people.filter(function (person){
               if (person.gender == "male"){
                   //declaredAttributesArray.pop("male");
                   return true;
                }
                else return false;
           
           })
            return (yGender);  // This returns an array of 9 men, if user searched men
        }
        if (declaredAttributesArray[i].includes("female")){
            let xGender = people.filter(function (person){
                if(person.gender == "female"){
                   // declaredAttributesArray.pop("female");
                    return true;
                }
                else return false;

            })
            return (xGender); // this returns an array of women, if user specified women
        }

    }
}








function searchEyeColors(declaredAttributesArray){
    for (let i = 0; i < declaredAttributesArray.length; i++){
        if (declaredAttributesArray[i].includes("blue")){
            let blueEyed = filteredPeople.filter(function (person){
                if(person.eyeColor == "blue"){
                   // declaredAttributesArray.pop("blue");
                    return true;
                }
                else return false;

            })
            return (blueEyed);
            
        }
        if(declaredAttributesArray[i].includes("brown")){
            let brownEyed = filteredPeople.filter(function (person){
                if (person.eyeColor == "brown"){
                    // declaredAttributesArray.pop("brown");
                    return true;
                }
                else return false;
            })
            return (brownEyed);
        }
        if(declaredAttributesArray[i].includes("hazel")){
            let hazelEyed = filteredPeople.filter(function (person){
                if (person.eyeColor == "hazel"){
                   //declaredAttributesArray.pop("hazel");
                    return true;
                }
                else return false;
            })
            return (hazelEyed);
        }
        if(declaredAttributesArray[i].includes("black")){
            let blackEyed = filteredPeople.filter(function (person){
                if (person.eyeColor == "black"){
                    //declaredAttributesArray.pop("black");
                    return true;
                }
                else return false;
            })
            return (blackEyed);
        }
        if(declaredAttributesArray[i].includes("green")){
            let greenEyed = filteredPeople.filter(function (person){
                if (person.eyeColor == "green"){
                    //declaredAttributesArray.pop("green");
                    return true;
                }
                else return false;
            })
            return (greenEyed);
        }
        

    }

}

function searchByOccupation(declaredAttributesArray){
    for (let i = 0; i < declaredAttributesArray.length; i++){
        if (declaredAttributesArray[i].includes("landscaper")){
            let landScaper = filteredPeople.filter(function (person){
                if (person.occupation == "landscaper"){
                    return true;
                }
                else return false;

            })
            return (landScaper);
        }
        if (declaredAttributesArray[i].includes("assistant")){
            let assistant = filteredPeople.filter(function (person){
                if (person.occupation == "assistant"){
                    return true;
                }
                else return false;
            })
            return (assistant);
        }
        if (declaredAttributesArray[i].includes("programmer")){
            let programmer = filteredPeople.filter(function (person){
                if (person.occupation == "programmer"){
                    return true;
                }
                else return false;
            })
            return (programmer);
        }
        if (declaredAttributesArray[i].includes("nurse")){
            let nurse = filteredPeople.filter(function (person){
                if (person.occupation == "nurse"){
                    return true;
                }
                else return false;
            })
            return (nurse);
        }
        if (declaredAttributesArray[i].includes("student")){
            let student = filteredPeople.filter(function (person){
                if (person.occupation == "student"){
                    return true;
                }
                else return false;
            })
            return (student);
        }
        if (declaredAttributesArray[i].includes("architect")){
            let architect = filteredPeople.filter(function (person){
                if (person.occupation == "architect"){
                    return true;
                }
                else return false;
            })
            return (architect);
        }
        if (declaredAttributesArray[i].includes("doctor")){
            let doctor = filteredPeople.filter(function (person){
                if (person.occupation == "doctor"){
                    return true;
                }
                else return false;
            })
            return (doctor);
        }
        if (declaredAttributesArray[i].includes("politician")){
            let politician = filteredPeople.filter(function (person){
                if (person.occupation == "politician"){
                    return true;
                }
                else return false;
            })
            return (politician);
        }
    

    }
   
}

/// Dang, I think I just realized I could have done a nested forloop..
 if(declaredAttributesArray[i].includes(filteredPeople[j].occupation))
/// will work on that tomorrow...



let declaredAttributesArray = declareAttributes(input);
let filteredPeople = declareGender(declaredAttributesArray);
filteredPeople = searchEyeColors(declaredAttributesArray);
filteredPeople = searchByOccupation(declaredAttributesArray);
console.log(filteredPeople)
if (filteredPeople.length == 1){
    spamFillTable(filteredPeople)
}

   








/* 
function searchByAttribute(){
    const list = [];
    // Grabbing the values from our nameForm form and inputs.
    let idyNum = document.forms["attribute"]["anIDNumber"].value;
    let DOB = document.forms["attribute"]["anDOB"].value;
    let aGender = document.forms["attribute"]["anGender"].value;

    for(let i = 0; i < people.length; i++){
        console.log(people[i])

        if (people[i].id == idyNum){
            FillTable(people[i])
            break;
        }
        if (people[i].dob == DOB){
            FillTable(people[i])
            break;
        }
        if (people[i].gender == aGender || people[i] == "m" || people[i] == "f"){
            list.push(people[i])
            
        }


    }
    console.log(list)

}

 */
function searchID(){
    let idyNum = document.forms["attribute"]["anIDNumber"].value;
    var table = document.createElement("TABLE");
    table.border = "1";
    var row = table.insertRow(-1);

    for (let i = 0; i < people.length; i++){
       
        if (people[i].id == idyNum){
            var cell = row.insertCell(-1)

            cell.innerHTML = people[i].id + " " + people[i].firstName+" "+people[i].lastName+" "+people[i].gender+" "+people[i].dob+" "+people[i].height+" "+people[i].weight+" "+people[i].eyeColor+" "+people[i].occupation+" "+people[i].parents+" "+people[i].currentSpouse


        }

    }
        var idTable = document.getElementById("idTable");
        idTable.innerHTML = "";
        idTable.appendChild(table);
}

// Search by ID END---












// let tags = ["id", "firstName", "lastName", "gender", "dob", "height", "weight", "eyeColor", "occupation", "parents", "currentSpouse"]



    function GenerateTable() {
        //Build an array containing Customer records.
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
        //Get the count of columns.
        var columnCount = 1;
 
        //Add the header row.
        var row = table.insertRow(-1);
  
        //Add the data rows.
        for (var i = 1; i < people.length; i++) {
            //row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = people[i].id + " " + people[i].firstName+" "+people[i].lastName+" "+people[i].gender+" "+people[i].dob+" "+people[i].height+" "+people[i].weight+" "+people[i].eyeColor+" "+people[i].occupation+" "+people[i].parents+" "+people[i].currentSpouse
               
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }

let infoArray = [];

/// PUT ALL FUNCTIONS BELOW SO THE CODE UP TOP LOOKS BRIEF AND ORDERLY------REDUCE CLUTTER ABOVE------


function spamFillTable(filteredPeople){
    document.getElementById("id").innerHTML = filteredPeople[0].id
    document.getElementById("firstName").innerHTML = filteredPeople[0].firstName
    document.getElementById("lastName").innerHTML = filteredPeople[0].lastName
    document.getElementById("gender").innerHTML = filteredPeople[0].gender
    document.getElementById("dob").innerHTML = filteredPeople[0].dob
    document.getElementById("height").innerHTML = filteredPeople[0].height
    document.getElementById("weight").innerHTML = filteredPeople[0].weight
    document.getElementById("eyeColor").innerHTML = filteredPeople[0].eyeColor
    document.getElementById("occupation").innerHTML = filteredPeople[0].occupation
    document.getElementById("parents").innerHTML = filteredPeople[0].parents
    document.getElementById("currentSpouse").innerHTML = filteredPeople[0].currentSpouse
}

/* for(let i =0; i < people.length; i++) {
    var elements = people[i].id;
    console.log(elements);

} 
 */

/* Working Examples 

for(let i =0; i < people.length; i++) {
    var elements = people[i].firstName;
    console.log(elements);
    
} 
for(let i =0; i < people.length; i++) {
    var elements = people[i].lastName;
    console.log(elements);

} 

for(let i =0; i < people.length; i++) {
    var elements = people[i].gender;
    console.log(elements);
      
} 
for(let i =0; i < people.length; i++) {
    var elements = people[i].dob;
    console.log(elements);

} 

for(let i =0; i < people.length; i++) {
    var elements = people[i].height;
    console.log(elements);
    
} 
for(let i =0; i < people.length; i++) {
    var elements = people[i].weight;
    console.log(elements);

} 

for(let i =0; i < people.length; i++) {
    var elements = people[i].eyeColor;
    console.log(elements);

} 
for(let i =0; i < people.length; i++) {
    var elements = people[i].occupation;
    console.log(elements);
    
} 
for(let i =0; i < people.length; i++) {
    var elements = people[i].parents;
    console.log(elements);

} 

for(let i =0; i < people.length; i++) {
    var elements = people[i].currentSpouse;
    console.log(elements);

} 
 */



///  this above i'm trying to work with from this site
//   https://www.aspsnippets.com/Articles/Create-dynamic-Table-in-HTML-at-runtime-using-JavaScript.aspx



//   cell.innerHTML = people[i].id + " " + people[i].firstName+" "+people[i].lastName+" "+people[i].gender+" "+people[i].dob+" "+people[i].height+" "+people[i].weight+" "+people[i].eyeColor+" "+people[i].occupation+" "+people[i].parents+" "+people[i].currentSpouse




/// ATTENTION:  never used functions below. In case you want to save for later or stealing pieces from them.


