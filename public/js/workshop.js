const popUpDiv = document.querySelector(".pop-up-div");
const popUpClose = document.querySelector(".pop-up-close");
const popUpContainer = document.querySelector(".pop-up-container");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const button10 = document.querySelector(".button10");

button1.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">VEHICLE BUILDING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">A call for all the car aficionados there! Start from the scratch and frame the vehicles
        by the way you love them.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  GOKUL
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919884800045
        '">+91 9884800045
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college teams are permitted to compete.</li>
	<li>A valid college ID and Bonafide certificate is mandatory.</li>
	<li>Prior registration is required, either online or on spot before (9:00 AM)</li>
	<li>No re-entry is permitted and the entry fee is non-refundable.</li>
	<li></li>
	<h1>DESCRIPTION:</h1>
	<li>A call for all the car aficionados there! Start from the scratch and frame the vehicles by the way you love them.</li>
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/HpzAajhrQEvXbtqY7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

button2.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">ROBOTICS</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Robotics is a furcate of learning paths about design, manufacture & conception. Grasp
        the opportunity to learn the spatial relations about equipment as a neophyte with industrial
        experts.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  KANISHKA 
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+918072018151
        '">+91 8072018151
         </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college teams are permitted to compete.</li>
	<li>A valid college ID and Bonafide certificate is mandatory.</li>
	<li>Prior registration is required, either online or on spot before (9:00 AM)</li>
	<li>No re-entry is permitted and the entry fee is non-refundable.</li>
	<li></li>
	<h1>DESCRIPTION:</h1>
	<li>Robotics is a furcate of learning paths about design, manufacture & conception. Grasp the opportunity to learn the spatial relations about equipment as a neophyte with industrial experts.</li>            
    
    </ul>
                        <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/2fQBErmJ2zSWTLG2A'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

button3.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">CNC</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Curious in addressing complicated mechanical challenges determined by pre-programmed
        machines? Enhance your path about numeric control operations to supplement this approach.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  JAYASUDHAN
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919500890477'">+91 9500890477</button></h4>
        
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <li></li>
            <h1>DESCRIPTION:</h1>
            <li>Curious in addressing complicated mechanical challenges determined by pre-programmed machines? Enhance your path about numeric control operations to supplement this approach.</lh1
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/TqTFU3jHbSxhBtZj9'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

button4.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">AERO MODELLING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Astonishing way to learn about aerodynamics as well as to develop skills in
        problem-solving, design, and craftsmanship. Seize this opportunity & unleash your creativity,
        imagination and passion for aviation.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  ARUN V
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919841445400
        '">+91 9841445400
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <li></li>
            <h1>DESCRIPTION:</h1>
            <li>Astonishing way to learn about aerodynamics as well as to develop skills in problem-solving, design, and craftsmanship. Seize this opportunity & unleash your creativity, imagination and passion for aviation.</lh1  
            </ul>
           
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/1pQpoZJCsWgsExZh7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button5.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">INDUSTRIAL AUTOMATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Industrial automation is the second stage beyond mechanization. Here’s an excellent
        opportunity to get extensive knowledge in the field of industrial automation with the support of
        highly experienced experts.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  ARAVIND A
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919789847726
        '">+91 9789847726
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college teams are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <h1>DESCRIPTION:</h1>
            <li>Industrial automation is the second stage beyond mechanization. Here’s an excellent opportunity to get extensive knowledge in the field of industrial automation with the support of highly experienced experts.</li> 
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/wnHpLBwmSUC2KTpo8'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button6.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">3D PRINTING</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Want to develop expertise in this disruptive technology? Catch the wave and take a
        step closer to the future.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  HATHIKAL KAVYA
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919445839238
        '">+91 9445839238
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
	<li>A valid college ID and Bonafide certificate is mandatory.</li>
	<li>Prior registration is required, either online or on spot before (9:00 AM)</li>
	<li>No re-entry is permitted and the entry fee is non-refundable.</li>
	<li></li>
	<h1>DESCRIPTION:</h1>
	<li>Astonishing way to learn about aerodynamics as well as to develop skills in problem-solving, design, and craftsmanship. Seize this opportunity & unleash your creativity, imagination and passion for aviation.</lh1

            </ul>
           
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/m6xxD2PBiDULt4Zc6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button7.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">ENTREPRENEURSHIP DEVELOPMENT</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Pursue the vision rather than the money. The money will eventually follow you. Take
        advantage of the opportunity to forge your own path and guide others.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  SHIVARAM
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919360425604
        '">+91 9360425604
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <li></li>
            <h1>DESCRIPTION:</h1>
            <li>Pursue the vision rather than the money. The money will eventually follow you. Take advantage of the opportunity to forge your own path and guide others.</lh1 
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/KNcaCxvMXWH22raj6'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button8.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">DRONE</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Explore the sophisticated and insightful experience by working on drone kits. Grasp this
        opportunity and experience the top view of the world.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  DHANUSH
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917010620384
        '">+91 7010620384
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <h1>DESCRIPTION:</h1>
            <li>Explore the sophisticated and insightful experience by working on drone kits. Grasp this opportunity and experience the top view of the world.</lh1
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/QE4FvXFUcJw7StmD7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button9.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">WELDING TECHNOLOGY</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Explore the sophisticated and insightful experience by working on drone kits. Grasp this
        opportunity and experience the top view of the world.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  DHANUSHA
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+919361451529
        '">+91 9361451529
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <h1>DESCRIPTION:</h1>
            <li>Explore the sophisticated and insightful experience by working on drone kits. Grasp this opportunity and experience the top view of the world.</lh1
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/4jeFfUQunRu8GzVK7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});
button10.addEventListener("click", () => {
    popUpDiv.style.display = "block";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">NEW ENERGY</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;">Explore the sophisticated and insightful experience by working on drone kits. Grasp this
        opportunity and experience the top view of the world.
        </p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  MANI BHARATH
        </h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='tel:+917338792315
        '">+91 7338792315
        </button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <ul>
            <li>Only college students are permitted to compete.</li>
            <li>A valid college ID and Bonafide certificate is mandatory.</li>
            <li>Prior registration is required, either online or on spot before (9:00 AM)</li>
            <li>No re-entry is permitted and the entry fee is non-refundable.</li>
            <h1>DESCRIPTION:</h1>
            <li>Explore the sophisticated and insightful experience by working on drone kits. Grasp this opportunity and experience the top view of the world.</lh1
            </ul>
            
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/zKvwo3K7vuuDKoMX9'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
});

function closeTag() {
    popUpDiv.style.display = "none";
    popUpContainer.innerHTML = `
    <div class="pop-up-card">
    <h1 class="heading-pop-up">PAPER PRESENTATION</h1>
        <span class="pop-up-close" onClick="closeTag()">&times;</span>
        <h1>Description</h1>
        <p style="width: 75%;"></p> <br>
        <p style="width: 75%;">Paper presentation provides a platform for young minds to be the technology changers with their ideas and just let it flow through their words. Paper presentation is where the students can share their knowledge and improvise their communication skills.</p> <br>
        <div><button class="button-js-1 btn"  onclick="window.location.href='/views/customary-rules.html'">GENERAL RULES</button><br><br>Before going ahead, Find the general rules attatched above</div>

        <div class="pop-up-text">
        <h4 style="color:#FFD700;;">Event  &nbsp;coordinator &nbsp; &nbsp;: &nbsp; &nbsp;  K Pradeep</h4>
        <h4 style="color:#FFD700;;">Contact &nbsp; No &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; <button class="button-js-call" onclick="window.location.href='phone-number'">+91 phone-number</button></h4>
        </br>
        <h4 style="color:#FFD700;;">Entry  &nbsp;Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  : &nbsp; &nbsp; 100Rs/Head</h4>
        
        </br>
            <h1>RULES & REGULATIONS</h1>
            <ul>
                <li>The team contains only two members.</li>
                <li>Team members can be from different colleges.</li>
                <li>Participants are requested to register in advance.
                </li>
                <li>Topics can be from any mechanical domain.</li>
                <li>Panel decision will be final.</li>
                <li>Participants are requested to login their corresponding Google meet link, 5 minutes before the event.</li>
                <li>Participants are requested to join their corresponding WhatsApp/Telegram group.</li>
                <li>Submit your manuscript through the link below</li>
                <li>College ID card and Bonafide certificate is mandatory</li>
                <li>Last date for the submission: MAY 03, 2021 (6:00PM)</li>
            </ul>
           
                    <div class="button-js-div"><button class="button-js-2 btn"  onclick="window.location.href='https://forms.gle/53Za5J1cGMW8CpcC7'">Register now</button>
            <button class="button-js btn"  onclick="window.location.href='/views/events.html'">Back to events</button></div>        </div>
    </div>
    `;
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
