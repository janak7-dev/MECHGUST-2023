const popUpDiv = document.querySelector('.pop-up-div');
const popUpClose = document.querySelector('.pop-up-close');
const popUpContainer = document.querySelector('.pop-up-container');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');
const button10 = document.querySelector('.button10');

button1.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">TECH QUIZ</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Demonstrate your technical abilities to become the all-time prodigy of tech quizzes.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; ADITYA T
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919677215322'">+91 9677215322        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>All participants must have their college Identification cards to be eligible for the event.</li>
            <li>          Registration prior to the day of the event is required to ensure participation.</li>
            <li>          An Individual participant or a team of 2-3 participants are only permitted to take part.</li>
            <li>          The decision of the panel will be considered as final.</li>
            <h1>Event Rules:</h1>
            <li>           The TECH QUIZ will constitute questions from core Mechanical field, Latest Science & Technology and Practical knowledge.</li>
            <li>         </li>
            <li>           Participants will go through two rounds with bonus questions on their way to the finale round which will be a showdown between the top two teams.</li>
            <li>           May the better Engineer(s) win.</li>
                
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/G89zhR2HoHeZdceL8'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button2.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">There is no innovation and creativity without failure. An opportunity to showcase your ability and 
        comprehensive understanding of your disciplines. Mesmerize and attract your audience with your 
        innovative presentation.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  SARANUKUMAR T
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917305520278
        '">+91 7305520278
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Maximum number of participants in a Team is 3.</li>
	The topics of the papers can be chosen on your own. It is advisable that the presentation
	 focuses on one particular topic. Report should be well comprehended, albeit advanced
	which could appeal to an undergraduate. Kindly contact the coordinator for any
	clarifications.</li>
	<li>Abstract should not exceed more than 250 words and Paper should not exceed 15 pages.</li>
	<li>Bring your college I-Card & receipt on event day.</li>
	<liKindly bring your PowerPoint presentation on a CD or on a pen-drive</li>
	<li>Soft-copies of the submitted paper and PowerPoint presentations must be in the .docx 
	format.</li>
	<li>The teams will get 10 minutes for presentation and followed by question and answer 
	session.</li>
	<li>Persons from different institutions can be a part of the same team. However, one person
	may not be a part of multiple teams for the same event.</li>
	<li>Paper must contain index, list of figures, list of tables, abstract, introduction, point wise
	description of subject and conclusion, Result and references.</li>
	<li>Paper must be preceded by a cover page specifying the title of the paper, names of authors
	and their college names.</li>
	<li>The decision of judges will be final and no arguments or appeal will be entertained.</li>   
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/HbDvnmthZJ2ZAwH37'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button3.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CAM</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Transform the engineering designs into end products which helpful to enrich your knowledge & 
        career in designing field.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; TANUSH KUMAR
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917708169842
        '">+91 7708169842
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>All participants should bring their own laptops with the CAM software preinstalled.</li>
            <li>Any CAM software can be used.</li>
            <li>Individual participants and a team of 2 members are allowed.</li>
            <li>Online registration and on the spot registration can be done.</li>
            <li>Marks will be allotted by the juries based on your performance.</li>  
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/XZJk4JDoGMiWJUfv5'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button4.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CAD MODELLING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Consider your design route and investigate answers to challenging challenges as you prepare for jobs 
        in architecture, engineering, and digital arts.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  MONISH M 
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917550123364'">+91 7550123364
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>To participate in the event/program, a College ID or Bonafide Certificate is necessary.</li>
            <li>Participants who pass the preliminary round will earn the opportunity to compete in the finals.</li>
            <li>Participants will be tested on their knowledge through a series of multiple choice questions.</li>
            <li>The decision rendered by the panelists will be conclusive and final.</li>
            <li>Softwares:-
            <ul>
                <li>CATIA,SOLIDWORKS,AUTOCAD.</li>
            </ul></li>
              
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/Hvxt4vamEL2eP3Me8'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});

button5.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">WATER ROCKETRY</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Create a water rocket within the required parameters that is important enough to get your squad to 
        the finish line and earn you the title of finest water rockeeter in town.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp; PRAVEEN RAJ & T MOHAN

</h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917358507359'">+91 7358507359</button></h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919345775096'">+91 9345775096</button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Only college teams are permitted to compete (team of two).</li>
            <li>Rocket should be made on the spot within the time limit.</li>
            <li>Only cardboard should be used for wings, other than cardboard should not be used</li>
            <li>A single 2.25litre water bottle must be used as the pressure vessel & no tinted bottles are permitted.</li>
            <li>The only allowed source of propulsion will be water and air pressure.</li>
            <li>The pressure must not exceed 60 psi.</li>
            <li>Metal, glass, hard plastics, spikes and any kind of antennas must not be utilized to construct your rocket.</li>
            <li>(These components are hazardous and they might hurt the operator as well as anyone in the vicinity of the water rocket launcher)</li>
            <li>The usage of parachutes is strictly prohibited.</li>
            <li>If your rocket seems to be harmful, performs dangerously or follows an unstable path, your team will be disqualified.</li>
            <li>Only one chance will be provided Launching</li>
            <li>Only the official rocket launch will be assessed.</li>
            <li>The winner will be determined by the horizontal distance covered by the rocket.</li>
            <li>If there is a tie, the honors will be allocated based on the rocket strength.</li>
            <li>The launch pad, Air compressor and water will be provided.</li>
                
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/hj9Kom9qTuhkY5wT9'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>
            
        </div>
    </div>
    `;
});
button6.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">MR. MACHINIST</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Precision and perfection are distinguishing characteristics in the mechanical sphere. Demonstrate 
        your ability to create.
        </p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  MOHANRAJ M 
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919003212966
        '">+91 9003212966
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Please find below the details of the two rounds, </li>
            <ul>
            <li>ROUND1: Tool/Machine identification o Round</li>
            <li>ROUND2: Model creation for the given diagram job.</li>
            </ul>
            <li>Time consumption and accuracy of the job will be taken into account for the final decision.</li>
            <li>Tool room safety precautions are to be followed by the participants throughout the event.</li>
            <li>Damaging of tools or machines will lead to disqualification.</li>
            <li>The Judges’ decision is conclusive.</li>
            <li>Viva questions will be asked for final selection in the event of a tie.</li>
                          
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/EZrqfmoWCsBvpnMo6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button7.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PROJECT PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Efficacious way to present your ideas and explaining about it in a aspiring way. Engage & attract the 
        audience by your mastery.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  SRI VARDHAN
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918825526568
        '">+91 8825526568
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Both Analysis projects and Functioning models are welcomed.</li>
            <li>     Functioning models need to be brought to the event for explanation presentation isn’t mandatory.</li>
            <li>     Analysis projects kindly follow the following specified framework for the presentation:</li>
                <ul><li>            All competitors must have their college Identity cards to be eligible for the event.</li>
                    <li>            Maximum number of members in a Team is 2,</li>
                    <li>            15-minute time will be allotted for the team's presentation (including Q&A),</li>
                    <li>            Aim for a maximum of 15 slides,</li>
                    <li>            Ensure sure all axes in graphs are labelled. and add one topic per slide,</li>
                    <li>            While utilising videos, generate a backup slide with screen shots </li>
                    <li>               of the key results. in case of using (canva) template,</li>
                    <li>            Have your presentation in a PDF format, additionally for the </li>
                    <li>               assurance of compatibility.</li>
                    <li>            The decision of jury will be final and no further appeal will be entertained</li>
                </ul>
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/5FpAkU6XNzQ1t3oe7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button8.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">FINDERS KEEPERS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Too tired with the conventional treasure hunt? Prepare your heads and put on your thinking caps! 
        Let's make the Hunt more exciting.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  KESHAVARSHINI K
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919003585421
        '">+91 9003585421
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Contest will be conducted in Batch wise segregation.</li>
            <li>Participants will be segregated into 3 teams at random. </li>
            <li>Each team consists of 2 participants.</li>
            <li>Clues will be displayed as QR code.</li>
            <li>Participants are requested to scan their respective QR with their team name on them. </li>
            <li>6 clues will be provided. </li>
            <li>The team to find the clues and the parts will be finalized as winners.</li>
            <li>Team which assembles the parts will be awarded bonus points. </li>
            <li>Each team will have 15 mins of time to Find the parts and assemble them.</li>
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/6DSrJQWuqvptCjpe6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button9.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CYCLE ASSEMBLY</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Life is similar like riding a bicycle. You must keep moving to maintain your equilibrium. Here's a test 
        to determine how quickly you can assemble components of dismantled bicycles.</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  BALAJI & KAVIYARASAN
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='+917550377476'">+91 7550377476</button></h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='+919940529068'">+91 9940529068</button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>Teams should consist of 2 to 3 members only.</li>
            <li>Round 1 is the MCQ Question.</li>
            <li>Round 1 cleared teams are eligible for Round 2.</li>
            
            <li>Round 2 is cycle assembly.</li>
            
            <li>Time will be considered and monitored.</li>
            
            <li>An ID Card or Bonafide is mandatory.</li>
            
            <li>There will be Round 3 in case of a tie.</li>
            
            <li>Panel decision will be final.</li>
        
            <li>Not allowed to use electric gadgets in the room.</li>
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/BLTSggikGmE5abs59'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
    </div>
    `;
});
button10.addEventListener('click', () => {
	popUpDiv.style.display = 'block';
	popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">TECH PUZZLE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">It's a puzzle! Not the type you believe it's unique in every way. Look out for a Tech</p> <br>
            <div><button class="button-js-1 btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>
            
            
        <div class="pop-up-text">
        <h4 style="color:#00b7ff;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  SUVAJI M
        </h4>
        <h4 style="color:#00b7ff;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='7305935988
        '">+917305935988
        </button></h4>
        </br>
        
        </br>
      
        

            <h1>EVENT RULES & REGULATIONS</h1>
            <ul>
            <li>In order to participate in Tech Puzzle, participants should register in the link below. </li>
            <li>A team of three (3)participants are only permitted to take part in the event. </li>
            <li>Puzzles were based on the parts and process of the core of the Mechanical field.</li>
            <li>Participants can discuss with their team members and answer the question. </li>
            <li>A member of the participants needs to arrange the puzzle by the instructions given by their  other two team members. </li>
            <li>45 seconds will be given to answer the questions.</li>
            <li>Participants were allowed to use their one lifeline for the hint.</li>
            <li>Hints are given only by the panel members. </li>
            <li>Negative points are included. (Not in the pass questions) </li>
            <li>The winners will be selected according to the score.</li>
                
            </ul>
            
            
            <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/28uiocrXvL98rimy5'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='https://janak7-dev.github.io/Mechgust-2023/views/events.html'">Back to events</button></div>            
        </div>
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
