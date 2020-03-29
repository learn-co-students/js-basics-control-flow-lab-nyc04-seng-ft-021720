function scuberGreetingForFeet(feet){
  if (feet > 2000 && feet < 2500) return 'I will gladly take your thirty bucks.';
  else if (feet <= 400) return "This one is on me!";
  else if (feet > 2500) return 'No can do.';
}

// let value
//   if (feet >= 2000) {
//     value = 'I will gladly take your thirty bucks.';
//     return value
//   } else if (feet <= 400) {
//     value = "This one is on me!";
//     return value
//   } else if (feet > 2500) {
//     value = 'No can do.';
//     return value
//   }
// function scuberGreetingForFeet(feet){
//   switch (feet) {
//     case feet > 2500
//       return 'No can do.';
//       break;
//     case feet > 2000
//       return 'I will gladly take your thirty bucks.';
//       break;
//     case feet <= 400
//       return 'This one is on me!';
//       break;
//   }
// }

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}