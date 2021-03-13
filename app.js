'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
} 


// Generates table and fills with data from const people
function hafniumTable(data){
    var table = document.getElementById('myTable');
    for (var i=0; i < data.length; i++) {
        var row = `     <tr> 
                        <td>${data[i].id}</td>
                        <td>${data[i].firstName}</td>
                        <td>${data[i].lastName}</td>
                        <td>${data[i].gender}</td>
                        <td>${data[i].dob}</td>
                        <td>${data[i].height}</td>
                        <td>${data[i].weight}</td>
                        <td>${data[i].eyeColor}</td>
                        <td>${data[i].occupation}</td>
                        <td>${data[i].parents}</td>
                        <td>${data[i].currentSpouse}</td>
                </tr>`;
            table.innerHTML += row;
    }
}
//hafniumTable(people);
// End generate table

// Hide Table
function clearHafniumTable() {
    document.getElementById('myTable').style.visibility = "hidden";
}

//Search By Key Word Inputs
function searchByKeyWord(){

    let userInput = document.forms["keyWordForm"]["keyWords"].value  
    
    
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
        hafniumTable(filteredPeople)

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


    





/* function spamFillTable(filteredPeople){
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

 */





