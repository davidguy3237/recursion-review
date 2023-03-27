// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
[
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
]
*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;

  // body -> return []
  // child 1 -> [

  var traverseTree = function(element) {
    var elems = [];


    if (element.classList) {
      if (element.classList.contains(className)) {
        elems.push(element);
      }


      var children = element.childNodes;}

    if (children) {
      for (var i = 0; i < children.length; i++) {
        elems = elems.concat(traverseTree(children[i]));
      }
    }

    return (elems);
  };

  return (traverseTree(body));


};
