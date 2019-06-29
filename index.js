function shout(string) {
  return string.toUpperCase ()
}
function whisper(string) {
  return string.toLowerCase ()
}
function logShout (string) {
  console.log('HELLO')
}
function logWhisper (string) {
  console.log('hello')
}
var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase // false
mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string) {
if(lowercase) { return 'I can\'t hear you!'}
else if(uppercase) { return 'YES INDEED!'}
  else if (mixedCase) {return 'I love you, too.'}
}