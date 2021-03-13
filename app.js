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



function searchByKeyWord(){

    let userInput = document.forms["keyWordForm"]["keyWords"].value  //replace the " user input " for anything and test to see what works.
    
    
    let filteredPeople = people;
    let declaredAttributesArray = userInput.split(" ");
    

    declaredAttributesArray = accountForParentsID(declaredAttributesArray, filteredPeople)
    filteredPeople = searchByGender(declaredAttributesArray, filteredPeople);
    filteredPeople = searchEyeColors(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByOccupation(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByDOB(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByHeight(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByWeight(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByFirstName(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByLastName(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByID(declaredAttributesArray, filteredPeople);
    if (filteredPeople.length == 22){
        
        alert("No match")
        spamFillTable(filteredPeople)
        
    }
   
    else if (filteredPeople.length > 1){
        GenerateTable(filteredPeople)

    }
    else spamFillTable(filteredPeople)

}

    function accountForParentsID(declaredAttributesArray, filteredPeople){
        let parentArray = [];
        for (let i = 0; i < declaredAttributesArray.length; i++){
            
            for(let j = 0; j < filteredPeople.length; j++){
                if(declaredAttributesArray[i] == filteredPeople[j].parents[0] || declaredAttributesArray[i] == filteredPeople[j].parents[1]){
                

                    if (filteredPeople[j].parents.length > 1){
                        parentArray.push(filteredPeople[j].parents[0]);
                        parentArray.push(filteredPeople[j].parents[1]);

                    }
                    else parentArray.push(filteredPeople[j].parents[0]);

                }


            }
        
        }
        let attributeAddition = declaredAttributesArray.concat(parentArray);
        return attributeAddition;
        
    
    }



function searchByGender(declaredAttributesArray, filteredPeople) {
    let matchingGender = [];
    for (let i = 0; i < declaredAttributesArray.length; i++) {
        
        for (let j = 0; j < filteredPeople.length; j++){
            if (declaredAttributesArray[i] == filteredPeople[j].gender){
                matchingGender.push(filteredPeople[j]);
            }
        }
    }
    if (matchingGender.length < 1){
        return filteredPeople;
    }
    else return matchingGender;
    
        
}

function searchEyeColors(declaredAttributesArray, filteredPeople){
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


function searchByOccupation(declaredAttributesArray, filteredPeople){
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

function searchByDOB(declaredAttributesArray, filteredPeople){
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

function searchByHeight(declaredAttributesArray, filteredPeople){
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

function searchByWeight(declaredAttributesArray, filteredPeople){
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

function searchByID(declaredAttributesArray, filteredPeople){
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

function searchByFirstName(declaredAttributesArray, filteredPeople){
    let matchingFName = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for(let j = 0; j < filteredPeople.length; j++){
            
            if (declaredAttributesArray[i] == filteredPeople[j].firstName.toLowerCase()){
        
                matchingFName.push(filteredPeople[j])
            }
            else filteredPeople[j].firstName[0].toUpperCase();
        }
    }
    if (matchingFName < 1){
        return filteredPeople;
    }
    else return matchingFName;
}

function searchByLastName(declaredAttributesArray, filteredPeople){
    let matchingLName = [];
    for (let i = 0; i < declaredAttributesArray.length; i++){

        for(let j = 0; j < filteredPeople.length; j++){
            
            if (declaredAttributesArray[i] == filteredPeople[j].lastName.toLowerCase()){
        
                matchingLName.push(filteredPeople[j])
            }
            else filteredPeople[j].firstName[0].toUpperCase();
        }
    }
    if (matchingLName < 1){
        return filteredPeople;
    }
    else return matchingLName;
}






/* let declaredAttributesArray = declareAttributes(input);
filteredPeople = searchByGender(declaredAttributesArray);
filteredPeople = searchEyeColors(declaredAttributesArray);
filteredPeople = searchByOccupation(declaredAttributesArray);
filteredPeople = searchByDOB(declaredAttributesArray);
filteredPeople = searchByHeight(declaredAttributesArray);
filteredPeople = searchByWeight(declaredAttributesArray);
filteredPeople = searchByID(declaredAttributesArray);
filteredPeople = searchByFirstName(declaredAttributesArray);
filteredPeople = searchByLastName(declaredAttributesArray);
console.log(filteredPeople)
if (filteredPeople.length == 1){
    spamFillTable(filteredPeople)
}else GenerateTable(); */













// let tags = ["id", "firstName", "lastName", "gender", "dob", "height", "weight", "eyeColor", "occupation", "parents", "currentSpouse"]



    function GenerateTable(filteredPeople) {
        //Build an array containing Customer records.
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
        //Get the count of columns.
        var columnCount = 1;
 
        //Add the header row.
        var row = table.insertRow(-1);
  
        //Add the data rows.
        for (var i = 0; i < filteredPeople.length; i++) {
          
            //row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = "ID: "+filteredPeople[i].id + "\n " +"Full Name:\n"+ filteredPeople[i].firstName+" "+filteredPeople[i].lastName+"\n"+"Sex: "+filteredPeople[i].gender+"\n "+"DOB: "+filteredPeople[i].dob+"\n "+"Height: "+filteredPeople[i].height+"\n "+"Weight: "+filteredPeople[i].weight+"\n "+"Eye Color: "+filteredPeople[i].eyeColor+"\n "+"Job: "+filteredPeople[i].occupation+"\n "+"Parents: "+filteredPeople[i].parents[0]+" \n"+filteredPeople[1].parents[1]+"\n"+"Spouse: "+filteredPeople[i].currentSpouse
               
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