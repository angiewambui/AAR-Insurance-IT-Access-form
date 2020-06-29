// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").toggle();
//     });
//   });
  $(document).ready(function(){
    $("button").click(function(){
      $("form").animate({
        height: 'toggle'
      });
    });
  }
  // function Getuserinfo(Name,Department,Jobtitle,Email,Personal ,Phone){
// this.Name = name;
// this.Department = Department;
// this.Jobtitle = Jobtitle;
// this.Email = Email;
// this.Personal  = Personal ;
// this.Phone = phone ;
// }


function getInfo()
{
  //to get userinfo
var name = document.getElementById("name").value
var NN = parseInt(name);
var department = document.getElementById("dp").value;
var DD = parseInt(department);
var jobTitle = document.getElementById("jt").value
var JT = parseInt(jobTitle);
var email = document.getElementById("email").value
var EM = parseInt(email);
var personalNo = document.getElementById("pn").value
var PP = parseInt(personalNo);
var phoneNo = document.getElementById("phone").value
var PP = parseInt(phoneNo);

//to get user access requirments
var userS = document.getElementById("permanent")
var