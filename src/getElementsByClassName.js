// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
  inputs: a string
  outputs: an array
  constraints: use recursion
  basecase: when we find a element that has the className push that element to the array?
  recursive case: when we find an element that has children, recurse on that child

  Strategy
  create an empty array
  select the body. document.body
  if the body has children,
    for every child
  if has the className
    basecase


  Angela's idea !!!
  create an empty array
  <p>Hi</p>
  <h1 class= wlkje;rlkjw >Howdy</h1>
  Array.from(node.classList)
 ['hi', 'Howdy']
  
  
*/
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var arr = [];
  if(node === undefined){
    node = document.body;
  }
  if(node.classList && node.classList.contains(className)){
    arr.push(node)
  }
  for(var i = 0; i < node.childNodes.length; i++){
    var b = node.childNodes[i];
    arr = arr.concat(getElementsByClassName(className, b));
  }
  return arr;
};
getElementsByClassName('targetClassName')
