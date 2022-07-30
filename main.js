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

    document.addEventListener("DOMContentLoaded",tv);
function tv() {
	var cnv = document.getElementById("static"),
		c = cnv.getContext("2d"),
		cw = cnv.offsetWidth,
		ch = cnv.offsetHeight,
		staticScrn = c.createImageData(cw,ch),
		staticFPS = 30,
		isStatic = false,
		staticTO,
		gifData = [
			{
				file: "https://i.ibb.co/chSK1Zt/willie.gif",
				desc: "Steamboat Willie (Mickey Mouse) steering a ship"
			},
			{
				file: "https://i.ibb.co/0FqQVrj/skeletons.gif",
				desc: "Spooky scary skeletons sending shivers down your spine"
			},
			{
				file: "https://i.ibb.co/Hpnwgq2/kingkong.gif",
				desc: "King Kong waving on Empire State Building",
			},
			{
				file: "https://i.ibb.co/fp0PSjv/tracks.gif",
				desc: "Looking at train tracks from behind a train",
			},
			{
				file: "https://i.ibb.co/5FM7BtH/nuke.gif",
				desc: "Nuclear explosion at sea",
			}
		],
		gifs = [],
		channel = 0;

	for (g in gifData) {
		gifs.push(new Image());
		gifs[g].src = gifData[g].file;
		gifs[g].alt = gifData[g].desc;
	}

	/* Static */
	var runStatic = function() {
		isStatic = true;
		c.clearRect(0,0,cw,ch);

		for (var i = 0; i < staticScrn.data.length; i += 4) {
			let shade = 127 + Math.round(Math.random() * 128);
			staticScrn.data[0 + i] = shade;
			staticScrn.data[1 + i] = shade;
			staticScrn.data[2 + i] = shade;
			staticScrn.data[3 + i] = 255;
		}
		c.putImageData(staticScrn,0,0);

		staticTO = setTimeout(runStatic,1e3/staticFPS);
	};
	runStatic();

	/* Channels */
	var changeChannel = function() {
		var displayed = document.getElementById("displayed");

		++channel;
		if (channel > gifData.length)
			channel = 1;

		this.classList.remove("pristine");
		this.style.transform = `rotate(${channel * 360/(gifData.length + 1)}deg)`;

		cnv.classList.remove("hide");
		displayed.classList.add("hide");

		if (!isStatic)
			runStatic();

		setTimeout(function(){
			cnv.classList.add("hide");
			displayed.classList.remove("hide");

			displayed.src = gifs[channel - 1].src;
			displayed.alt = gifs[channel - 1].alt;

			isStatic = false;

			clearTimeout(staticTO);
		},300);
	};
	document.getElementById("channel").addEventListener("click",changeChannel);
}