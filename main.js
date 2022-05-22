//*********tab feature of games **********/

/*
1. get the name of the game
2. the name of the game is the id of the target div
3. remove hidden from the target div
4. add hidden to all the others.



*/



function openGame(gameName) {
    let tabContent, tabLinks;
    tabContent = document.querySelectorAll('.playGame'); //list of the divs to change up
    //hide them all at first
    let liveGame = document.getElementById(gameName);
    for (let i = 0; i < tabContent.length; i++) {
       tabContent[i].classList.add('hidden');
       tabContent[i].classList.remove('pulsatingBorder');
    }
    tabLinks = document.getElementsByClassName('tabLinks'); //list of the tabs to click on for event
    //change the target to remove the class
    liveGame.classList.remove('hidden');
    liveGame.classList.add('playGame');
    // document.getElementById(gameName).classList.add('bigIframe');
    // if (liveGame.id = "YesOrNo") {
    //     liveGame.classList.add('pulsingBorder');
    // }


}

// function openGame(event, gameName) {
//     let i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName('tabcontent');
//         for (i = 0; i < tabcontent.length; i++) {
//             tabcontent[i].style.display = 'none';
//         }
//         tablinks = document.getElementsByClassName('tablinks');
//         for (i = 0; i < tablinks.length; i++) {
//             tablinks[i].className = tablinks[i].className.replace('active',"");
//             document.getElementById(gameName).style.display = 'flex';
//             document.getElementById(gameName).style.justifyContent = 'center';
//             document.getElementById(gameName).style.alignItems = 'center';
//             // document.getElementById(gameName).style.height = '550px';
//             // document.getElementById(gameName).style.width = '400px';
//             document.getElementById(gameName).style.margin = '0';
//             event.currentTarget.className += "active";
//             // document.querySelector('.court').style.display = 'none';
//         }
//     }
    //**********Hamburger menu */

    // const mediaQueryForHamburglar = window.matchMedia('(max-width: 610px)');
    // const mediaQueryForHamburglarMax = window.matchMedia('(min-width: 610px)');
    // const hamburgerIcons = document.querySelectorAll('.mobileIcon');
    // if (mediaQueryForHamburglar.matches) {
    //     // console.log('mediaQuery match');
    //     // hamburgerIcon.innerHTML = '<i class="fa-solid fa-code"></i>';

    //     for (i = 0; hamburgerIcons.length; i++) {
    //         hamburgerIcons[i].classList.toggle('hidden');
    //     }
    // }
    // else if (mediaQueryForHamburglarMax.matches){
    //     console.log('else happened');
    //     // hamburgerIcon.innerHTML = '<a href="index.html"><i class="fa-solid fa-code"></i></a>';
    //     for (i = 0; hamburgerIcons.length; i++) {
    //         hamburgerIcons[i].classList.toggle('hidden');
    //     }
    // }
    // // const hamburgerIcon = document.querySelector('.mobileIcon');
    // // hamburgerIcon.addEventListener('click',hamburglar);
    // function hamburglar () {
    //     document.querySelector('.mobileIcon').classList.toggle('hidden');
    //      for (i = 0; i < mobileLinks.length; i++) {
    //           mobileLinks[i].classList.toggle('hidden');
    //       }

    // }
