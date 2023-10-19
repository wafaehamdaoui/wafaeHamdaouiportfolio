/* ---- typing ----*/
var typed = new Typed(".typing",{
  strings:["","gynécologue","obstétrique"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})
/* ---- aside ----*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
      const a = navList[i].querySelector("a");
      a.addEventListener("click",function(){
        for(let k=0; k<totalSection; k++){
          allSection[i].classList.remove("back-section");
        }
        for(let j=0; j<totalNavList; j++){
          if(navList[j].querySelector("a")){
            allSection[j].classList.add("back-section")
          }
          navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200){
          asideSectionTogglerBtn();
        }
      })
    }
    function showSection(element){
      for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
      }
      const target = element.getAttribute("href").split("#")[1];
      document.querySelector("#" + target).classList.add("active")
    }

    document.querySelector(".hire-me").addEventListener("click", function(){
      console.log(this);
    })


    const navToggleBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navToggleBtn.addEventListener("click", () => {
          asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
          aside.classList.toggle("open");
          navToggleBtn.classList.toggle("open");
          for(let i=0;i<totalSection;i++)
          {
            allSection[i].classList.toggle("open");
          }
        }