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

/// Dude, I worked from the time you left until... 8pm school time...
/// I COULDN"T GET CRAP TO WORK and i do not know why!? But finally got this working
/// and it's not even complicated and dont understand what I had been doing wrong the whole time.
/// sorry I didnt get much done.. super stressful, lol.
/// Anyways, I can continue to work on searching by attribute tomorrow..
/// The main issue is... if a search returns multiple matches, like gender.
/// trying to figure out, how can I store multiple objects and present them all to the page?
/// using a table seems like a major pain in the butt.... because how many rows you need is variable.
/// I know it looks like I did nothing, lol.. But that's because, I honestly got stuck on a problem
/// for like 4-5 hours and couldn't figure it out no matter what I tried...
/// anyways... i'll see you tomorrow and we can talk more. 
/// ALso, check this out....
/// https://getbootstrap.com/docs/5.0/forms/input-group/
///
///   Check out "Buttons with Dropdowns" 
///  I wanted to use it, and each drop down could give 1 attribute...
/// the only problem is.. how do you capture the variable input into variable IDs?
/// like if they put DOB, it needs to return idyNum, if they enter 9/5/1951 it needs to return ID "DOB"
/// I thought maybe you could use the href="#" part to do that, but... idk i couldn't figure it out.
///  You can delete all this green text after you read, also...
/// you can delete any of the work I did after you left if you need. 






































/// PUT ALL FUNCTIONS BELOW SO THE CODE UP TOP LOOKS BRIEF AND ORDERLY------REDUCE CLUTTER ABOVE------


function FillTable(filteredPeople){
    document.getElementById("id").innerHTML = filteredPeople.id
    document.getElementById("firstName").innerHTML = filteredPeople.firstName
    document.getElementById("lastName").innerHTML = filteredPeople.lastName
    document.getElementById("gender").innerHTML = filteredPeople.gender
    document.getElementById("dob").innerHTML = filteredPeople.dob
    document.getElementById("height").innerHTML = filteredPeople.height
    document.getElementById("weight").innerHTML = filteredPeople.weight
    document.getElementById("eyeColor").innerHTML = filteredPeople.eyeColor
    document.getElementById("occupation").innerHTML = filteredPeople.occupation
    document.getElementById("parents").innerHTML = filteredPeople.parents
    document.getElementById("currentSpouse").innerHTML = filteredPeople.currentSpouse
}

function spamFillTable(){
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
