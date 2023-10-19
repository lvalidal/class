class Human{

name ;
surname ;
#birthYear ; 
birthplace



constructor(name, surname, birthYear, birthplace, ) {

    this.name = name ;

    this.surname = surname ;

    this.#birthYear = birthYear ;

    this.birthplace = birthplace ;

}


getFullName(){

    return (this.name + " " + this.surname) ;
}



getAge() { 
    
    var today = new Date();
    var age = today.getFullYear() - this.#birthYear.getFullYear();
    return age;
}


get age() {

    return this.getAge() ;
}

get fullname() {

    return this.getFullName() ;
}




}


class User extends Human{

    constructor(name, surname, birthYear, birthplace, username, email, password , isLogged = false )  {

        super(name, surname, birthYear, birthplace) ;

        this.username = username ;

        this.email = email ;

        this.password = password ; 

        this.isLogged = isLogged ;

        this.check = function() {    
            if (this.check !== this.password || this.check !== this.username ) {    
              
                alert('wrong password or username !') ;
            }
            else {
              alert(`welcome back , ${(this.name + ' ' + this.surname)}`)
            }

    }


    
}


logOut() {

    if( this.isLogged === true) {


        alert( ' you logged out successfully !')
    }

    else {

        alert( "you didn't login!")
    }
}

}


let human1 = new Human( 'Valida' , 'Mammadova' , )