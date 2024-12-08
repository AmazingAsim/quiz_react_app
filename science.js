let questions = [
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O",
        options: [
            "O2",
            "CO2",
            "H2O",
            "HO"
        ]
    },
    {
        question: "What planet is known as the Earth's twin?",
        answer: "Venus",
        options: [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
        ]
    },
    {
        question: "What is the process by which plants make their food?",
        answer: "Photosynthesis",
        options: [
            "Respiration",
            "Digestion",
            "Photosynthesis",
            "Transpiration"
        ]
    },
    {
        question: "What is the speed of light in vacuum?",
        answer: "299,792 km/s",
        options: [
            "150,000 km/s",
            "299,792 km/s",
            "500,000 km/s",
            "1,000,000 km/s"
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answer: "Albert Einstein",
        options: [
            "Isaac Newton",
            "Galileo Galilei",
            "Nikola Tesla",
            "Albert Einstein"
        ]
    },
    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        answer: "Carbon dioxide",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
        ]
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        answer: "Nitrogen",
        options: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Helium"
        ]
    },
    {
        question: "What is the center of an atom called?",
        answer: "Nucleus",
        options: [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleus"
        ]
    },
    {
        question: "What is the chemical formula for table salt?",
        answer: "NaCl",
        options: [
            "KCl",
            "NaCl",
            "HCl",
            "CaCl"
        ]
    },
    {
        question: "What force keeps planets in orbit around the Sun?",
        answer: "Gravity",
        options: [
            "Magnetism",
            "Friction",
            "Electromagnetic force",
            "Gravity"
        ]
    }
];


let scienceBox = document.getElementById('scienceBox');


questions.map(function(q){
    let div = document.createElement('div');
    div.setAttribute('class','questionbox');
    div.innerHTML = `
     <h3>${q.question}</h3>
     <div class="buttonBox">
        <button onclick="check(event,'${q.answer}','${q.options[0]}')">${q.options[0]}</button>
        <button onclick="check(event,'${q.answer}','${q.options[1]}')">${q.options[1]}</button>
        <button onclick="check(event,'${q.answer}','${q.options[2]}')">${q.options[2]}</button>
        <button onclick="check(event,'${q.answer}','${q.options[3]}')">${q.options[3]}</button>
     </div>
    `
    scienceBox.appendChild(div);
})

let correctAnswers = 0


function check(event,answer,option){
    if (answer === option) {
        correctAnswers++;
        event.target.style.background = 'lightgreen';
    }
    else {
        event.target.style.background = 'red';
    }
    let parentDiv = event.target.parentElement;
    let buttons = parentDiv.querySelectorAll('button');
    buttons.forEach(function(button){
        button.disabled = true;
    })
 }

 function submit(){
    alert(`Your score is ${correctAnswers}/10`);
}