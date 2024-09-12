const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement;
const skillsContainer = document.getElementById('skills-container') as HTMLDivElement;
let skillCount: number = 0;

addSkillButton.addEventListener('click', () => {
    // Create a new div container for the skill
    const newDiv = document.createElement('div');
    newDiv.classList.add('skills-form');
    newDiv.setAttribute('id', `skill-${skillCount}`);

    // Create a new label
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `skills-${skillCount}`);
    newLabel.textContent = 'Skills:';

    // Create a new input field
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'skills';
    newInput.id = `skills-${skillCount}`;
    newInput.classList.add('user-skills');

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';

    // Use an IIFE to capture the current value of skillCount
    (function (count: number) {
        removeButton.addEventListener('click', () => removeSkill(count));
    })(skillCount);

    // Append label, input, and remove button to the new div
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newDiv.appendChild(removeButton);

    // Append the new div to the skills container
    skillsContainer.appendChild(newDiv);

    // Increment skill count
    skillCount++;
});

// Function to remove a skill input box
function removeSkill(id: number): void {
    const skillToRemove = document.getElementById(`skill-${id}`);
    if (skillToRemove) {
        skillsContainer.removeChild(skillToRemove);
    }
}
//handling education
const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
const educationContainer = document.getElementById('Education-container') as HTMLDivElement;
let educationCount: number = 0;

addEducationButton.addEventListener('click', () => {
    // Create a new div container for the education form
    const newDiv = document.createElement('div');
    newDiv.classList.add('education-form');
    newDiv.setAttribute('id', `education-${educationCount}`);

    // Create a new div for program
    const programPart = document.createElement('div');
    programPart.setAttribute('id', 'program-part');

    // Create a new label and input for program
    const programLabel = document.createElement('label');
    programLabel.setAttribute('for', `program-${educationCount}`);
    programLabel.textContent = 'Program:';

    const programInput = document.createElement('input');
    programInput.type = 'text';
    programInput.name = 'program';
    programInput.id = `program-${educationCount}`;
    
    // Append label and input to program part
    programPart.appendChild(programLabel);
    programPart.appendChild(programInput);

    // Create a new div for school
    const schoolPart = document.createElement('div');
    schoolPart.setAttribute('id', 'school-part');

    // Create a new label and input for school
    const schoolLabel = document.createElement('label');
    schoolLabel.setAttribute('for', `school-${educationCount}`);
    schoolLabel.textContent = 'School:';

    const schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.name = 'school';
    schoolInput.id = `school-${educationCount}`;
    
    // Append label and input to school part
    schoolPart.appendChild(schoolLabel);
    schoolPart.appendChild(schoolInput);

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.style.width = "24px";
    removeButton.style.height = "24px";
    removeButton.style.backgroundImage = "url(../images/minus-sign.png)"; // Set background image
    removeButton.style.backgroundSize = 'contain'; // Ensure image fits the button
    removeButton.style.backgroundRepeat = 'no-repeat'; // Prevent image repetition
    removeButton.style.border = 'none'; // Remove default border
    removeButton.style.width = '24px'; // Set button width
    removeButton.style.height = '24px';


    // Use an IIFE to capture the current value of educationCount
    (function (count: number) {
        removeButton.addEventListener('click', () => removeEducation(count));
    })(educationCount);

    // Append program part, school part, and remove button to the new div
    newDiv.appendChild(programPart);
    newDiv.appendChild(schoolPart);
    newDiv.appendChild(removeButton);

    // Append the new div to the education container
    educationContainer.appendChild(newDiv);

    // Increment education count
    educationCount++;
});

// Function to remove an education input box
function removeEducation(id: number): void {
    const educationToRemove = document.getElementById(`education-${id}`);
    if (educationToRemove) {
        educationContainer.removeChild(educationToRemove);
    }
}

//handling experience
const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement;
const experienceContainer = document.getElementById('Experience-container') as HTMLDivElement;
let experienceCount: number = 0;

addExperienceButton.addEventListener('click', () => {
    // Create a new div container for the experience form
    const newDiv = document.createElement('div');
    newDiv.classList.add('experience-form');
    newDiv.setAttribute('id', `experience-${experienceCount}`);

    // Create a new div for position
    const positionPart = document.createElement('div');
    positionPart.setAttribute('id', 'experience-position-part');

    // Create a new label and input for position
    const positionLabel = document.createElement('label');
    positionLabel.setAttribute('for', `position-${experienceCount}`);
    positionLabel.textContent = 'Position:';

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position';
    positionInput.id = `position-${experienceCount}`;
    
    // Append label and input to position part
    positionPart.appendChild(positionLabel);
    positionPart.appendChild(positionInput);

    // Create a new div for duration
    const durationPart = document.createElement('div');
    durationPart.setAttribute('id', 'experience-duration-part');

    // Create a new label and input for duration
    const durationLabel = document.createElement('label');
    durationLabel.setAttribute('for', `duration-${experienceCount}`);
    durationLabel.textContent = 'Duration:';

    const durationInput = document.createElement('input');
    durationInput.type = 'text';
    durationInput.name = 'duration';
    durationInput.id = `duration-${experienceCount}`;
    
    // Append label and input to duration part
    durationPart.appendChild(durationLabel);
    durationPart.appendChild(durationInput);

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.style.width = "24px";
    removeButton.style.height = "24px";
    removeButton.style.backgroundImage = "url(../images/minus-sign.png)"; // Set background image
    removeButton.style.backgroundSize = 'contain'; // Ensure image fits the button
    removeButton.style.backgroundRepeat = 'no-repeat'; // Prevent image repetition
    removeButton.style.border = 'none'; // Remove default border

    // Use an IIFE to capture the current value of experienceCount
    (function (count: number) {
        removeButton.addEventListener('click', () => removeExperience(count));
    })(experienceCount);

    // Append position part, duration part, and remove button to the new div
    newDiv.appendChild(positionPart);
    newDiv.appendChild(durationPart);
    newDiv.appendChild(removeButton);

    // Append the new div to the experience container
    experienceContainer.appendChild(newDiv);

    // Increment experience count
    experienceCount++;
});

// Function to remove an experience input box
function removeExperience(id: number): void {
    const experienceToRemove = document.getElementById(`experience-${id}`);
    if (experienceToRemove) {
        experienceContainer.removeChild(experienceToRemove);
    }
}


console.log('Script Loaded');
document.getElementById('file-upload')?.addEventListener('change', function(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>) {
            const img = document.getElementById('preview') as HTMLImageElement;
            if (e.target?.result) {
                img.src = e.target.result as string;
                img.style.display = 'block';
            }
        }
        reader.readAsDataURL(file);
    }
});

const username = document.getElementById("user-name") as HTMLInputElement;
const userrole = document.getElementById("user-role") as HTMLInputElement;
const usercontact = document.getElementById("user-contact") as HTMLInputElement;
const useremail = document.getElementById("user-email") as HTMLInputElement;
const useraddress = document.getElementById("user-address") as HTMLInputElement;
const userskills = document.getElementById("user-skills") as HTMLInputElement;
const userprogram = document.getElementById("user-program") as HTMLInputElement;
const userschool = document.getElementById("user-school") as HTMLInputElement;
const userposition = document.getElementById("user-position") as HTMLInputElement;
const userduration = document.getElementById("user-duration") as HTMLInputElement;
const updatename = document.getElementById("name-updated") as HTMLDivElement;
const updaterole = document.getElementById("role-updated") as HTMLDivElement;
const updateemail = document.getElementById("email-updated") as HTMLDivElement;
const updatenumber = document.getElementById("number-updated") as HTMLDivElement;
const updateaddress = document.getElementById("address-updated") as HTMLDivElement;
document.addEventListener("DOMContentLoaded", () => {
    const cv = document.getElementById("cvop") as HTMLDivElement;
    const generatebttn = document.getElementById("generatecv") as HTMLButtonElement;

    generatebttn.addEventListener("click", () => {
        console.log("show cv");
        cv.style.display = "block";
        updatename.innerHTML = username.value;
        updaterole.innerHTML = userrole.value;
        updateemail.innerHTML = useremail.value;
        updateaddress.innerHTML = useraddress.value;
        updatenumber.innerHTML = usercontact.value;
        


    });
});
