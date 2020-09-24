function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
var n = []
  if(line.length == 0) {
    n.push("There is nobody waiting to be served!")
  } else {
    n.push(`Currently serving ${line.shift()}.`)
  }
  return n
}

function currentLine(line) {
var n = []
  if(line.length == 0) {
    n.push("The line is currently empty.")
  } else {
    let num = []
    let order = `1. ${line[0]}`
    for (let i = 0; i < line.length; i++) {
      order = order + `, ${i+1}. ${line[i]}`
     n.push(`The line is currently: ${order}`);
      }
    }
    return n
}
