//object literal
let salon={
    name:"The Fashion Pet",
    address:{
        street:"Palomar",
        zip:"223456",
        city:"San Diego",
        number:"265-K"
    },
    hours:{
        open:"0:00 a.m.",
        close:"5:00 p.m."
    },
    phone:"555-555-555",
    pets:[]
}

function displaySalonInfo(){
    let tmp=`
    <p>Welcome to the ${salon.name} located in ${salon.address.street}</p>
    <p></p>
    `;
    document.getElementById("info").innerHTML=tmp;
    console.log("displaying");
}


//create the pet constructor
//name, age, gender, breed, service, owner, phone
function Pet(name, age, gender, breed, service, owner, phone){
    this.name=name;
    this.age=age;
    this.gender=gender
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;//*
    this.contactPhone=phone;//*
}


// creting default pets
let scooby = new Pet("Scooby",50,"Male","Grooming","Shaggy","555-555-55");
let scrappy = new Pet("Scrappy",40,"Mixed","Nails cut","Shaggy","555-555-55");

// register pets
function register(){
    console.log("Registering");
    //get the info from the inputs ***getElementById().value
    let petName=document.getElementById("txtName").value;
    let petAge=document.getElementById("txtAge").value;
    let petGender=document.getElementById("txtGender").value;
    let petBreed=document.getElementById("txtBreed").value;
    let petService=document.getElementById("selService").value;
    //create the object using the constructor
    let newPet=new Pet(petName,petAge,petGender,petBreed,petService);
    //push the object in on the array
    salon.pets.push(newPet);
    //display it on the console
    console.log(newPet);
    console.log(salon.pets);
}


function init(){
    //hook events, triggered events
    displaySalonInfo();
    salon.pets.push(scooby,scrappy);
}
window.onload=init;