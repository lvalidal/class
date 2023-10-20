//-----28-----



// let arr = [1,3,5,7];

// let x = Math.sqrt(arr);

// let modifiedArr = arr.map(function(element){
//     return element * element;
// });

// console.log(modifiedArr);



//-------------------------------------------------------




//-----29-----

// let arr = [1,3,5,7 ];


// Array.prototype.sum = function(){
// 	var myResult = 0;

	

// 	for (let i = 0; i < this.length; i++) {

//         if(this[i] > 0) {

//             myResult += this[i];
//         }
		
// 	}

// 	return myResult;
// }

// console.log(arr.sum())


//------------------------------------------------


//-----30-----

// let array = [ 5, 8 , 9, 7, 4 ] ;


// Array.prototype.all = function() {


//     array.sort()

//     let max = array[array.length - 1]

//     let min = array[0]


//     let a = ((max + min) / 2)

// 

//var myResult = 0;

	

// 	for (let i = 0; i < this.length; i++) {

//             myResult += this[i];

// 	}

// 	let b = (myResult / this.length);


//     return ( ` median = ${a}, ededi orta = ${b}`)
// }


// console.log(array.all())


//----------------------------------------------------------


//-----31------


// const text = "This is an experimental text for my uni task".split(' ').map(text => text[0]).join('');
// console.log(text)

//------------------------------------------------------------------------------------------------------------


let text = 'This is an experimental text writing for my uni task'


String.prototype.noLong = function() {



    if( this.split(' ').length < 4) {


        return this 
    }


    else {

        
    }
}




