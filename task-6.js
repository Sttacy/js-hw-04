const mood = prompt("Введіть свій настрій:");

switch (mood) {
  case "happy":
    alert("😁");
    break;
  case "sad":
    alert("😥");
    break;
  case "angry":
    alert("😣");
    break;
    default:
    alert("😐");
}
console.log(mood);
