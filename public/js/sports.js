const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');


button1.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">FUTSAL</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Is that a football fan I'm seeing? Join your squad in this minifootball variant and work
        together to dominate. Claim the title of G.O.AT. in this fun and action packed sport.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  VISHVANTH & VIJAY D
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918248465595'">+91 8248465595</button></h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917448997456'">+91 7448997456</button></h4>
        </br>
        <h4 style="color:#00b7ff;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 250Rs/Team</h4>
        
        </br>
            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Only college teams are permitted to compete</li>
            <li>It will be a 5v5 knockout match. One of them will be a goalkeeper.</li>
            <li>Subs on fly.</li>
            <li>No offsides.</li>
            <li>Goalkeeper punts are not allowed.</li>
            <li>The ball must stay below head height. Otherwise, the opposition side will be awarded possession & a free kick.</li>
            <li>Sliding tackles & rough playstyle is not encouraged.</li>
            <li>There will be no side-line throw-ins. Instead, the ball is placed on the ground & passed to a teammate.</li>
            <li>During free kicks and corners, the opposing team must be at least 5 yards away from the ball.</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <li>Referee’s decision is final and arguments are not encouraged.</li>
            </ul>
           

            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/ipwcJG3QDhCAKRxh9'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>
            
        </div>
    </div>
    `;
});

button2.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">GULLY CRICKET</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">What is more fun than playing with your buddies in your "gully" with your own rules. This
        is your opportunity to be the "Captain cool" or "The Run machine" of your group.
        </p> <br>
        <div><button class="button-js-1 btn" style="width: 50%;" onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
       
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  RAM PRAKESH & AJITH
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+916383250361'">+91 6383250361</button></h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917094046311'">+91 7094046311</button></h4>
        </br>
        <h4 style="color:#00b7ff;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 250Rs/Team</h4>
        
        </br>
            <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Only college teams are permitted to compete</li>
            <li>No accommodation is provided</li>
            <li>Each squad must have 6 players.</li>
            <li>It will be a six over match.</li>
            <li>Only underarms are permitted to bowl.</li>
            <li>Only fours are tallied and there will be no sixes or singles.</li>
            <li>The umpire’s decision is conclusive.</li>
            </ul>
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/s4wBM3NjT1qEjeUK7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});


button3.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">VOLLEY BALL</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Demonstrate your skills in this team sport in which you and your opponents are
        only separated by a net. Smash and grind the ball to be declared the best in the field.</p> <br>
        <div><button class="button-js-1 btn" style="width: 50%;" onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
        
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  NETHAJI 
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919003856676
        '">+91 9003856676
        </button></h4>
        </br>
        <h4 style="color:#00b7ff;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 250Rs/Team</h4>
        
        </br>
            <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Only college teams are permitted to compete.</li>
	<li>A valid college id is mandatory.</li>
	<li>Prior registration is required, either online or on spot before (9:30AM)</li>
	<li>No accommodation is provided.</li>
	<li>No re-entry is permitted and the entry fee is non-refundable.</li>
	<li>Referee’s decision is final and arguments are not encouraged.</li>
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/6Cj9NFAEAfaEk2U76'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button4.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CHESS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Every chess master was once a novice; here is your chance to prove that you are not a
        pawn, but a king. We're giving you a chance to shine in the battle over the board.
        </p> <br>
        <div><button class="button-js-1 btn" style="width: 50%;" onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
        
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  AJHAY RAM
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918220516208
        '">+91 8220516208
        </button></h4>
        </br>
        <h4 style="color:#00b7ff;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 50Rs/Head</h4>
        
        </br>
            <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Only college teams are permitted to compete.</li>
            <li>No accommodation is provided.</li>
            <li>The tournament will be held in a knockout format.</li>
            <li>The referee’s decision is final.</li>
                
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/yjadcDD2HkdrAjGZ7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>        </div>
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
