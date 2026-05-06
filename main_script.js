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
console.log("running")
let newPlayer = "Cat"
function cat(){
  console.log("cat");
}

function dog() {
  firebase.database().ref('/message').set(
    {
      dog: 'bark'
    }
  )
}
function complexWrite() {
  firebase.database().ref('/').set(
    {
    game_score: {
    players: {
      BingBong:{
        low_score: 12
        high_score: 22
      },
      Mr_Anderson: {
        low_score: 15
        high_score: 25
      } ,
      Toby_ashton: {
        low_score: 5
        high_score: 15
      },
      T_rex: {
        low_score: 4
        high_score: 5
      },
    }
  }
  }
  );
  
  firebase.database()ref('/game_score/players/' + newPlayer).set({
        low_score: 3
        high_score: 4
}
  
)}
function simpleRead() {
  console.log("| Running simpleRead...")
  firebase.database().ref('/message').once('value', display)


}
function safeRead() {
  console.log("| Running safeRead...")
  firebase.database().ref('/message').once('value', displaySafe, fb_readError)


}
function listen() {
  console.log("| Running safeRead...")
  firebase.database().ref('/message').on('value', displaySafe, fb_readError)
}


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

function fb_readError(error) {
  console.log("There was an error reading the message")
  console.error(error)
}



