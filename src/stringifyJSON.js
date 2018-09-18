// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
inputs: 7 -> "7"
hi -> "hi"
true -> "true"
["a", "b"] -> "["a", "b"]"
{a:2, b:4} -> "{"a":2, "b":4}"    '"' + obj + '"'

"[" += + "]"
for objects
outputs: the object in a string
constraints: use recursion

strategy:
identify what the object is
  if it's an a string, boolean, number
     return "" + obj + "";
  if it's an array via Array.isArray(obj)
    return "[" + obj + "]";
  if it's an object
    implement recursion
*/


//dont forget undefined, null, function
// var stringifyJSON = function(obj) {
//   if (typeof obj === "number" || typeof obj === "boolean") {
//     return obj.toString()
//   } 
//   if(typeof(obj) === "string"){

//   }
//   if (Array.isArray(obj)) {
//     let arr = [];
//     for(var i =0; i < obj.length; i++){
//       arr.push(stringify(obj[i]));
//     }
//     return "[" + arr + "]";
//   } else if (typeof obj === "object"){
//     let bracket = '{'
//     for (var prop in obj) { 
//       bracket += (stringifyJSON(prop) + ':' + obj[prop] + ',') ; 
//     } 
//     let arr = Array.from(bracket);
//     arr.splice(arr.length-1,1);
//     let final = arr.join("")
//     return final +'}'
//   }
// };
var stringifyJSON = function(obj) {
  if (obj === undefined) {
    return undefined;
  }

  if (obj === null) {
    return "null";
  }

  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }

  if (typeof obj === "string") {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    let firstElement = "[";
    let lastIndex = obj.length-1;
    if (obj.length > 0) {
      for (let i = 0; i < obj.length; i++) {
        firstElement += stringifyJSON(obj[i]);
        if (i !== lastIndex) {
          firstElement += ","; 
        }
      }
      return firstElement + "]";
    } else {
      return "[]"
    } 
  }
  
  //{one: 1, two: 2, three: 3}
  if (typeof obj=== "object") {
    var firstBracket = "{";
    var objectKeys = Object.keys(obj); //"one", "two", "three"
        //ˆ places every property key in the object in an array
    var lastIndex = objectKeys.length-1;
    if (objectKeys.length > 0) {
      for (var i = 0; i < objectKeys.length; i++) {
        if (obj[objectKeys[i]] === undefined || typeof obj[objectKeys[i]]  === 'function') {
          return '{}';
        }
        firstBracket += stringifyJSON(objectKeys[i]) + ":" + stringifyJSON(obj[objectKeys[i]]);
        if (i !== lastIndex) {
          firstBracket += ",";
        }
      }
      return firstBracket + "}";
    } else {
      return "{}";
    }
  }
};
stringifyJSON({a:1, b:2})

