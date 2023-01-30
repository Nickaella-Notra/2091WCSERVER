//Task Name: Prelim Lab Demos 
//Author: Nickaella Notra
//Section: WD-201

module.exports = function (firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
}