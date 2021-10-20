
let toogle_menu_btn = document.getElementById('toggle-menu');
toogle_menu_btn.addEventListener('click', _ => {
  document.getElementById('goals-nav').classList.toggle('active');
})

//======================================================================================================
//had section kamla katrbat elements dyal html b js ila heydnaha l values ghaytkhado ghi mn local storage o ay goal mal9ach lvalues dyalo f local storage ghayakhdhom mn hna so ila kan local storage khawi had section li kathakem mn khilal 3timadha 3la l9iyam li kaynin f HTML 

let goal = document.querySelectorAll('.goals-section .goal');

//had forEach katrbat kol goal b elements dyalo 3la hsab his id
goal.forEach(goal => {
  let how = document.querySelector('.goals-section .goal#' + goal.id + ' .type span.how');
  let done = document.querySelector('.goals-section .goal#' + goal.id + ' .type span.done');
  let background = document.querySelector('.goals-section .goal#' + goal.id + ' .progress span.background');
  let pers = document.querySelector('.goals-section .goal#' + goal.id + ' .progress span.pers');
  let part = document.querySelectorAll('.goals-section .goal#' + goal.id + ' .goal-part span');

  function Goal_Progress() {

    //width dya l bg dyal progrss ghaytbdl 3la hsab had l value
    background.style.width = (+how.innerText * 100) / +done.innerText + "%";


    //hna ila kan goal section dir dyalo rtl fa span.pers ghan3tiw l value l right dyalo ama ila kan l3ks ghan3tiwha l left
    if(how.parentElement.parentElement.parentElement.getAttribute("dir") == "rtl") {
      pers.style.right = (+how.innerText * 100) / +done.innerText + "%";
    } else {
      pers.style.left = (+how.innerText * 100) / +done.innerText + "%";
    }

    //hna span.pers innerHTML dyalo ghatbdel 3la hsab had l value
    pers.innerHTML = ((+how.innerText * 100) / +done.innerText).toFixed(1) + "%";
  
    //hna ay part wselna liha ghaytzadha class active
    part.forEach(span => {
      if(+span.getAttribute("data-number") <= +how.innerText) {
        span.classList.add("active");
      };
    });

    //hna ila wsal span.pers l 100% js ghatn9ess l opacity dyal goal div o gha desactivi l user selection + create div element width class 'done' and image inner this div and append it to grandParent ===> Goal div
    if(pers.innerText == "100.0%") {
      let grandParent = pers.parentElement.parentElement;
      grandParent.style.opacity = 0.5;
      grandParent.style.userSelect = "none";

      let doneDiv = document.createElement('div');
      doneDiv.classList.add('done');
      let doneImage = document.createElement('img');
      doneImage.src = "IMG/complete.jpg";
      doneDiv.append(doneImage);

      grandParent.append(doneDiv);
    }
  }
  Goal_Progress();
});

//----- hadi khasa b lcontrol section ---------------
let settings = document.getElementById('settings');
let settIcon = document.querySelector(".para i");
let controls = document.querySelector('.controls');

settings.addEventListener('click', _ => {
  controls.classList.toggle('active');
  settIcon.classList.toggle("fa-spin");
});
//--------------------------------------------------------

//----------- ربط مدخلات قسم التحكم بالجافاسكريبت ----------
let goalName = document.getElementById('goal_name');
let achieve = document.getElementById('achieve');
let go = document.getElementById('go');
//---------------------------------------------------------------




go.addEventListener('click', _ => {
  
  if(goalName.value != '') {

  //han kenhado ach mn goal bghina nthakmo fih mn khilal name dyalo li ghanktbo f control section
  let how = document.querySelector('.goals-section .goal#' + goalName.value.trim() + ' .type span.how');

  let background = document.querySelector('.goals-section .goal#' + goalName.value.trim() + ' .progress span.background');
  let done = document.querySelector('.goals-section .goal#' + goalName.value.trim() + ' .type span.done');
  let pers = document.querySelector('.goals-section .goal#' + goalName.value.trim() + ' .progress span.pers');
  let part = document.querySelectorAll('.goals-section .goal#' + goalName.value.trim() + ' .goal-part span');

  
  //how.forEach(ele => {
    how.innerText = achieve.value;
    background.style.width = (+how.innerText * 100) / +done.innerText + "%";

    if(how.parentElement.parentElement.parentElement.getAttribute("dir") == "rtl") {
      pers.style.right = (+how.innerText * 100) / +done.innerText + "%";
      localStorage.setItem('pers-right' + goalName.value.trim() , (+how.innerText * 100) / +done.innerText + "%");
      console.log((+how.innerText * 100) / +done.innerText + "%")
    } else {
      pers.style.left = (+how.innerText * 100) / +done.innerText + "%";
      localStorage.setItem('pers-left' + goalName.value.trim() , (+how.innerText * 100) / +done.innerText + "%");
    }

    pers.innerHTML = ((+how.innerText * 100) / +done.innerText).toFixed(1) + "%";

//----------------

    localStorage.setItem('achieveValue' + goalName.value.trim() , achieve.value); 
    localStorage.setItem('bg-width' + goalName.value.trim() , (+how.innerText * 100) / +done.innerText + "%");
    // localStorage.setItem('pers-left' + goalName.value.trim() , (+ele.innerText * 100) / +done.innerText + "%");
    localStorage.setItem('pers-inner' + goalName.value.trim() , ((+how.innerText * 100) / +done.innerText).toFixed(1) + "%");

//--------------------





    part.forEach(span => {
      if(+span.getAttribute("data-number") <= +how.innerText) {
        span.classList.add("active");
      } else {
        span.classList.remove('active');
      };
    });

 // });

  if(pers.innerText == "100.0%") {

    let grandParent = pers.parentElement.parentElement;
    grandParent.style.opacity = 0.5;
    grandParent.style.userSelect = "none";

    let doneDiv = document.createElement('div');
    doneDiv.classList.add('done');
    let doneImage = document.createElement('img');
    doneImage.src = "IMG/complete.jpg";
    doneDiv.append(doneImage);

    if(how.parentElement.parentElement.parentElement.getAttribute("dir") == "rtl") {
      doneDiv.style.right = "initial";
      doneDiv.style.left = "208px";
    } 

    grandParent.append(doneDiv);

  } else {

    let grandParent = pers.parentElement.parentElement;

    if(grandParent.lastElementChild.classList.contains('done')) {

      grandParent.removeChild(grandParent.lastElementChild);
      
    };

    grandParent.style.opacity = 1;
    grandParent.style.userSelect = "auto";

  };

  
  };
  
});

  let myGoals = ['Fitness', 'English', "HTML5", "CSS3", "Bootstrap5", "JS", "JQuery", "Cplusplus", "PHP", "Phyton", "القران", "النوافل"];

  myGoals.forEach(ele => {
    let how = document.querySelector('.goals-section .goal#'+ ele +' .type span.how');

    let background = document.querySelector('.goals-section .goal#'+ ele +' .progress span.background');
    // let done = document.querySelector('.goals-section .goal#'+ ele +' .type span.done');
    let pers = document.querySelector('.goals-section .goal#'+ ele +' .progress span.pers');
    let part = document.querySelectorAll('.goals-section .goal#'+ ele +' .goal-part span');

    if(localStorage.getItem('achieveValue' + ele) !== null) {

      how.innerText = localStorage.getItem('achieveValue' + ele);
  
    };

    if(localStorage.getItem('bg-width' + ele) !== null) {
      background.style.width = localStorage.getItem('bg-width' + ele);
    };

    if(localStorage.getItem('pers-left' + ele) !== null) {
      pers.style.left = localStorage.getItem('pers-left' + ele);
    };

    if(localStorage.getItem('pers-right' + ele) !== null) {
      pers.style.right = localStorage.getItem('pers-right' + ele);
    };

    if(localStorage.getItem('pers-inner' + ele) !== null) {
      pers.innerHTML = localStorage.getItem('pers-inner' + ele);
    };

    part.forEach(span => {
      if(+span.getAttribute("data-number") <= +how.innerText) {
        span.classList.add("active");
      } else {
        span.classList.remove('active');
      };
    });

    if(pers.innerText == "100.0%") {
      let grandParent = pers.parentElement.parentElement;
      grandParent.style.opacity = 0.5;
      grandParent.style.userSelect = "none";
  
      let doneDiv = document.createElement('div');
      doneDiv.classList.add('done');
      let doneImage = document.createElement('img');
      doneImage.src = "IMG/complete.jpg";
      doneDiv.append(doneImage);
  
      if(how.parentElement.parentElement.parentElement.getAttribute("dir") == "rtl") {
        doneDiv.style.right = "initial";
        doneDiv.style.left = "208px";
      } 

      grandParent.append(doneDiv);

    } else {
      let grandParent = pers.parentElement.parentElement;
      if(grandParent.lastElementChild.classList.contains('done')) {
        grandParent.removeChild(grandParent.lastElementChild);
      };
      grandParent.style.opacity = 1;
      grandParent.style.userSelect = "auto";
    };


  });



