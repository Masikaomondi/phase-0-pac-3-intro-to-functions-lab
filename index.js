
function shout(string) {
  return string;
}

function shout(string)
{
  return string.toUpperCase();
}


function whisper(string)
{
  return string.toLowerCase();
}

function logShout(string)
{
  console.log(string.toUpperCase());
}

function logWhisper(string)
{
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string)
{
  //if (string.toUpperCase())
  //{
    //let word = "YES INDEED!";
    //return word;
  //}

  if (string.toLowerCase()){
    let wrd = "I can't hear you!";
    return wrd;
  } else if (string = "Let's have dinner together!"){
    let response = "i would love to!";
    return response;
  }
}


