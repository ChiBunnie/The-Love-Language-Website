
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation li');
    
    
    
    burger.addEventListener('click', () => {
        //Taggle Nav
        nav.classList.toggle('nav-active');

        //Animation Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
              link.style.animation = 'navLinkFade 0.5s ease forwards 0.5s';
              
                //link.style.animation = 'navLinkFade 0.5s ease forwards $(index / 7 + 0.3)';
                //console.log(index / 7 + 0.3)
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle')
    });
}
navSlide();

document.getElementById("Input").addEventListener("click",function(event) {
    var ChangeColor = document.body;
    if (event.target.value === "OFF") {
        ChangeColor.classList.toggle("dark");
        event.target.value = "ON";
    }else { 
        ChangeColor.classList.toggle("dark");
        event.target.value = "OFF";
    }
},
false
);

var image6 = document.getElementById('pictures');
var image1 = document.getElementById('time');
var image2 = document.getElementById('acts');
var image3 = document.getElementById('words');
var image4 = document.getElementById('gifts');
var image5 = document.getElementById('physical');
var image6 = document.getElementById('pictures');

document.getElementById("time").addEventListener("click", change_image1);
document.getElementById("acts").addEventListener("click", change_image2);
document.getElementById("words").addEventListener("click", change_image3);
document.getElementById("gifts").addEventListener("click", change_image4);
document.getElementById("physical").addEventListener("click", change_image5);

var timeoutId = null;
function change_image1()
{
    clearTimeout(timeoutId);
    image1.src='img/time2.png';
    image6.src='img/Quality_Time.png';
    image2.src='img/acts1.png';
    image3.src='img/words1.png';
    image4.src='img/gifts1.png';
    image5.src='img/physical1.png';
    timeoutId = setTimeout(function reset() {
        image6.src='img/banner_1.jpg';
        image1.src='img/time1.png';
    }, 5000);
}


function change_image2()
{
    clearTimeout(timeoutId);
    image2.src='img/acts2.png';
    image6.src='img/Acts_of_Service.png';
    image1.src='img/time1.png';
    image3.src='img/words1.png';
    image4.src='img/gifts1.png';
    image5.src='img/physical1.png';
    timeoutId = setTimeout(function reset() {
        image6.src='img/banner_3.jpg';
        image2.src='img/acts1.png';
    }, 5000);
}


function change_image3()
{
    clearTimeout(timeoutId);
    image3.src='img/words2.png';
    image6.src='img/Words_of_Affirmation.png';
    image1.src='img/time1.png';
    image2.src='img/acts1.png';
    image4.src='img/gifts1.png';
    image5.src='img/physical1.png';
    timeoutId = setTimeout(function reset() {
        image6.src='img/banner_3.jpg';
        image3.src='img/words1.png';
    }, 5000);
}


function change_image4()
{
    clearTimeout(timeoutId);
    image4.src='img/gifts2.png';
    image6.src='img/Receiving_Gifts.png';
    image1.src='img/time1.png';
    image2.src='img/acts1.png';
    image3.src='img/words1.png';
    image5.src='img/physical1.png';
    timeoutId = setTimeout(function reset() {
        image6.src='img/banner_3.jpg';
        image4.src='img/gifts1.png';
    }, 5000);
}


function change_image5()
{
    clearTimeout(timeoutId);
    image5.src='img/physical2.png';
    image6.src='img/Physical_Touch.png';
    image1.src='img/time1.png';
    image2.src='img/acts1.png';
    image3.src='img/words1.png';
    image4.src='img/gifts1.png';
    timeoutId = setTimeout(function reset() {
        image6.src='img/banner_3.jpg';
        image5.src='img/physical1.png';
    }, 5000);
    
}


const signup = document.querySelector(".signup");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pwd_format = document.querySelector(".pwd-format");
// lets define a password format
// The password should contain around 8-15 alhpanumeric character

const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

password.addEventListener('focusin', () => {
  pwd_format.style.display = 'block';
  
  // now lets check the password entered by the user
  password.addEventListener('keyup', () => {
    if (passwordPattern.test(password.value)) {
      password.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
      pwd_format.style.color = 'green'
    } else {
      password.style.borderColor = 'red'
      pwd_format.style.color = 'red'
    }
  })
})

password.addEventListener('focusout', () => {
  pwd_format.style.display = 'none';
})

confirmPassword.addEventListener('focusin', () => {
  pwd_format.style.display = 'block';
  confirmPassword.addEventListener('keyup', () => {
    if (passwordPattern.test(confirmPassword.value) && password.value === confirmPassword.value) {
      confirmPassword.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
      pwd_format.style.color = 'green'
    } else {
      confirmPassword.style.borderColor = 'red'
      pwd_format.style.color = 'red'
    }
  })
})

confirmPassword.addEventListener('focusout', () => {
  pwd_format.style.display = 'none';
})

termCond.addEventListener('change', () => {
  if (termCond.checked === true) {
    signup.disabled = false;
  } else if (termCond.checked === false) {
    signup.disabled = true;
  }
})
