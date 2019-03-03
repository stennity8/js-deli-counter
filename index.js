function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

//My Solutions

function takeANumber(currentLine, name){
  currentLine.push(name);

  let position = currentLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}


function nowServing(currentLine) {
  let firstPerson = currentLine[0];

  if(currentLine.length === 0){
    return `There is nobody waiting to be served!`;
  } else {
    currentLine = currentLine.splice(0,1);
    return `Currently serving ${firstPerson}.`;
  }
  return currentLine;
}


function currentLine(line){
  let list = '';
  for (let i = 1; i <= line.length; i++){
    let name = line[i - 1];
    list += `${i}. ${name}, `;
  }
  list = list.slice(0, -2);
  if(line.length === 0){
    return `The line is currently empty.`
  } else{
    return `The line is currently: ${list}`;
  }
}
