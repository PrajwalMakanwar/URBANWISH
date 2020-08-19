var nameFlag = 0;
var phoneFlag = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("myBtn").disabled = true;
});


function validateName()
{
    var name = document.getElementById("name").value;

    if(name == "")
    {
        nameFlag = 0;
        alert("Please Enter name");
    }
    else
    {
        nameFlag = 1;
    }

    EnableSubmit();
}

function validatePhone()
{
  var first = document.getElementById("phone").value;
  var phoneno = /^\d{10}$/;
  if(first == "")
  {
      alert("Phone number is invalid");
  }
  else if((first.value.match(phoneno))
        {
            phoneFlag = 1;
        }
      else
        {
        alert("Phone number is wrong or not entered");
            phoneFlag = 0;
        }

        EnableSubmit();
}

 function validateEmail() 
{
    var email = document.getElementById("email").value;
    var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;;
    if(emailRegex.test(email) == false)
    {
        emailFlag=0; 
        console.log("No Email");
    }                   
    else
    {
        emailFlag=1;                
        console.log("Validate Email");
        
    }
        // alert('email '+emailFlag);   
        EnableSubmit();
}

function validatePassword()
{
    var password = document.getElementById("password").value;
    if(password == "")
    {
        passwordFlag = 0;
        console.log("No Password");
    }
    else
    {
        passwordFlag = 1;
        console.log("Validate Password");
        
    }
    EnableSubmit();
}



function EnableSubmit() 
{
    if(emailFlag == 1 && passwordFlag == 1)
    {
        document.getElementById("myBtn").disabled = false;
    }
    else
    {
        document.getElementById("myBtn").disabled = true;
        console.log(phoneFlag,emailFlag,passwordFlag);
    }
}












