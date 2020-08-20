var database;
var form;
var user;
var peopleCount=0;

function setup() {
  createCanvas(700, 900);
  database = firebase.database();
  form = new Form();
  form.display();
  User = new UserData();
  User.getCount();
 
}

function draw() {
  background("lightblue");
  
}