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
var stringifyJSON = function(obj) {
  if (typeof obj === "number" || typeof obj === "boolean" || typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    return "[" + obj + "]";
  } else if (typeof obj === "object"){
    let bracket = '{'
    for (var prop in obj) { 
      bracket += (stringifyJSON(prop) + ':' + obj[prop] + ',') ; 
    } 
    let arr = Array.from(bracket);
    arr.splice(arr.length-1,1);
    let final = arr.join("")
    return final +'}'
  }
};
stringifyJSON({a:1, b:2})

