
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

////////////////////////////////////////////////
var c_w = 0;
var c_a = 0;
var c_g = 0;
var c_q = 0;
var c_p = 0;

var s_w = 0;
var s_a = 0;
var s_g = 0;
var s_q = 0;
var s_p = 0;

var choose = 0;

var Couple_QNumber = 1;
var Couple_count_W = 0;
var Couple_count_A = 0;
var Couple_count_G = 0;
var Couple_count_Q = 0;
var Couple_count_P = 0;

var Single_QNumber = 1;
var Single_count_W = 0;
var Single_count_A = 0;
var Single_count_G = 0;
var Single_count_Q = 0;
var Single_count_P = 0;


function quiz_single(Q) {
    Single_QNumber++;
  
    if (Single_QNumber == 2) { 
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I can spend alone time with someone I love - just us.";
        document.getElementById("Q2").innerHTML="someone I love does something practical to help me out.";
        document.getElementById("percent").innerHTML="3%";
        Single_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I can spend alone time with someone I love - just us."
        document.getElementById("Q2").innerHTML="someone I love does something practical to help me out."
        document.getElementById("percent").innerHTML="3%"
        Single_count_P++;
      }
    }
    else if (Single_QNumber == 3) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love gives me a little gift as a token of our love of concern for each other.";
        document.getElementById("Q2").innerHTML="I get to spend uninterrupted leisure time with those I love.";
        document.getElementById("percent").innerHTML="7%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love gives me a little gift as a token of our love of concern for each other.";
        document.getElementById("Q2").innerHTML="I get to spend uninterrupted leisure time with those I love.";
        document.getElementById("percent").innerHTML="7%";
        Single_count_A++;
      }
    }
    else if (Single_QNumber == 4) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love does something unexpected for me to help me with a project.";
        document.getElementById("Q2").innerHTML="I can share an innocent touch with someone I love.";
        document.getElementById("percent").innerHTML="10%";
        Single_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love does something unexpected for me to help me with a project.";
        document.getElementById("Q2").innerHTML="I can share an innocent touch with someone I love.";
        document.getElementById("percent").innerHTML="10%";
        Single_count_Q++;
      }
    }
    else if (Single_QNumber == 5) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love puts their arm around me in public.";
        document.getElementById("Q2").innerHTML="someone I love surprises me with a gift.";
        document.getElementById("percent").innerHTML="13%";
        Single_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love puts their arm around me in public.";
        document.getElementById("Q2").innerHTML="someone I love surprises me with a gift.";
        document.getElementById("percent").innerHTML="13%";
        Single_count_P++;
      }
    }
    else if (Single_QNumber == 6) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m around someone I love, even if we’re not really doing anything.";
        document.getElementById("Q2").innerHTML="I can be comfortable holding hands, high-fiving, or putting my arm around someone I love.";
        document.getElementById("percent").innerHTML="17%";
        Single_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m around someone I love, even if we’re not really doing anything.";
        document.getElementById("Q2").innerHTML="I can be comfortable holding hands, high-fiving, or putting my arm around someone I love.";
        document.getElementById("percent").innerHTML="17%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 7) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I receive a gift from someone I love.";
        document.getElementById("Q2").innerHTML="I hear from someone I love that they love me.";
        document.getElementById("percent").innerHTML="20%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I receive a gift from someone I love.";
        document.getElementById("Q2").innerHTML="I hear from someone I love that they love me.";
        document.getElementById("percent").innerHTML="20%";
        Single_count_P++;
      }
    }
    else if (Single_QNumber == 8) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I sit close to someone I love.";
        document.getElementById("Q2").innerHTML="I am complimented by someone I love for no apparent reason.";
        document.getElementById("percent").innerHTML="23%";
        Single_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I sit close to someone I love.";
        document.getElementById("Q2").innerHTML="I am complimented by someone I love for no apparent reason.";
        document.getElementById("percent").innerHTML="23%";
        Single_count_W++;
      }
    }
    else if (Single_QNumber == 9) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I get the chance to just “hang out” with someone I love.";
        document.getElementById("Q2").innerHTML="I unexpectedly get small gifts from someone I love.";
        document.getElementById("percent").innerHTML="27%";
        Single_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I get the chance to just “hang out” with someone I love.";
        document.getElementById("Q2").innerHTML="I unexpectedly get small gifts from someone I love.";
        document.getElementById("percent").innerHTML="27%";
        Single_count_W++;
      }
    }
    else if (Single_QNumber == 10) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I hear someone I love tell me, “I’m proud of you.”";
        document.getElementById("Q2").innerHTML="someone I love helps me with a task.";
        document.getElementById("percent").innerHTML="30%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I hear someone I love tell me, “I’m proud of you.”";
        document.getElementById("Q2").innerHTML="someone I love helps me with a task.";
        document.getElementById("percent").innerHTML="30%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 11) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I get to do things with someone I love.";
        document.getElementById("Q2").innerHTML="I hear supportive words from someone I love.";
        document.getElementById("percent").innerHTML="33%";
        Single_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I get to do things with someone I love.";
        document.getElementById("Q2").innerHTML="I hear supportive words from someone I love.";
        document.getElementById("percent").innerHTML="33%";
        Single_count_A++;
      }
    }
    else if (Single_QNumber == 12) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love does things for me instead of just talking about doing nice things.";
        document.getElementById("Q2").innerHTML="I feel connected to someone I love through a hug.";
        document.getElementById("percent").innerHTML="37%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love does things for me instead of just talking about doing nice things.";
        document.getElementById("Q2").innerHTML="I feel connected to someone I love through a hug.";
        document.getElementById("percent").innerHTML="37%";
        Single_count_W++;
      }
    }
    else if (Single_QNumber == 13) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I hear praise from someone I love.";
        document.getElementById("Q2").innerHTML="someone I love gives me something that shows they were really thinking about me.";
        document.getElementById("percent").innerHTML="40%";
        Single_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I hear praise from someone I love.";
        document.getElementById("Q2").innerHTML="someone I love gives me something that shows they were really thinking about me.";
        document.getElementById("percent").innerHTML="40%";
        Single_count_P++;
      }
    }
    else if (Single_QNumber == 14) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m able to just be around someone I love.";
        document.getElementById("Q2").innerHTML="I get a back rub from someone I love.";
        document.getElementById("percent").innerHTML="43%";
        Single_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m able to just be around someone I love.";
        document.getElementById("Q2").innerHTML="I get a back rub from someone I love.";
        document.getElementById("percent").innerHTML="43%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 15) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love reacts positively to something I’ve accomplished.";
        document.getElementById("Q2").innerHTML="someone I love does something for me that I know they don’t particularly enjoy.";
        document.getElementById("percent").innerHTML="47%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love reacts positively to something I’ve accomplished.";
        document.getElementById("Q2").innerHTML="someone I love does something for me that I know they don’t particularly enjoy.";
        document.getElementById("percent").innerHTML="47%";
        Single_count_P++;
      }
    }
    else if (Single_QNumber == 16) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m able to be in close physical proximity to someone I love.";
        document.getElementById("Q2").innerHTML="I sense someone I love showing interest in the things I care about.";
        document.getElementById("percent").innerHTML="50%";
        Single_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m able to be in close physical proximity to someone I love.";
        document.getElementById("Q2").innerHTML="I sense someone I love showing interest in the things I care about.";
        document.getElementById("percent").innerHTML="50%";
        Single_count_A++;
      }
    }
    else if (Single_QNumber == 17) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love works on special projects with me that I have to complete.";
        document.getElementById("Q2").innerHTML="someone I love gives me an exciting gift.";
        document.getElementById("percent").innerHTML="53%";
        Single_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love works on special projects with me that I have to complete.";
        document.getElementById("Q2").innerHTML="someone I love gives me an exciting gift.";
        document.getElementById("percent").innerHTML="53%";
        Single_count_A++;
      }
    }
    else if (Single_QNumber == 18) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m complimented by someone I love on my appearance.";
        document.getElementById("Q2").innerHTML="someone I love takes the time to listen to me and really understand my feelings.";
        document.getElementById("percent").innerHTML="57%";
        Single_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m complimented by someone I love on my appearance.";
        document.getElementById("Q2").innerHTML="someone I love takes the time to listen to me and really understand my feelings.";
        document.getElementById("percent").innerHTML="57%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 19) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I can share a meaningful touch in public with someone I love.";
        document.getElementById("Q2").innerHTML="someone I love offers to run errands for me.";
        document.getElementById("percent").innerHTML="60%";
        Single_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I can share a meaningful touch in public with someone I love.";
        document.getElementById("Q2").innerHTML="someone I love offers to run errands for me.";
        document.getElementById("percent").innerHTML="60%";
        Single_count_Q++;
      }
    }
    else if (Single_QNumber == 20) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love does something special for me to help me out.";
        document.getElementById("Q2").innerHTML="I get a gift that someone I love put thought into choosing.";
        document.getElementById("percent").innerHTML="63%";
        Single_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love does something special for me to help me out.";
        document.getElementById("Q2").innerHTML="I get a gift that someone I love put thought into choosing.";
        document.getElementById("percent").innerHTML="63%";
        Single_count_Q++;
      }
    }
    else if (Single_QNumber == 21) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love doesn’t check their phone while we’re talking with each other.";
        document.getElementById("Q2").innerHTML="someone I love goes out of their way to do something that relieves pressure on me.";
        document.getElementById("percent").innerHTML="67%";
        Single_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love doesn’t check their phone while we’re talking with each other.";
        document.getElementById("Q2").innerHTML="someone I love goes out of their way to do something that relieves pressure on me.";
        document.getElementById("percent").innerHTML="67%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 22) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I can look forward to a holiday because I’ll probably get a gift from someone I love.";
        document.getElementById("Q2").innerHTML="I hear the words, “I appreciate you” from someone I love.";
        document.getElementById("percent").innerHTML="70%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I can look forward to a holiday because I’ll probably get a gift from someone I love.";
        document.getElementById("Q2").innerHTML="I hear the words, “I appreciate you” from someone I love.";
        document.getElementById("percent").innerHTML="70%";
        Single_count_A++;
      }
    }
    else if (Single_QNumber == 23) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love and haven’t seen in a while thinks enough of me to give me a little gift.";
        document.getElementById("Q2").innerHTML="someone I love takes care of something I’m responsible to do but I feel too stressed to do at the time.";
        document.getElementById("percent").innerHTML="73%";
        Single_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love and haven’t seen in a while thinks enough of me to give me a little gift.";
        document.getElementById("Q2").innerHTML="someone I love takes care of something I’m responsible to do but I feel too stressed to do at the time.";
        document.getElementById("percent").innerHTML="73%";
        Single_count_W++;
      }
    }
    else if (Single_QNumber == 24) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love doesn’t interrupt me while I’m talking.";
        document.getElementById("Q2").innerHTML="gift giving is an important part of the relationship with someone I love.";
        document.getElementById("percent").innerHTML="77%";
        Single_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love doesn’t interrupt me while I’m talking.";
        document.getElementById("Q2").innerHTML="gift giving is an important part of the relationship with someone I love.";
        document.getElementById("percent").innerHTML="77%";
        Single_count_A++;
      }
    }
    else if (Single_QNumber == 25) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love helps me out when they know I’m already tired.";
        document.getElementById("Q2").innerHTML="I get to go somewhere while spending time with someone I love.";
        document.getElementById("percent").innerHTML="80%";
        Single_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love helps me out when they know I’m already tired.";
        document.getElementById("Q2").innerHTML="I get to go somewhere while spending time with someone I love.";
        document.getElementById("percent").innerHTML="80%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 26) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love touches my arm or shoulder to show their care or concern.";
        document.getElementById("Q2").innerHTML="someone I love gives me a little gift that they picked up in the course of their normal day.";
        document.getElementById("percent").innerHTML="83%";
        Single_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love touches my arm or shoulder to show their care or concern.";
        document.getElementById("Q2").innerHTML="someone I love gives me a little gift that they picked up in the course of their normal day.";
        document.getElementById("percent").innerHTML="83%";
        Single_count_Q++;
      }
    }
    else if (Single_QNumber == 27) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love says something encouraging to me.";
        document.getElementById("Q2").innerHTML="I get to spend time in a shared activity or hobby with someone I love.";
        document.getElementById("percent").innerHTML="87%";
        Single_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love says something encouraging to me.";
        document.getElementById("Q2").innerHTML="I get to spend time in a shared activity or hobby with someone I love.";
        document.getElementById("percent").innerHTML="87%";
        Single_count_G++;
      }
    }
    else if (Single_QNumber == 28) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love surprises me with a small token of their appreciation.";
        document.getElementById("Q2").innerHTML="I’m touching someone I love frequently to express our friendship.";
        document.getElementById("percent").innerHTML="90%";
        Single_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love surprises me with a small token of their appreciation.";
        document.getElementById("Q2").innerHTML="I’m touching someone I love frequently to express our friendship.";
        document.getElementById("percent").innerHTML="90%";
        Single_count_Q++;
      }
    }
    else if (Single_QNumber == 29) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="someone I love helps me out - especially if I know they’re already busy.";
        document.getElementById("Q2").innerHTML="I hear someone I love tell me that they appreciate me.";
        document.getElementById("percent").innerHTML="93%";
        Single_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="someone I love helps me out - especially if I know they’re already busy.";
        document.getElementById("Q2").innerHTML="I hear someone I love tell me that they appreciate me.";
        document.getElementById("percent").innerHTML="93%";
        Single_count_P++;
      }
    }
    else if (Single_QNumber == 30) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I get a hug from someone whom I haven’t seen in a while.";
        document.getElementById("Q2").innerHTML="I hear someone I love tell me how much I mean to him/her.";
        document.getElementById("percent").innerHTML="97%";
        Single_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I get a hug from someone whom I haven’t seen in a while.";
        document.getElementById("Q2").innerHTML="I hear someone I love tell me how much I mean to him/her.";
        document.getElementById("percent").innerHTML="97%";
        Single_count_W++;
      }
    }
    else if (Single_QNumber == 31) {
      if(Q == 1) {
        window.location = 'loading';
        ++Single_count_P;
        choose = 2;
        window.localStorage.setItem('c', choose);
        window.localStorage.setItem('s_w', Single_count_W);
        window.localStorage.setItem('s_a', Single_count_A);
        window.localStorage.setItem('s_g', Single_count_G);
        window.localStorage.setItem('s_q', Single_count_Q);
        window.localStorage.setItem('s_p', Single_count_P);
      }
      else if(Q == 2) {
        window.location = 'loading';
        ++Single_count_W;
        choose = 2;
        window.localStorage.setItem('c', choose);
        window.localStorage.setItem('s_w', Single_count_W);
        window.localStorage.setItem('s_a', Single_count_A);
        window.localStorage.setItem('s_g', Single_count_G);
        window.localStorage.setItem('s_q', Single_count_Q);
        window.localStorage.setItem('s_p', Single_count_P); 
      }
    }
}

function quiz_couple(Q) {
    Couple_QNumber++;
  
    if (Couple_QNumber == 2) { 
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I can spend alone time with my partner - just the two of us.";
        document.getElementById("Q2").innerHTML="my partner does something practical to help me out.";
        document.getElementById("percent").innerHTML="3%";
        Couple_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I can spend alone time with my partner - just the two of us."
        document.getElementById("Q2").innerHTML="my partner does something practical to help me out."
        document.getElementById("percent").innerHTML="3%"
        Couple_count_P++;
      }
    }
    else if (Couple_QNumber == 3) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner gives me a little gift as a token of our love for each other.";
        document.getElementById("Q2").innerHTML="I get to spend uninterrupted leisure time with my partner.";
        document.getElementById("percent").innerHTML="7%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner gives me a little gift as a token of our love for each other.";
        document.getElementById("Q2").innerHTML="I get to spend uninterrupted leisure time with my partner.";
        document.getElementById("percent").innerHTML="7%";
        Couple_count_A++;
      }
    }
    else if (Couple_QNumber == 4) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner unexpectedly does something for me like filling my car or doing the laundry.";
        document.getElementById("Q2").innerHTML="my partner and I touch.";
        document.getElementById("percent").innerHTML="10%";
        Couple_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner unexpectedly does something for me like filling my car or doing the laundry.";
        document.getElementById("Q2").innerHTML="my partner and I touch.";
        document.getElementById("percent").innerHTML="10%";
        Couple_count_Q++;
      }
  
    }
    else if (Couple_QNumber == 5) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner puts his/her arm around me when we’re in public.";
        document.getElementById("Q2").innerHTML="my partner surprises me with a gift.";
        document.getElementById("percent").innerHTML="13%";
        Couple_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner puts his/her arm around me when we’re in public.";
        document.getElementById("Q2").innerHTML="my partner surprises me with a gift.";
        document.getElementById("percent").innerHTML="13%";
        Couple_count_P++;
      }
    }
    else if (Couple_QNumber == 6) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m around my partner, even if we’re not really doing anything.";
        document.getElementById("Q2").innerHTML="I hold hands with my partner.";
        document.getElementById("percent").innerHTML="17%";
        Couple_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m around my partner, even if we’re not really doing anything.";
        document.getElementById("Q2").innerHTML="I hold hands with my partner.";
        document.getElementById("percent").innerHTML="17%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 7) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner gives me a gift.";
        document.getElementById("Q2").innerHTML="I hear “I love you” from my partner.";
        document.getElementById("percent").innerHTML="20%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner gives me a gift.";
        document.getElementById("Q2").innerHTML="I hear “I love you” from my partner.";
        document.getElementById("percent").innerHTML="20%";
        Couple_count_P++;
      }
    }
    else if (Couple_QNumber == 8) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I sit close to my partner.";
        document.getElementById("Q2").innerHTML="I am complimented by my loved one for no apparent reason.";
        document.getElementById("percent").innerHTML="23%";
        Couple_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I sit close to my partner.";
        document.getElementById("Q2").innerHTML="I am complimented by my loved one for no apparent reason.";
        document.getElementById("percent").innerHTML="23%";
        Couple_count_W++;
      }
    }
    else if (Couple_QNumber == 9) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I get the chance to just “hang out” with my partner.";
        document.getElementById("Q2").innerHTML="I unexpectedly get small gifts from my partner.";
        document.getElementById("percent").innerHTML="27%";
        Couple_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I get the chance to just “hang out” with my partner.";
        document.getElementById("Q2").innerHTML="I unexpectedly get small gifts from my partner.";
        document.getElementById("percent").innerHTML="27%";
        Couple_count_W++;
      }
    }
    else if (Couple_QNumber == 10) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I hear my partner tell me, “I’m proud of you.”";
        document.getElementById("Q2").innerHTML="my partner helps me with a task.";
        document.getElementById("percent").innerHTML="30%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I hear my partner tell me, “I’m proud of you.”";
        document.getElementById("Q2").innerHTML="my partner helps me with a task.";
        document.getElementById("percent").innerHTML="30%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 11) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I get to do things with my partner.";
        document.getElementById("Q2").innerHTML="I hear supportive words from my partner.";
        document.getElementById("percent").innerHTML="33%";
        Couple_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I get to do things with my partner.";
        document.getElementById("Q2").innerHTML="I hear supportive words from my partner.";
        document.getElementById("percent").innerHTML="33%";
        Couple_count_A++;
      }
    }
    else if (Couple_QNumber == 12) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner does things for me instead of just talking about doing nice things.";
        document.getElementById("Q2").innerHTML="I feel connected to my partner through a hug.";
        document.getElementById("percent").innerHTML="37%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner does things for me instead of just talking about doing nice things.";
        document.getElementById("Q2").innerHTML="I feel connected to my partner through a hug.";
        document.getElementById("percent").innerHTML="37%";
        Couple_count_W++;
      }
    }
    else if (Couple_QNumber == 13) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I hear praise from my partner.";
        document.getElementById("Q2").innerHTML="my partner gives me something that shows he/she was really thinking about me.";
        document.getElementById("percent").innerHTML="40%";
        Couple_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I hear praise from my partner.";
        document.getElementById("Q2").innerHTML="my partner gives me something that shows he/she was really thinking about me.";
        document.getElementById("percent").innerHTML="40%";
        Couple_count_P++;
      }
    }
    else if (Couple_QNumber == 14) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m able to just be around my partner.";
        document.getElementById("Q2").innerHTML="I get a back rub or massage from my partner.";
        document.getElementById("percent").innerHTML="43%";
        Couple_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m able to just be around my partner.";
        document.getElementById("Q2").innerHTML="I get a back rub or massage from my partner.";
        document.getElementById("percent").innerHTML="43%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 15) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner reacts positively to something I’ve accomplished.";
        document.getElementById("Q2").innerHTML="my partner does something for me that I know they don’t particularly enjoy.";
        document.getElementById("percent").innerHTML="47%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner reacts positively to something I’ve accomplished.";
        document.getElementById("Q2").innerHTML="my partner does something for me that I know they don’t particularly enjoy.";
        document.getElementById("percent").innerHTML="47%";
        Couple_count_P++;
      }
    }
    else if (Couple_QNumber == 16) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner and I kiss frequently.";
        document.getElementById("Q2").innerHTML="I sense my partner is showing interest in the things I care about.";
        document.getElementById("percent").innerHTML="50%";
        Couple_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner and I kiss frequently.";
        document.getElementById("Q2").innerHTML="I sense my partner is showing interest in the things I care about.";
        document.getElementById("percent").innerHTML="50%";
        Couple_count_A++;
      }
    }
    else if (Couple_QNumber == 17) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner works on special projects with me that I have to complete.";
        document.getElementById("Q2").innerHTML="my partner gives me an exciting gift.";
        document.getElementById("percent").innerHTML="53%";
        Couple_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner works on special projects with me that I have to complete.";
        document.getElementById("Q2").innerHTML="my partner gives me an exciting gift.";
        document.getElementById("percent").innerHTML="53%";
        Couple_count_A++;
      }
    }
    else if (Couple_QNumber == 18) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I’m complimented by my partner on my appearance.";
        document.getElementById("Q2").innerHTML="my partner takes the time to listen to me and really understand my feelings.";
        document.getElementById("percent").innerHTML="57%";
        Couple_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I’m complimented by my partner on my appearance.";
        document.getElementById("Q2").innerHTML="my partner takes the time to listen to me and really understand my feelings.";
        document.getElementById("percent").innerHTML="57%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 19) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner and I share non-sexual touch in public.";
        document.getElementById("Q2").innerHTML="my partner offers to run errands for me.";
        document.getElementById("percent").innerHTML="60%";
        Couple_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner and I share non-sexual touch in public.";
        document.getElementById("Q2").innerHTML="my partner offers to run errands for me.";
        document.getElementById("percent").innerHTML="60%";
        Couple_count_Q++;
      }
    }
    else if (Couple_QNumber == 20) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner does a bit more than his/her normal share of the responsibilities we share (around the house, work-related, etc).";
        document.getElementById("Q2").innerHTML="I get a gift that I know my partner put thought into choosing.";
        document.getElementById("percent").innerHTML="63%";
        Couple_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner does a bit more than his/her normal share of the responsibilities we share (around the house, work-related, etc).";
        document.getElementById("Q2").innerHTML="I get a gift that I know my partner put thought into choosing.";
        document.getElementById("percent").innerHTML="63%";
        Couple_count_Q++;
      }
    }
    else if (Couple_QNumber == 21) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner doesn’t check his/her phone while we’re talking.";
        document.getElementById("Q2").innerHTML="my partner goes out of their way to do something that relieves pressure on me.";
        document.getElementById("percent").innerHTML="67%";
        Couple_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner doesn’t check his/her phone while we’re talking.";
        document.getElementById("Q2").innerHTML="my partner goes out of their way to do something that relieves pressure on me.";
        document.getElementById("percent").innerHTML="67%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 22) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="I can look forward to a holiday because of a gift I anticipate receiving.";
        document.getElementById("Q2").innerHTML="I hear the words, “I appreciate you” from my partner.";
        document.getElementById("percent").innerHTML="70%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="I can look forward to a holiday because of a gift I anticipate receiving.";
        document.getElementById("Q2").innerHTML="I hear the words, “I appreciate you” from my partner.";
        document.getElementById("percent").innerHTML="70%";
        Couple_count_A++;
      }
    }
    else if (Couple_QNumber == 23) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner brings me a little gift after he/she has been traveling without me.";
        document.getElementById("Q2").innerHTML="my partner takes care of something I’m responsible to do but I feel too stressed to do at the time.";
        document.getElementById("percent").innerHTML="73%";
        Couple_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner brings me a little gift after he/she has been traveling without me.";
        document.getElementById("Q2").innerHTML="my partner takes care of something I’m responsible to do but I feel too stressed to do at the time.";
        document.getElementById("percent").innerHTML="73%";
        Couple_count_W++;
      }
    }
    else if (Couple_QNumber == 24) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner doesn’t interrupt me while I’m talking.";
        document.getElementById("Q2").innerHTML="gift giving is an important part of our relationship.";
        document.getElementById("percent").innerHTML="77%";
        Couple_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner doesn’t interrupt me while I’m talking.";
        document.getElementById("Q2").innerHTML="gift giving is an important part of our relationship.";
        document.getElementById("percent").innerHTML="77%";
        Couple_count_A++;
      }
    }
    else if (Couple_QNumber == 25) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner helps me out when he/she knows I’m already tired.";
        document.getElementById("Q2").innerHTML="I get to go somewhere while spending time with my partner.";
        document.getElementById("percent").innerHTML="80%";
        Couple_count_Q++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner helps me out when he/she knows I’m already tired.";
        document.getElementById("Q2").innerHTML="I get to go somewhere while spending time with my partner.";
        document.getElementById("percent").innerHTML="80%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 26) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner and I are physically intimate.";
        document.getElementById("Q2").innerHTML="my partner gives me a little gift that he/she picked up in the course of their normal day.";
        document.getElementById("percent").innerHTML="83%";
        Couple_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner and I are physically intimate.";
        document.getElementById("Q2").innerHTML="my partner gives me a little gift that he/she picked up in the course of their normal day.";
        document.getElementById("percent").innerHTML="83%";
        Couple_count_Q++;
      }
    }
    else if (Couple_QNumber == 27) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner says something encouraging to me.";
        document.getElementById("Q2").innerHTML="I get to spend time in a shared activity or hobby with my partner.";
        document.getElementById("percent").innerHTML="87%";
        Couple_count_P++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner says something encouraging to me.";
        document.getElementById("Q2").innerHTML="I get to spend time in a shared activity or hobby with my partner.";
        document.getElementById("percent").innerHTML="87%";
        Couple_count_G++;
      }
    }
    else if (Couple_QNumber == 28) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner surprises me with a small token of their appreciation.";
        document.getElementById("Q2").innerHTML="my partner and I touch a lot during the normal course of the day.";
        document.getElementById("percent").innerHTML="90%";
        Couple_count_W++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner surprises me with a small token of their appreciation.";
        document.getElementById("Q2").innerHTML="my partner and I touch a lot during the normal course of the day.";
        document.getElementById("percent").innerHTML="90%";
        Couple_count_Q++;
      }
    }
    else if (Couple_QNumber == 29) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner helps me out - especially if I know they’re already busy.";
        document.getElementById("Q2").innerHTML="I hear my partner specifically tell me, “I appreciate you.”";
        document.getElementById("percent").innerHTML="93%";
        Couple_count_G++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner helps me out - especially if I know they’re already busy.";
        document.getElementById("Q2").innerHTML="I hear my partner specifically tell me, “I appreciate you.”";
        document.getElementById("percent").innerHTML="93%";
        Couple_count_P++;
      }
    }
    else if (Couple_QNumber == 30) {
      if(Q == 1) {
        document.getElementById("Q1").innerHTML="my partner and I embrace after we’ve been apart for a while.";
        document.getElementById("Q2").innerHTML="I hear my partner say how much I mean to him/her.";
        document.getElementById("percent").innerHTML="97%";
        Couple_count_A++;
      }
      else if(Q == 2) {
        document.getElementById("Q1").innerHTML="my partner and I embrace after we’ve been apart for a while.";
        document.getElementById("Q2").innerHTML="I hear my partner say how much I mean to him/her.";
        document.getElementById("percent").innerHTML="97%";
        Couple_count_W++;
      }
    }
    else if (Couple_QNumber == 31) {
      if(Q == 1) {
        window.location = '/loading';
        ++Couple_count_P;
        choose = 1;
        window.localStorage.setItem('c', choose);
        window.localStorage.setItem('c_w', Couple_count_W);
        window.localStorage.setItem('c_a', Couple_count_A);
        window.localStorage.setItem('c_g', Couple_count_G);
        window.localStorage.setItem('c_q', Couple_count_Q);
        window.localStorage.setItem('c_p', Couple_count_P);
      }
      else if(Q == 2) {
        window.location = '/loading';
        ++Couple_count_W;
        choose = 1;
        window.localStorage.setItem('c', choose);
        window.localStorage.setItem('c_w', Couple_count_W);
        window.localStorage.setItem('c_a', Couple_count_A);
        window.localStorage.setItem('c_g', Couple_count_G);
        window.localStorage.setItem('c_q', Couple_count_Q);
        window.localStorage.setItem('c_p', Couple_count_P); 
      }
    
    }
  
}
  
function result_Single(){
    Single_count_W = eval(localStorage.getItem('s_w'));
    Single_count_A = eval(localStorage.getItem('s_a'));
    Single_count_G = eval(localStorage.getItem('s_g')); 
    Single_count_Q = eval(localStorage.getItem('s_q'));
    Single_count_P = eval(localStorage.getItem('s_p')); 
    Max_Single = Math.max(Single_count_W, Single_count_A, Single_count_G, Single_count_Q, Single_count_P );
    
    if(Single_count_W == Max_Single ) {
      document.getElementById("R_S").innerHTML="YOUR PRIMARY LANGUAGE IS WORDS OF AFFIRMATION"
    }
    else if(Single_count_A == Max_Single ) {
      document.getElementById("R_S").innerHTML="YOUR PRIMARY LANGUAGE IS ACT OF SERVICE"
    }
    else if(Single_count_G == Max_Single ) {
      document.getElementById("R_S").innerHTML="YOUR PRIMARY LANGUAGE IS RECEIVING GIFTS"
    }
    else if(Single_count_Q == Max_Single ) {
      document.getElementById("R_S").innerHTML="YOUR PRIMARY LANGUAGE IS QUALITY TIME"
    }
    else if(Single_count_P == Max_Single ) {
      document.getElementById("R_S").innerHTML="YOUR PRIMARY LANGUAGE IS PHYSICAL TOUCH"
    }
  
    document.getElementById("q_s").innerHTML = Single_count_Q;
    document.getElementById("a_s").innerHTML = Single_count_A;
    document.getElementById("w_s").innerHTML = Single_count_W;
    document.getElementById("g_s").innerHTML = Single_count_G;
    document.getElementById("p_s").innerHTML = Single_count_P;
}

function result_Couple(){
  
    Couple_count_W = eval(localStorage.getItem('c_w'));
    Couple_count_A = eval(localStorage.getItem('c_a'));
    Couple_count_G = eval(localStorage.getItem('c_g'));
    Couple_count_Q = eval(localStorage.getItem('c_q'));
    Couple_count_P = eval(localStorage.getItem('c_p'));
    Max_Couple = Math.max(Couple_count_W, Couple_count_A, Couple_count_G, Couple_count_Q, Couple_count_P );
  
    if(Couple_count_W == Max_Couple ) {
      document.getElementById("R_C").innerHTML="YOUR PRIMARY LANGUAGE IS WORDS OF AFFIRMATION"
    }
    else if(Couple_count_A == Max_Couple ) {
      document.getElementById("R_C").innerHTML="YOUR PRIMARY LANGUAGE IS ACT OF SERVICE"
    }
    else if(Couple_count_G == Max_Couple ) {
      document.getElementById("R_C").innerHTML="YOUR PRIMARY LANGUAGE IS RECEIVING GIFTS"
    }
    else if(Couple_count_Q == Max_Couple ) {
      document.getElementById("R_C").innerHTML="YOUR PRIMARY LANGUAGE IS QUALITY TIME"
    }
    else if(Couple_count_P == Max_Couple ) {
      document.getElementById("R_C").innerHTML="YOUR PRIMARY LANGUAGE IS PHYSICAL TOUCH"
    }
    
    document.getElementById("q_c").innerHTML = Couple_count_Q;
    document.getElementById("a_c").innerHTML = Couple_count_A;
    document.getElementById("w_c").innerHTML = Couple_count_W;
    document.getElementById("g_c").innerHTML = Couple_count_G;
    document.getElementById("p_c").innerHTML = Couple_count_P; 
}
