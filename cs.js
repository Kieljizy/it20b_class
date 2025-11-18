function LegalAge(age){

    if (age >=18){
        console.log("you are an adult");
    }else{
        console.log("you are not an adult");
    }
    
}

LegalAge(69);

function computerGrade(grade){
    
    if(grade >=94.5){
        console.log("1");

    }else if(grade >=91.5){
        console.log("1.25");

    }else if(grade >=89.5){
        console.log("1.5");

    }else if(grade >=86.5){
        console.log("1.75");
    }else if(grade >=84.5){
         console.log("2");

    }else{
        console.log("not within the transmutation");
}
}

computerGrade(87);

function login(username, password){

    if(username === "aaron"){
        console.log("Welcome User");

        if (password === 1234){

        }else{
            console.log("Invalid Login Credentials");

        }
    } else {
        console.log("Invalid User");
    }
}

login(aaron,1234)

function ticketPrice(Age){
    if (age <18){
        if (age < 5){
        console.log("Ticket: Free");
    } else {
        console.log("Ticket: Child Price");
    }
} else {
    if (age >=60){
        console.log("Ticket: Adult Price");
    }
}
}

ticketPrice()