const drivers = [ "Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) { 
  drivers.push(name)
  return drivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  return drivers
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
  return drivers
}