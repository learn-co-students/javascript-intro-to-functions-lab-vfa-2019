function shout(string) {
  return string.toUpperCase() ;
}
function whisper(string) {
  return string.toLowerCase() ;
}
function logShout(string) { // doesn't call spy with 'HELLO'
  console.log('hello') ;
  spy('HELLO')
  return string.toUpperCase() ;
}
function logWhisper(string) { 
  console.log('hello') ;
  return string.toLowerCase() ;
}
function sayHiToGrandma(string) {
  if (string='hello') // yes
  {
    return "I can't hear you!" ;
  }
  else if (string='HELLO') // no
  {
    return "YES INDEED!" ;
  }
  else if (string='I love you, Grandma.') // no
  {
    return "I love you, too." ;
  }
}