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

let userInput = "female"
let hiphipArray = [];

let filteredPeople = people;
let input = userInput.toLowerCase();


function declareAttributes(input){
    let attributes = input.split(" ")
    return attributes;
}





function searchByGender(declaredAttributesArray) {
    let matchingGender = [];
    for (let i = 0; i < declaredAttributesArray.length; i++) {
        
        for (let j = 0; j < filteredPeople.length; j++){
            if (declaredAttributesArray[i] == filteredPeople[j].gender){
                matchingGender.push(filteredPeople[j]);
            }
        }
    }
    if (matchingGender.lenght < 1){
        return filteredPeople;
    }
    else return matchingGender;
    
        
}

function searchEyeColors(declaredAttributesArray){
    let matchingEyes = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for (let j = 0; j < filteredPeople.length; j++) {
            if (declaredAttributesArray[i] == filteredPeople[j].eyeColor){
                matchingEyes.push(filteredPeople[j]);
            
            }
        }
    }
    if (matchingEyes.length < 1){
        return filteredPeople;
    }
    else return matchingEyes;
}


function searchByOccupation(declaredAttributesArray){
    let matchingJobs = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for (let j = 0; j < filteredPeople.length; j++)
        if (declaredAttributesArray[i] == filteredPeople[j].occupation){
            matchingJobs.push(filteredPeople[j]); 

        }
    }   
    if (matchingJobs.length < 1){
        return filteredPeople;
    }
    else return matchingJobs;
        
}   

function searchByDOB(declaredAttributesArray){
    let matchingDOB = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for(let j = 0; j < filteredPeople.length; j++)
        if (declaredAttributesArray[i] == filteredPeople[j].dob){
            matchingDOB.push(filteredPeople[j])
            
        }
    }
    if (matchingDOB.length < 1){
        return filteredPeople;
    }
    else return matchingDOB;

}

function searchByHeight(declaredAttributesArray){
    let matchingHeight = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for(let j = 0; j < filteredPeople.length; j++)
        if (declaredAttributesArray[i] == filteredPeople[j].height){
            matchingHeight.push(filteredPeople[j])
            
        }
    }
    if (matchingHeight.length < 1){
        return filteredPeople;
    }
    else return matchingHeight;

}

function searchByWeight(declaredAttributesArray){
    let matchingWeight = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for(let j = 0; j < filteredPeople.length; j++)
        if (declaredAttributesArray[i] == filteredPeople[j].weight){
            matchingWeight.push(filteredPeople[j])
            
        }
    }
    if (matchingWeight.length < 1){
        return filteredPeople;
    }
    else return matchingWeight;

}

function searchByID(declaredAttributesArray){
    let matchingID = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for(let j = 0; j < filteredPeople.length; j++){
            if (declaredAttributesArray[i] == filteredPeople[j].id){
                matchingID.push(filteredPeople[j])
            }
        }
    }
    if (matchingID < 1){
        return filteredPeople;
    }
    else return matchingID;
}




let declaredAttributesArray = declareAttributes(input);
filteredPeople = searchByGender(declaredAttributesArray);
filteredPeople = searchEyeColors(declaredAttributesArray);
filteredPeople = searchByOccupation(declaredAttributesArray);
filteredPeople = searchByDOB(declaredAttributesArray);
filteredPeople = searchByHeight(declaredAttributesArray);
filteredPeople = searchByWeight(declaredAttributesArray);
filteredPeople = searchByID(declaredAttributesArray);
console.log(filteredPeople)
if (filteredPeople.length == 1){
    spamFillTable(filteredPeople)
}else GenerateTable();













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
        for (var i = 1; i < filteredPeople.length; i++) {
            //row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = filteredPeople[i].id + " " + filteredPeople[i].firstName+" "+filteredPeople[i].lastName+" "+filteredPeople[i].gender+" "+filteredPeople[i].dob+" "+filteredPeople[i].height+" "+filteredPeople[i].weight+" "+filteredPeople[i].eyeColor+" "+filteredPeople[i].occupation+" "+filteredPeople[i].parents+" "+filteredPeople[i].currentSpouse
               
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




/// BRBO.. this was the "searchByOccupation" function I Had.. BEFORE i reduced it, lol... 

/*
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
*/