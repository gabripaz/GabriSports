var username = "Gabriel@proj.ca";
var passwrd = "123";

function login()
{       
    var usernametry, passwrdtry;
    usernametry = document.getElementById("User").value;
    passwrdtry = document.getElementById("paswrd").value;
    if (username == usernametry && passwrd==passwrdtry)
    {
        parent.location.href = "indexLogin.html";
    }
    else
    {
        parent.frames.ContentFrame.location.href = "ContentDispPassw.html";
    }
    

}

function logout()
{
    parent.location.href ="index.html";
}

function getUsername()
{    
    document.getElementById("labelusername").innerHTML = username;
}
