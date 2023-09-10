const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');


button1.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PHOTOGRAPHY</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">One touch of nature makes the whole world kin. Showcase your stills, let the world see the memories you captured through your lens.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  ARUNMOZHILDEVAN
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917200243998
        '">+91 7200243998
        </button></h4>
        </br>
        
        </br>
            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Participants must submit their Instagram profile for verification by the panel.</li>
	
	<li>The image must be authentic and original.</li>
	
	<li> Only one entry per person is allowed.</li>
	
	<li> Open themed concept.</li>
	
	<li>Auto likes are strictly prohibited.</li>
	
	<li> Images are to be taken by DSLR/mobile.</li>
	
	<li>Only short lens is allowed for DSLR.</li>
	
	<li>Any type of alteration is prohibited.</li>
	
	<li> Be respectful of cultural norms.</li>
	
	<li> The final winners will be selected by a panel of judges and based on the number of likes received.</li>
    </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/YLr7R9YrVpH42ToC7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html">Back to events</button></div>
            
        </div>
    </div>
    `;
});

button2.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">MEME-O-MANIA</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Memes have become a ubiquitous form of online communication and expressing
        humor in a concise way. Reveal yours and seize the prize.
        </p> <br>
        <div><button class="button-js-1 btn" style="width: 50%;" onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
       
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  GANESH V N
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918438893284
        '">+91 8438893284
        </button></h4>
        </br>
        
        </br>
            <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>In order to participate in the event, participants are required to submit their Instagram profiles for verification to the panel.</li>
            
            <li>Only one entry per participant is permitted</li>
            
            <li>The concept is open-themed, allowing for a wide range of ideas and interpretations. </li>
            
            <li>Participants must not use software to generate likes.</li>
            
            <li>Memes can be submitted via Google forms</li>
            
            <li>The event is limited to image memes; videos are not permitted.</li>
            
            <li>We do not encourage the inclusion of political, violent, or adult content</li>
            
            <li>Please ensure that your creation is original and does not infringe on any copyrights.</li>
            
            <li>The winners will be determined by the number of likes</li>
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ZFWy6AyivjZrBEiy7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

button3.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">DOODLE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Memes unite the funny bones of the online world and serve as a forum for social commentary, pop culture observations, and photo editing skills. Exemplify your abilities and claim your prize.</p> <br>
        <div><button class="button-js-1 btn" style="width: 50%;" onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
        
        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  K Pradeep</h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='phone-number'">+91 phone-number</button></h4>
        </br>
        
        </br>
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>This contest has two rounds.
                o	First, an online round from which finalists are chosen based on social media likes.
                o	Second is the offline round (at the time of the symposium) in which contestants create their doodles in the allotted time.
                </li>
                <li>Finalists who progressed to round 2 must appear in the offline round; if they do not, they will be disqualified.</li><li>Your doodle are to be sent to this mail ( )</li><li>For the second round, no accessories will be offered.</li><li>Participation certificate will be provided.</li>
            </ul>
            
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/53Za5J1cGMW8CpcC7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});



function closeTag() {
	popUpDiv.style.display = 'none';
}
const video = document.querySelector('.section-container video source');

const setHeroVideoSize = () => {
	if (innerWidth <= 800) {
		video.setAttribute('src', '../assets/hero-1.mp4');
	} else {
		video.setAttribute('src', '../assets/hero.mp4');
	}
};

window.addEventListener('resize', setHeroVideoSize);
window.addEventListener('load', setHeroVideoSize);
