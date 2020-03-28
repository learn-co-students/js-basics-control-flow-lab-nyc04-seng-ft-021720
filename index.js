function scuberGreetingForFeet(rideDistance){
  let result
  if (rideDistance <= 400) {
    result = "This one is on me!"
  }
  else if (rideDistance > 2500) {
    result = "No can do."
  }
  else if (rideDistance > 2000) {
    result = "I will gladly take your thirty bucks."
  }

  return result
}

function ternaryCheckCity(city){
  let response = (city == "NYC") ? "Ok, sounds good." : "No go."
  return response
}

function switchOnCharmFromTip(tip){
  let response
  if (tip == "generous"){
    response = "Thank you so much."
  }
  else if (tip == "not as generous"){
    response = "Thank you."
  }
  else {
    response = "Bye."
  }
  return response
}