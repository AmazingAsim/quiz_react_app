let questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        options: [
            "Paris",
            "Berlin",
            "Madrid",
            "Rome"
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        options: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain"
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
        options: [
            "Earth",
            "Venus",
            "Mars",
            "Jupiter"
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answer: "1912",
        options: [
            "1905",
            "1912",
            "1920",
            "1931"
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific Ocean",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: "Japan",
        options: [
            "China",
            "South Korea",
            "Thailand",
            "Japan"
        ]
    },
    {
        question: "Who is the author of the Harry Potter series?",
        answer: "J.K. Rowling",
        options: [
            "J.K. Rowling",
            "J.R.R. Tolkien",
            "George R.R. Martin",
            "C.S. Lewis"
        ]
    },
    {
        question: "Which is the smallest continent by land area?",
        answer: "Australia",
        options: [
            "Antarctica",
            "Europe",
            "Australia",
            "South America"
        ]
    },
    {
        question: "What is the currency of the United Kingdom?",
        answer: "Pound Sterling",
        options: [
            "Euro",
            "Pound Sterling",
            "Dollar",
            "Rupee"
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci",
        options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet"
        ]
    }
];

let gkBox = document.getElementById('gkBox');


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
    gkBox.appendChild(div);
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