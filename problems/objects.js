/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} appleCountByName
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = (appleCountByName) => {
  return appleCountByName["Eve"];
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name. Return the number
 * of apples that the person passed in has.
 * If the person does not exist in the object it should return 0.
 * @param {Object} appleCountByName
 * @param {string} name - name of person
 * @returns {number} The number of apples name has.
 *
 * Is there a difference between using string notation vs
 * bracket notation? Try them both.
 */

const appleCount = (appleCountByName, name) => {
    return appleCountByName[name];
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Also takes in a new number of apples for Eve.
 * Reassign her number of apples to the new value and then return
 * the original object.
 *
 * @param {Object} appleCountByName
 * @param {number} appleCount - new number of apples
 * @returns {Object} The updated object.
 */

const eveAppleSet = (appleCountByName, appleCount) => {
  appleCountByName["Eve"] = appleCount
  return appleCountByName
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name, and the argument newAppleCount.
 * Update the object to have the name pointing to the newAppleCount
 * @param {Object} appleCountByName - apple object with names and numbers
 * @param {string} name - name of person
 * @param {number} newAppleCount - number of apples
 * @returns {Object} The updated object.
 *
 */

const appleSet = (appleCountByName, name, newAppleCount) => {
  appleCountByName[name] = newAppleCount
  return appleCountByName
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Should return the total number of apples for Adam and Eve.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Sum of Adam and Eve's apples.
 *
 */

const adamAndEveApples = (appleCountByName) => {
  return appleCountByName["Eve"]+ appleCountByName["Adam"];
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Returns the sum of all apples
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Total number of all apples
 *
 */

const appleSum = (appleCountByName) => {
  let total = 0;
  for(let value in appleCountByName) {
    total += appleCountByName[value];
  }
  return total
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {Object} Object with values set to zero.
 *
 */

const appleSetToZero = (appleCountByName) => {
  for(let value in appleCountByName) {
    appleCountByName[value] = 0;
  }
  return appleCountByName
};

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {string} Capital of Russia
 */

const russiaCapital = (capitalByCountry) => {
  return capitalByCountry["Russia"]
};

/**
 * Takes in an object of countries and their capitals.
 * Takes in a country
 * Return the capital of country given.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @returns {string} Capital of country
 */

const getCapital = (capitalByCountry, country) => {
  return capitalByCountry[country];
};

/**
 * Takes in an object of countries and their capitals
 * and adds the key value pair "Jamaica" and "Kingston"
 * Return the original object.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {Object} countriesAndCapitals now with Jamaica
 */

const addsJamaica = (capitalByCountry) => {
  capitalByCountry["Jamaica"] = "Kingston"
  return capitalByCountry
};

/**
 * Takes in an object of countries and their capitals
 * and a country and capital. The country and capital should be
 * added to the object.
 * Return the original object.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @param {string} capital
 * @returns {Object} countriesAndCapitals
 */

const addsCountry = (capitalByCountry, country, capital) => {
  capitalByCountry[country] = capital
  return capitalByCountry
};

/**
 * Takes an array of arrays. First element of inner array is authorName, second element
 * of inner array is score.
 * Return an object where the keys are the authorNames and
 * the values are the scores.
 * @param {Array[]} authors - array of arrays [["Mark Twain", 8.9], ["Nathaniel Hawthorne", 5.1]]
 * @returns {Object} {"Mark Twain": 8.9, "Nathaniel Hawthorne": 5.1}
 */

const authorScores = (authors) => {
    let object = {}
    for (let i=0; i < authors.length; i++){
      let element = authors[i]
      //let element[0]= Mark Twain
    object[element[0]]=element[1]
    }
    return object
};

/**
 * You are given an array of objects.
 * Each object in the array describes a submission with a firstName, lastName, and score.
 * Find the person with the best score and return their full name.
 * @param {Object[]} submissions - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

const bestScore = (submissions) => {
  let bigScore = - Infinity
  let fullName = ""
  for (let i=0; i < submissions.length ; i+=1){
    let element = submissions[i]
    if (element.score > bigScore){
      bigScore = element.score
      fullName = element.firstName + " " + element.lastName
    }
  }
  return fullName
};

/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = (obj) => {
  let object ={}
  for (let i=1; i <=20; i++){
    object[obj]= i*i*i
    //Math.pow(2(index),3(power)) || exponent(i**3)
  }

  return object
};

/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's contained in the string
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

const countAandE = (str) => {
let obj={}
obj.a = 0
obj.e = 0
for (let i=0; i < str.length; i++){
  if (str[i].toLowerCase()==="e"){
    obj.e ++ 
  }else if (str[i].toLowerCase()==="a"){
    obj.a ++ 
  }
}
  return obj
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = (str) => {
  let obj = {}
  str = str.toLowerCase()
  for (let i=0; i < str.length; i++){
    if(obj[str[i]]===undefined){
      obj[str[i]]=1
      
    }else{
      obj[str[i]]++
    }
  }
  return obj
 
  //if str[i] is not in the object add the pair
  //else add 1
  //(how do you key into an object "value"  str.key or str["key"])
  //(how would you change the value str.key = apple reassigning and changing the value )
  //ex str.a = 3

};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

  const countOccuranceNoSpaces = (str) => {
let counts= {}
let splitStr = str.split("")

splitStr.forEach((char) => {
  let Char = char.toLowerCase()
  if (Char !== " "){

    if (counts[Char]){
      counts[Char]++
    }else{
      counts[Char]= 1
    }
  }
})
return counts
};

/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = (array) => {
let count={}
array.forEach((elem) => {
  if (count[elem]!==undefined){
    count[elem]++
  }else{
    count[elem]= 1

  }
})
console.log(count)
let max=0
let element= null

for (let key of array){

  //key into an array is of  // and keying into an object is in 
  // when keying into an array we are looking through the index and are able to recieve a number
  // but with objects we can only key into a string.
  if (count[key] > max){
    max = count[key]
    element = key
  }
  
}
console.log(element)
return element
}
console.log(mostCommonElement([2, 1, 1, 1, 3, 2]))
/**
 * Takes in an object and an array.
 * Returns a new array.
 * If the element in the array is a key in the object, the new
 * array should have its value in its place. Otherwise it should use the array element.
 *
 * Exp Input:
 * {"Ed Sheeran": "guitar", "Ray Charles": "piano"}
 * ["Ed Sheeran", "John Lennon", "Ray Charles"]
 *
 * Output:
 * ["guitar", "John Lennon", "piano"]
 *
 * @param {Object} pairs
 * @param {string[]} arr
 * @returns {string[]} Elements or their pair values.
 */

const updateList = (pairs, arr) => {
  let newArr = []
  arr.forEach((singer) =>{
    if (pairs[singer]=== undefined){
      newArr.push(singer)
     }else{
        newArr.push(pairs[singer])
      }
      // if (pairs[singer]){
  //  }
    })
    return newArr
}


/**
 * Takes in an object and a key.
 * It should delete the key value pair from the object and
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key.
 */

 const deleteKey = (obj,key) => {
  delete obj[key]
  return obj
 };


 /**
  * Takes in an object and returns the number of
  * properties it has.
  * @param {Object} obj
  * @returns {number} Number of properties.
  */
 const propertyCount = (obj) => {
  let count = 0
  for(let key in obj){
    count += 1
  }
  return count
 }

module.exports = {
  eveAppleCount,
  appleCount,
  eveAppleSet,
  appleSet,
  adamAndEveApples,
  appleSum,
  appleSetToZero,
  russiaCapital,
  getCapital,
  addsJamaica,
  addsCountry,
  authorScores,
  bestScore,
  cubeObj,
  countAandE,
  countOccurance,
  countOccuranceNoSpaces,
  mostCommonElement,
  updateList,
  deleteKey,
  propertyCount,
};
