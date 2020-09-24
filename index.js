function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  let i = 0
  if(line.length = 0) {
    return "The line is currently empty."
  } else {
    return `Currently serving ${line[i]}.`
  }
  line.shift()
}
