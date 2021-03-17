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
                        <button type="button" onclick="displayLineage(${data[i].id})"> Find Descendants </button>
                        <button type="button" onclick="findImmediateFamily(${data[i].id}, ${data[i].parents[0]}, ${data[i].parents[1]})"> Find Immediate Family </button>
                </tr>`;
            table.innerHTML += row;
    }
}





//hafniumTable(people);
// End generate table

/* document.getElementById("nameForm")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("formButton").click();
    }
});
 */
// I delted nameForm so this isn't necessary anymore.


// Hide Table
// function clearHafniumTable() {
//     document.getElementById('myTable').style.visibility = "hidden";
// }

//Search By Key Word Inputs
function searchByKeyWord(){
    let userInput = document.forms["keyWordForm"]["keyWords"].value  
    let filteredPeople = people;
    let declaredAttributesArray = userInput.split(" ");

    filteredPeople = searchByGender(declaredAttributesArray, filteredPeople);
    filteredPeople = searchEyeColors(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByOccupation(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByDOB(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByHeight(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByWeight(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByFirstName(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByLastName(declaredAttributesArray, filteredPeople);
    filteredPeople = searchByID(declaredAttributesArray, filteredPeople);
    filteredPeople = findRelatives(declaredAttributesArray, filteredPeople);
    filteredPeople = filterDuplicates(filteredPeople);
    if (filteredPeople.length == 22){
        alert("No match")   
    }
    
    else if (filteredPeople.length > 1){ 
        hafniumTable(filteredPeople)   
    }
    else hafniumTable(filteredPeople)

}

// function findLineage(parentID){
//     let filteredPeople = [];
//     for (let i = 0; i < people.length; i++){
//         if (parentID == people[i].id){
//             filteredPeople.push(people[i]);
//         }
//     }
    
//     filteredPeople = searchByID(parentID, filteredPeople);
//     filteredPeople = matchChildToParents(filteredPeople);
//     filteredPeople = findSiblings(filteredPeople);
//     filteredPeople = matchChildToParents(filteredPeople);
//     filteredPeople = filterDuplicates(filteredPeople);
//     hafniumTable(filteredPeople);

// }

// replaced the above function for a recursive one.




function findImmediateFamily(rootID, parent1, parent2){
    let immediateFamily = [];
    let parents = [];
    parents.push(parent1);
    parents.push(parent2);
    for (let i = 0; i < people.length; i++){


        //find wife
        if (rootID == people[i].currentSpouse){
            immediateFamily.push(people[i]);
        }
        // find children
        if (rootID == people[i].parents[0] || rootID == people[i].parents[1]){
        immediateFamily.push(people[i]);
         }
         // fing siblings or parents
        if (typeof parents[0] != 'undefined' && parents.length > 0){

            if (parents[0] == people[i].parents[0] || parents[0] == people[i].id){
                immediateFamily.push(people[i])
            }
    
            if (parents.length > 1 && typeof parents[1] != 'undefined'){
                if (parents[1] == people[i].parents[1] || parents[1] == people[i].id){
                    immediateFamily.push(people[i])
                }
    
            }

        }
        

    }
    immediateFamily = filterDuplicates(immediateFamily);
    hafniumTable(immediateFamily);

}





function displayLineage(parents){
    let parent = [];
    parent.push(parents);
    let lineage = findDescendants(parent);
    if (lineage.length < 1){
        alert("No descendants")   
    }
    else hafniumTable(lineage);
}
 

// BONUS RECURSION BELOW

function findDescendants(parent){
let descendants = [];
    if (parent.length > 0){
        if (parent[0].id == undefined){
            for (let i = 0; i < people.length; i++){
                if (parent == people[i].parents[0] || parent == people[i].parents[1]){
                    descendants.push(people[i]);

                }

            }
            findDescendants(descendants);
        }
    }
    else {
        let j = 0;
        while (j < parent.length){
            for (let z = 0; z < people.length; z++){
                if (parent[j].id == people[z].parents[0] || parent[j].id == people[z].parents[1]){
                    parent.push(people[z]);

                }

            }
            j++;
        }
    
    
        descendants.concat(parent);
    }
    return descendants;
    
}





function findRelatives(declaredAttributesArray, filteredPeople){
    
    for (let i = 0; i < declaredAttributesArray.length; i++){
        if (declaredAttributesArray[i].includes("parents")){
            filteredPeople = matchChildToParents(filteredPeople);
        }
        //there are no sibling tags, so you have to search parents first to find matching children.
        if (declaredAttributesArray[i].includes("brothers") || declaredAttributesArray[i].includes("sisters") || declaredAttributesArray[i].includes("siblings")){
            filteredPeople = matchChildToParents(filteredPeople);
            filteredPeople = findSiblings(filteredPeople);
        }
        if (declaredAttributesArray[i].includes("spouse") || declaredAttributesArray[i].includes("wife") || declaredAttributesArray[i].includes("husband")){
            filteredPeople = findSpouse(filteredPeople);
        }
        if (declaredAttributesArray[i].includes("family") || declaredAttributesArray[i].includes("relatives")) {
            filteredPeople = findSpouse(filteredPeople);
            filteredPeople = matchChildToParents(filteredPeople);
            filteredPeople = findSiblings(filteredPeople);
            filteredPeople = findSpouse(filteredPeople);
            filteredPeople = matchChildToParents(filteredPeople);
            filteredPeople = findSiblings(filteredPeople);
            filteredPeople = findSpouse(filteredPeople);
            filteredPeople = matchChildToParents(filteredPeople);

        }
        

    }
    return filteredPeople;


} 

function findSpouse(filteredPeople) {
    let family = [];
    let bastards = [];
    for(let j = 0; j < filteredPeople.length; j++) {
        for (let i = 0; i < people.length; i++){
           
            if (filteredPeople[j].currentSpouse == people[i].id){
                console.log(people[i].parents[0]);
                family.push(people[i]);
            }
            else bastards.push[people[i]]
      
        }

    }
    return family.concat(filteredPeople);
        
    

}


function findSiblings(filteredPeople) {
    let family = [];
    let bastards = [];
    for(let j = 0; j < filteredPeople.length; j++) {
        for (let i = 0; i < people.length; i++){
           
            if (filteredPeople[j].id == people[i].parents[0]){
                console.log(people[i].parents[0]);
                family.push(people[i]);
            }
            if (filteredPeople[j].id == people[i].parents[1]){
                console.log(people[i])
                family.push(people[i])
            }
            else bastards.push[people[i]]
        }
    }
    return family.concat(filteredPeople);       
}




function matchChildToParents(filteredPeople) {
    let family = [];
    let bastards = [];
    for(let j = 0; j < filteredPeople.length; j++) {
        for (let i = 0; i < people.length; i++){
           
            if (filteredPeople[j].parents[0] == people[i].id){
                console.log(people[i].parents[0]);
                family.push(people[i]);
            }
            if (filteredPeople[j].parents[1] == people[i].id){
                console.log(people[i])
                family.push(people[i])
            }
            else bastards.push[people[i]]
        }
    }
    return family.concat(filteredPeople);      
}


function filterDuplicates(filteredPeople){
    let removedDupes = [...new Set(filteredPeople)];
    return removedDupes;
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
    if (matchingJobs.length > 0){
        return matchingJobs;
    }
    else return filteredPeople;       
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
    if (matchingID.length < 1){
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
    if (matchingFName.length < 1){
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
    if (matchingLName.length < 1){
        return filteredPeople;
    }
    else return matchingLName;
}
