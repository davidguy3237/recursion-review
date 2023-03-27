// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj);
  //var output = '';

  if (typeof obj === 'function') {
    return;
  }

  if (obj === undefined) {
    return;
  }

  if (obj === null) {
    return ('null');
  }

  if (typeof obj === 'boolean') {
    if (obj === true) {
      return ('true');
    }
    return ('false');
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {

    var output = '';

    output += '[';


    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON(obj[i]);
      output += ',';
    }
    output += ']';
    output = output.replace(',]', ']');

    return (output);
  }

  else if (typeof obj === 'object') {
    var output = '';
    output += '{';


    for (const key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }

      output += '"' + key + '"';
      output += ':';
      output += stringifyJSON(obj[key]);
      output += ',';
    }



    output += '}';
    output = output.replace(',}', '}');
    return (output);
  }

  return output;
};
