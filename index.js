function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue >= 2500) {
    return 'No can do.';
  } else if (someValue >= 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  const driverResponse = cityName === "NYC" ? 'Ok, sounds good.' : 'No go.';
  return driverResponse;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
  }
}