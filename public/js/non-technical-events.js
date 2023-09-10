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
    <h1 class="heading-pop-up">CONNEXXIONS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Are you an expert in wordplay? wordsmith pro? Good at guessing? Then Buckle up with
        your buddies because this event is for you.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;    SANTHOSH  
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917904286985
        '">+91 7904286985
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Team</h4>
        
        </br>


            <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Only college teams are permitted to compete (team of two-four).</li>
	
            <li>There will be a total of 2 rounds.</li>
            
            <li>• Students from different                    colleges can form a team.</li>
            
            <li>• Any team member who engages inappropriate behaviour will be disqualified.</li>
            
            <li>• Each hint will be given in 20 seconds.</li>
            
            <li>• If the timer runs out, the speaker must stop speaking or lose points.</li>
            
            <li>• The winners will be awarded with the grand prize.</li>
            
            <li>• Judges decision is final</li>
            </ul>
           
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/gZ6LUpTdbceXfQSP9'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

button2.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">GRAB A MINUTE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Rack your minds intensively.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  JAIWANTH
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919944663508
        '">+91 9944663508
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 50Rs/Head</h4>
        
        </br>



            <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Contest will be conducted in 2 rounds. </li>
	<li>2 participants will be teamed up at random. </li>
	<li>Pictures will be displayed for 10 seconds.</li>
	<li>Participants will have to recognize the pictures.</li>
	<li>The 2 randomly selected participants will face each other for the time being.</li>
	<li>15 secs will be provided for the participants to put up for what they saw in the display. </li>
	<li>If 1 participant has failed to answer, the other will get the chance to answer again. </li>
	<li>As for round 2 the selected participants will get to see the display for 15 secs. </li>
	<li>As of again 2 participants will face each other. </li>
	<li>30 secs of time will be provided to come up with what they saw in the display.</li>
	<li>If 1 participant has failed to answer, the other will get the chance to answer again.</li>
	<li>Judges will provide points based on the answers. </li>
	<li>Total score of an individual will decides the participant's places.</li>
	<li>The judge's decision will be final.</li></ul>
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/qJkmdMKw99D3aRLB6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});



button3.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">GUESS THE LYRICS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Standout event and a way to take a break from the conventional form of debating. Make a
        convincing point to demonstrate your speaking abilities.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  VISHAL
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919361360719
        '">+91 9361360719
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 50Rs/Head</h4>
        
        </br>

        <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Event will be conducted in 2 rounds. </li>
            <li>Each participant is allowed to take only 1 topic provided by the coordinators.</li>
            <li>Points will be awarded by the judges based on the performance.</li>
            <li>10 participants will qualify for Round 2. </li>
            <li>In Round 2, teams will be segregated accordingly.</li>
            <li>Each team will consist of 2 participants.</li>
            <li>Topics will be given to each team. </li>
            <li>1 member of the team will be talking on the topic while the distracts the speaker.</li>
            <li>Person to talk first can be determined among the team members. </li>
            <li>Score will be given according to the points for both members of the team. </li>
            <li>Final winners will be announced by tallying the total points scored in both the rounds</li>
            </ul>
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/zLTUwXMBRqpKTGN16'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">AD ZAB</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Do you think you have what it takes to become the wolf of Wall Street? Display your
        marketing prowess.        
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; AKASH
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917305379678
        '">+91 7305379678
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100RS/Team</h4>
        
        </br>

        <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Registration is mandatory</li>
            <li>Participants can register to the event through both online and offline with an entry fee</li>
            <li>       A team can consists of 2 to 5 members and participants must be a college student</li>
            <li>     Any product will be given to your team by lot method , for which you have to advertise</li>
            <li>      The event consists of two rounds: </li>
            <li>                In the first round ; After choosing your product,   you will be given 5 mins as  preparation time  then A high scored team will be qualified for second round </li>
            <li>      The performance time limit is approximately 4 to 7 mins  and a warning bell will be given after 5 mins of your performance.</li>
            <li>        In the second round, the same procedure will be followed.</li>
            <li>        The winning team will be awarded with exciting cash prizes.</li>
            <h1>Judging criteria:</h1>
            <li>The  participants should advertise the product  in a funny fashion with creativity.</li>
	<li>Slogans and cinema dialogues can be used while performing </li>
	<li>Your speaking skills and people attraction will be judged </li>
	<li>Vulgarity or offensive terms may lead to disqualification </li>
	<li>All conversations can be in Tamil or English and The Judges decision will be final</li>
            
            </ul>
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/5G9cZhX9ub1KRNye7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});



button5.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CINE FLIX</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Ready to tell a kutty story? We pay attention and listen to you.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  JAI TRINITY RAJ
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919629372043
        '">+91 9629372043
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 50Rs/Head</h4>
        
        </br>

        <h1>RULES & REGULATIONS</h1>
            <ul>
            <li>Event will be conducted as 2 rounds. </li>
            <li>Topics will be provided by the co ordinators.</li>
            <li>Each participant will be given time of 2 mins for preparation.</li>
            <li>Each participant will have to deliver their story for a minimum of 5 mins to Maximum of 6 mins.</li>
            <li>Top 5 participants will be chosen based on the points awarded by the judges. </li>
            <li>The finalised 5 participants will move further for round 2.</li>
            <li>Finalist participants will be given 3 mins of time for preparation on the topic provided.</li>
            <li>Each participant will have to convey their story for a minimum of 7 mins. </li>
            <li>Judges decision is final.</li>            </ul>
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/2F1cWFTUoNbe2dpV9'">Register now</button>
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
