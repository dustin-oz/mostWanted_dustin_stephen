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

        spamFillTable(filteredPeople);
        document.getElementById("alertUnknown").innerHTML = "We found..."
    
    }else{
        document.getElementById("alertUnknown").innerHTML = "This person is not in our records. Try another name."

       
    }
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



///  this above i'm trying to work with from this site
//   https://www.aspsnippets.com/Articles/Create-dynamic-Table-in-HTML-at-runtime-using-JavaScript.aspx



//   cell.innerHTML = people[i].id + " " + people[i].firstName+" "+people[i].lastName+" "+people[i].gender+" "+people[i].dob+" "+people[i].height+" "+people[i].weight+" "+people[i].eyeColor+" "+people[i].occupation+" "+people[i].parents+" "+people[i].currentSpouse


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
