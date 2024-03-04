//  Array Assignment 

// Question 1 


// let StudentNames = []
// console.log(StudentNames)




// Question 2


// let StudentNames = []




// Question 3      string Array 


// let myArray = [" Hasnain " , "ali"]

// console.log(myArray)




// Question 4      Number Array 

// let numArray = [ 10 , 20 , 30 , 40 , 50 ]
// console.log(numArray)




// Question 5     Boolean Array 

// let booleanArray = [ true , false , true , false ];
// console.log(booleanArray);



// Question 6      Mixed Array 

// let mixedArray = [ "hasnain " , "Ali" , 10  , 20 , true , false ];

// console.log(mixedArray);



// Question 7      Mobile Networks 

// let mobileNetworks = [" Zong " , " Ufone " , " Jazz " , " Warid " , " Telenor " ]

// document.write(mobileNetworks);
// console.log(mobileNetworks);
// let h1 = document.querySelector(".head").innerHTML = (mobileNetworks)



// Question 8      

// let h1 = "Qualifications"
// let head = document.querySelector(".head").innerHTML = (h1)

// let education1 = [" 1) SSC <br />" ,  " 2) HSC <br />" , " 3) BCS <br />", " 4) BS <br />", " 5) B.COM <br />", " 6) MS <br />", " 7) M.Phil. <br />", " 8) PhD <br />"]
// // console.log(education1)
// document.write(education1[0],education1[1],education1[2],education1[3],education1[4],education1[5],education1[6],education1[7])
  



// Question 9


// let topMovie = [" Top Movies of 2015"]
// let movies = document.querySelector(".movies").innerHTML = (topMovie)

// let movieslist = ["1) Avenger : Age of Ultron <br />" , " 2) Spectre <br />" , " 3) jurassic world <br />" , " 4) Inside out"]

// document.write(movieslist[0],movieslist[1],movieslist[2],movieslist[3],"<br />"," length of array :" + movieslist.length )


// Question 10 

// let h1 = "Favourite Cars"
// let head = document.querySelector(".head").innerHTML = (h1)

// let cars = ["Audi",",Volvo,","Ford,", "Lamborghini"]
// document.write(cars[0],cars[1],cars[2],cars[3] + "<br />" + "<br />")

// let indexcar1 = cars.indexOf("Audi") 
// let indexcar4 = cars.indexOf("Lamborghini") 

// document.write("First index of the array :" + indexcar1 + "<br />" )
// document.write("First index of the array :" + cars[0] + "<br />")
// document.write("First index of the array :" + indexcar4 + "<br />" )
// document.write("First index of the array :" + cars[3] + "<br />")



// Question 11


// let StudentNames = [ "Hasnain" , " Sohail " , " Shayan "]
// let score = [ 320 , 230 , 480 ]

// document.write(`Score of ${StudentNames[0]} is ${score[0]}. Precentage:  ${score[0]/500 * 100}% ` + "<br />")
// document.write(`Score of ${StudentNames[1]} is ${score[1]}. Precentage:  ${score[1]/500 * 100}% ` + "<br />")
// document.write(`Score of ${StudentNames[2]} is ${score[2]}. Precentage:  ${score[2]/500 * 100}% `)




// Question 12 ----- A  // it will add your favourite color in the beginning of Array

// let addcolor = prompt("Enter your color what you want to add in the beginning")
// let colors = ["orange" , "blue" , "silver"]
// colors.unshift(addcolor)                 
// document.write(colors.join(" ")) 



// Question 12 ----- b   // it will add your favourite color in End of Array

// let addcolor = prompt("Enter your color what you want to add in the End")
// let colors = ["orange" , "blue" , "silver"]
// colors.push(addcolor)                 
// document.write(colors.join(" ")) 



// Question 12 ----- c // it will add your favourite two colors in the beginning of Array

// let addcolor1 = prompt("Enter your first color what you want to add in the beginning")
// let addcolor2 = prompt("Enter your Second color what you want to add in the beginning")
// let colors = ["orange" , "blue" , "silver"]
// colors.unshift(addcolor1,addcolor2)            
// document.write(colors.join(" ")) 



// Question 12 ----- d  // it will delete first color in the beginning of Array

// let colors = ["orange" , "blue" , "silver"]
// colors.shift()               
// document.write(colors.join(" ")) 



// Question 12 ----- e  // it will delete last color in the End of Array

// let colors = ["orange" , "blue" , "silver"]
// colors.pop()               
// document.write(colors.join(" ")) 



// Question 12 ----- f  // it will  add the color to your desired position in index of the Array. 

// let askindex = +prompt("Enter your index number to add your color ")
// let addcolor = prompt("Enter your color to add on index number")
// let colors = ["orange" , "blue" , "silver"]
// colors.splice(askindex,0,addcolor)
// document.write(colors.join(" "))



// Question 12 ----- g  

// let colors = ["orange" , "blue" , "silver", "black" , "purple","gray"]

// let askindex = +prompt("Select from which index number you wants to delete")
// let addcolor = prompt("how many colors you want to delete")
// colors.splice(askindex,addcolor)
// document.write(colors.join(" "))




// Question 13


// let score = [320,230,480,120]
// document.write(`Scores of Students : ${score} <br />`)

// let orderedScore = score.sort()
// document.write(`Ordered Scores of Students : ${orderedScore} `)




// Question 14


// let fruitList = ["strawberry","apple","orange","banana"]
// document.write(`Fruits list : <br > ${fruitList} <br > <br >`)

// let orderedList = fruitList.sort() 
// document.write(`Ordered fruits list : <br > ${orderedList} `)



// Question 15


// let cities = [ "Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
// let selectedCiteis = cities.slice(2,4)
// document.write(`Cities Lists : <br /> ${cities} <br /> <br />`)
// document.write(`Selected Cities list : <br /> ${selectedCiteis}  `)



// Question 16

// let array = ["This","is","my","cat"]
// let string = array.join(" ")

// document.write(`Array : <br /> ${array} <br /> <br /> `)
// document.write(`String : <br /> ${string}`)


// Question 17


// let devices = [ "keyboard" , "mouse" , "printer" , "monitor"]

// document.write(`Devices : <br /> ${devices} <br /> <br /> Out: <br /> ${devices[0]} <br /> Out: <br /> ${devices[1]} <br /> Out: <br /> ${devices[2]} <br /> Out: <br /> ${devices[3]}  `)


// Question 18

// let devices = [ "keyboard" , "mouse" , "printer" , "monitor"]

// let reverse = devices.reverse() 

// document.write(`Devices : <br /> ${devices[3]}, ${devices[2]}, ${devices[1]}, ${devices[0]} <br /> <br /> Out: <br /> ${devices[0]} <br /> Out: <br /> ${devices[1]} <br /> Out: <br /> ${devices[2]} <br /> Out: <br /> ${devices[3]}  `)


// Question 19

// let select = document.querySelector(".select");

// const array = [ "Apple " , "Samsung" , "Motorola" , "Nokia" , "Sony " , "Haier"]

// select.innerHTML += `<option>${array[0]}</option> <option>${array[1]}</option> <option>${array[2]}</option> <option>${array[3]}</option> <option>${array[4]}</option> <option>${array[5]}</option>`




// Question 20


// let arrayofarray = [[],[],[]]
// console.log(arrayofarray)




// Question 21


// let matrixarray =[ [ 0,1,2,3 ] , [ 1,0,1,2 ] , [ 2,1,0,1] ]

// console.log(matrixarray)
// document.write(`Matrix Array <br /> <br /> ${matrixarray[0]} <br />  ${matrixarray[1]} <br /> ${matrixarray[2]} `)


