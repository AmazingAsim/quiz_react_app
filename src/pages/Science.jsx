import React from 'react'
import sciencequestions from '../questions/science.json'
import { useState } from 'react'
export default function Science() {
  const [score,setScore]=useState(0);

  function check (event,option,answer){
    if(option===answer){
      setScore(score+1);
      event.target.classList.remove('btn-secondary');
      event.target.classList.add('bg-success');
    }
    else{
      event.target.classList.remove('btn-secondary');
      event.target.classList.add('bg-danger');
    }
    let footer = event.target.parentElement;
    footer.querySelectorAll('button').forEach(b=>b.disabled=true);
  }

  return (
    <div>
 <div className="container border-bottom py-3  mb-3 d-flex justify-content-between align-items-center text-light">
        <h1 className='display-3 fw-bolder'>Science Quiz</h1>
        <h3 >Score: {score}</h3>
      </div>      <div className="container">
         {
          sciencequestions.map(q=>(
          <div className='p-3'>
              <div className='card'>
                  <div className='card-body'>
                     <h4>{q.question}</h4>
                  </div>
                  <div className='card-footer'>
                       {
                        q.options.map(o=>(<button className='btn btn-secondary mx-2' onClick={(event)=>{check(event,o,q.answer)}}>{o}</button>))
                       }
                  </div>
              </div>
          </div>
          ))
         }
      </div>

     
    </div>
  )
}
