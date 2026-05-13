/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
/*function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora'
    }
  )
}*/
console.log("script running")

/*adding new player*/
let newPlayer = "cat"

function cat(){
  firebase.database().ref('/cat').set(
        {
      cat: 'meow'
    }
  )
console.log ("Cat Added")
}

function dog() {
  firebase.database().ref('/dog').set(
    {
      dog: 'bark'
    }
  )
  console.log ("Dog Added")
}

function complexWrite() {
  firebase.database().ref('/').set(
    {
    game_score: {
    players: {
      BingBong:{
        low_score: 12,
        high_score: 22,
      },
      Mr_Anderson: {
        low_score: 15,
        high_score: 25,
      } ,
      Toby_ashton: {
        low_score: 5,
        high_score: 15,
      },
      T_rex: {
        low_score: 4,
        high_score: 5,
      },
    }
  }
  }
  );
  
}
function clearEverything(){

  var gameScore = "game_score"
    firebase.database().ref('/').remove()
      console.log("cleared")
}

function addCat(){
    firebase.database().ref('/game_score/players/' + newPlayer).set({
        low_score: 3,
        high_score: 4,
}
  
)
}

function removeCat(){
    firebase.database().ref('/game_score/players/' + newPlayer).remove()
}

function simpleRead() {
  console.log("| Running simpleRead...")
  firebase.database().ref('/').once('value', display)


}
function safeRead() {
  console.log("| Running safeRead...")
  firebase.database().ref('/').once('value', displaySafe, fb_readError)
}


function listen() {
  console.log("| Running safeRead...")
  firebase.database().ref('/').on('value', displaySafe, fb_readError)
}


function trexScore() {
  console.log("| Running gameScoreRead...")
  firebase.database().ref('/game_score/players/T_rex/high_score').once('value', trex_display, fb_readError)
}

function gameScoreRead() {
  console.log("| Running gameScoreRead...")
  firebase.database().ref('/game_score/players').once('value', fb_gameHighScore, fb_readError)
}
function for_each_gameScoreRead() {
  console.log("| Running gameScoreRead...")
  firebase.database().ref('/game_score/players').once('value', fb_forEach_gameHighScore, fb_readError)
}
/*let names + Object.keys(dbData)
console.log name
for(i=0; i<names.length;i++)
  console.log*/

/************************** 
 displays
**********************************/




function display(snapshot) {
  console.log(snapshot.val())
}


function displaySafe(snapshot) {
  var dbData = snapshot.val();

  if (dbData == null) {
    console.log("There was no data found")
  }
  else {
    console.log("The message is", dbData, ", no errors")
  }

}
function trex_display (snapshot){
  let dbData = snapshot.val()
  console.log ("T_rex got " + dbData + ' points for their high score!')
}
function fb_gameHighScore(snapshot) {
  let dbData = snapshot.val();
  console.log("| debugging" )
  if (dbData == null) {
    console.log("There was no data found")
  }
  else {
    let names = Object.keys(dbData)

    for (let i = 0; i < names.length; i++) {
      let key = names[i];
      console.log("Player number " + i +" is "+key+". They're high score is "+dbData[key]["high_score"] + " point")
    }
  }

}

function fb_forEach_gameHighScore(snapshot) {

 
snapshot.forEach(fb_showOneScore)
  

}
function fb_showOneScore (child){
  console.log(child.val());
}

function fb_readError(error) {
  console.log("There was an error reading the message")
  console.error(error)
}



