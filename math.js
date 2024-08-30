let questions = [
    {
        question: "What is the square root of 144?",
        answer: "12",
        options: [
            "10",
            "12",
            "14",
            "16"
        ]
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        answer: "3.14",
        options: [
            "3.14",
            "3.15",
            "3.13",
            "3.16"
        ]
    },
    {
        question: "What is 7 multiplied by 8?",
        answer: "56",
        options: [
            "48",
            "54",
            "56",
            "58"
        ]
    },
    {
        question: "What is 15% of 200?",
        answer: "30",
        options: [
            "25",
            "30",
            "35",
            "40"
        ]
    },
    {
        question: "What is the perimeter of a square with side length 5?",
        answer: "20",
        options: [
            "15",
            "20",
            "25",
            "30"
        ]
    },
    {
        question: "What is the sum of the angles in a triangle?",
        answer: "180 degrees",
        options: [
            "90 degrees",
            "180 degrees",
            "270 degrees",
            "360 degrees"
        ]
    },
    {
        question: "What is the value of 9 cubed (9^3)?",
        answer: "729",
        options: [
            "729",
            "81",
            "243",
            "512"
        ]
    },
    {
        question: "What is 25 divided by 5?",
        answer: "5",
        options: [
            "4",
            "5",
            "6",
            "7"
        ]
    },
    {
        question: "What is the area of a circle with radius 7 (use π = 22/7)?",
        answer: "154",
        options: [
            "154",
            "44",
            "132",
            "98"
        ]
    },
    {
        question: "What is the value of 2^6?",
        answer: "64",
        options: [
            "32",
            "64",
            "128",
            "256"
        ]
    }
];

let mathBox = document.getElementById('mathBox');




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
    mathBox.appendChild(div);
})

let correctAnswers = 0;


function check(event,answer,option){
    if(answer === option){
     correctAnswers++;
    };
    event.target.style.background = 'blue';
    let parentDiv = event.target.parentElement;
    let buttons = parentDiv.querySelectorAll('button');
    buttons.forEach(function(button){
        button.disabled = true;
    })
 
 }

 function submit(){
    alert(`Your score is ${correctAnswers}/10`);
}