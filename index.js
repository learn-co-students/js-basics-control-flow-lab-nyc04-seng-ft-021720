function scuberGreetingForFeet(distance){
  let response
  if (distance <= 400) {
    response = "This one is on me!"
  } else if (2000 < distance && distance< 2500) {
    response = "I will gladly take your thirty bucks."
  } else {
    response = "No can do."
  }
  return response
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  let response
  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.'
      break;
  }
   response
}