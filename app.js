'use strict';
let tagArray = ["id", "firstName", "lastName", "gender", "dob", "height", "weight", "eyeColor", "occupation", "parents", "currentSpouse"]



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
            document.getElementById("alertUnknown").innerHTML = "We found..."
    
    }else{
        document.getElementById("alertUnknown").innerHTML = "This person is not in our records. Try another name."

        
    }
}

document.getElementById("id").innerHTML = filteredPeople[0].id
document.getElementById("firstName").innerHTML = filteredPeople[0].firstName


   
//comment dksjfasd;fjdsa;lfjsa;d dsfdgdsdfsghgsfghdsfafdsaf