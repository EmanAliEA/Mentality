


const translate = document.querySelector(".translate");
const dark = document.querySelector(".Darkmode");
const elements = document.querySelectorAll(".WebsiteName,.home,.about,.features,.loginB,.register,.text1,.text2,.start,.read,.signRight,.dollar,.signCenter");

const listButtons = document.querySelectorAll(".about, .features");
const home = document.querySelector(".home");


listButtons.forEach(button => {
  button.addEventListener("mouseover", () => {
    home.style.boxShadow = "none";// Remove shadow from others on hover
  });
});

listButtons.forEach(button => {
      button.addEventListener("mouseleave", () => {
        home.style.boxShadow = "2px 2px 19px #6563d6cc, -1px -1px 19px #6563d6cc";// Remove shadow from others on hover
      });
});

let isEnglish = true; 
translate.addEventListener('click', () => {
  isEnglish = !isEnglish;  // Toggle language state

  if (isEnglish) {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";  // Left-to-right direction
        elements.forEach(function(element) {
            if (element.classList.contains("WebsiteName")) {
                  element.textContent = "Floosy";
                  element.style.marginLeft = "10PX ";
            }
            if(element.classList.contains("home"))
                  element.textContent = "Home";
            if(element.classList.contains("about"))
                  element.textContent = "About";
            if(element.classList.contains("features"))
                  element.textContent = "Features";
            if(element.classList.contains("loginB"))
                  element.textContent = "Login";
            if(element.classList.contains("register"))
                  element.textContent = "Register";
            if(element.classList.contains("text1"))
            {
                  element.textContent = "";
                  const span = document.createElement("span");
                  span.textContent = "Easiest";
                  
                  const text = document.createTextNode(" way to manage ");
                  const br = document.createElement("br");
                  const finance = document.createTextNode(" your finance.");
                  
                  element.appendChild(span);
                  element.appendChild(text);
                  element.appendChild(br);
                  element.appendChild(finance);
            }
            if(element.classList.contains("text2"))
                  element.textContent = "Say goodbye for spreadsheets and other boring products!";
            if(element.classList.contains("start"))
                  element.textContent ="Get Started";
            if(element.classList.contains("read"))
                  element.textContent = "Read More";
            if(element.classList.contains("dollar"))
            {
                  element.style.gridColumn = "1/3";
                  element.style.gridRow = "1/2";
            }
            if(element.classList.contains("signRight"))
                  element.style.gridColumn = "3/3";
          });
  } else {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";  // Right-to-left direction
        elements.forEach(function(element) {
            if (element.classList.contains("WebsiteName")) {
                  element.textContent = "فلوسى ";
                  element.style.marginRight = "10px";
            }
            if(element.classList.contains("home"))
                  element.textContent = "الرئيسية";
            if(element.classList.contains("about"))
                  element.textContent = "عنا";
            if(element.classList.contains("features"))
                  element.textContent = "المميزات";
            if(element.classList.contains("loginB"))
                  element.textContent = "تسجيل الدخول";
            if(element.classList.contains("register"))
                  element.textContent = "انشاء حساب";
            if(element.classList.contains("text1"))
            {
                  element.textContent = "";
                  const span = document.createElement("span");
                  span.textContent = "أسهل";
                  const text = document.createTextNode(" وسيلة لادارة اموالك ");
                  element.appendChild(span);
                  element.appendChild(text);
            }
            if(element.classList.contains("text2"))
                  element.textContent = " قل وداعا للجداول والتطبيقات المملة!";
            if(element.classList.contains("start"))
                  element.textContent = "ابدأ الان";
            if(element.classList.contains("read"))
                  element.textContent = "تعرف على المزيد";
            if(element.classList.contains("dollar"))
            {
                  element.style.gridColumn = "3/3";
            }
            if(element.classList.contains("signRight"))
            {
                  element.style.gridRow="1/2";
                  element.style.gridColumn="1/2";
            }
            if(element.classList.contains("signCenter"))
                  element.style.gridRow="2/2";
          });
  }
});


const elementsDark = document.querySelectorAll(".home,.about,.features,.text1,.text2,.signRight,.dollar,.signCenter");

let isDark = false;
dark.addEventListener("click", () => {
     isDark = !isDark;
     if(isDark)
      {     
            document.querySelector("body").style.backgroundColor = "black";
            elementsDark.forEach(function(element) {
                  element.style.backgroundColor = "black";
                  if((!element.classList.contains("dollar")) &&  (!element.classList.contains("signCenter")) && (!element.classList.contains("signRight")))
                        element.style.color = "white";
                  else{
                        element.style.textShadow = '#ffffff47 2px 4px 4px, white -2px -1px 16px';
                  }
                  // if((!element.classList.contains("loginB")) &&  (!element.classList.contains("register")))
                  //       element.style.backgroundColor ="black";
                  // if(element.classList.contains("home"))
                  //       element.style.color = "white";
                  // if(element.classList.contains("about"))
                  //       element.style.color = "white";
                  // if(element.classList.contains("features"))
                  //       element.style.color = "white";
                  // if(element.classList.contains("text1"))
                  // {
                  //       const textWithoutSpan = text1Element.textContent.replace(/<span[^>]*>([^<]*)<\/span>/, '$1');
                  //       console.log(textWithoutSpan.trim());
                  // }
                  // if(element.classList.contains("text2"))
                  //       element.style.color = "white";
            });
     }
     else
     {
            document.querySelector("body").style.backgroundColor = "white";
            elementsDark.forEach(function(element) {
                  element.style.backgroundColor = "white";
                  if((!element.classList.contains("dollar")) &&  (!element.classList.contains("signCenter")) && (!element.classList.contains("signRight")))
                        element.style.color = "black";
                  else{
                        element.style.textShadow = '2px 2px 9px #9e8bdb, -2px -2px 9px #957de3';
                  }
                  // if((!element.classList.contains("loginB")) && (!element.classList.contains("register")))
                  //       element.style.backgroundColor ="white";
                  // if(element.classList.contains("home"))
                  //       element.style.color = "black";
                  // if(element.classList.contains("about"))
                  //       element.style.color = "black";
                  // if(element.classList.contains("features"))
                  //       element.style.color = "black";
                  // if(element.classList.contains("text1"))
                  // {
                  //       const textWithoutSpan = text1Element.textContent.replace(/<span[^>]*>([^<]*)<\/span>/, '$1');
                  //       console.log(textWithoutSpan.trim());
                  // }
                  // if(element.classList.contains("text2"))
                  //       element.style.color = "black";
            });
     }
});
