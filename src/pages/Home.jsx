import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
export default function Home() {
  let username = localStorage.getItem('username') || prompt('please enter your name','guest');
  localStorage.setItem('username',username);

  function login(){
    username = prompt('please enter your name');
    while(!username){
      username = prompt('please enter your name');
    }
    localStorage.setItem('username',username);
    window.location.reload();
  }

  function logout(){
    localStorage.setItem('username','guest');
    window.location.reload();
  }

  useEffect(function(){
    let cards = document.querySelectorAll('.card');
    for(let card of cards){

      card.addEventListener('mouseover',function(){
        card.classList.add('bg-opacity-50');
        card.querySelector('img').classList.add('blur');
        card.querySelector('div').classList.remove('collapse');
        card.querySelector('div').classList.add('card-img-overlay');
      })

      card.addEventListener('mouseout',function(){
        card.querySelector('img').classList.remove('blur');
        card.querySelector('div').classList.remove('card-img-overlay');
        card.querySelector('div').classList.add('collapse');
      })

    }

  },[])
  return (
    <div>
    <div class="text-light d-flex justify-content-between align-items-center p-3 bg-opacity-75 bg-dark">
        <h1>Welcome {username}</h1>
        {username==='guest' || !username? <button onClick={login} className='btn btn-success'>Login</button>:
        <button className='btn btn-danger' onClick={logout}>Log out</button>}
    </div>

    <div className="container">
        <div className="row">
            <div className="col-sm-4 p-3">
              <div className="card"> 
                  <img src="https://play-lh.googleusercontent.com/vMq6_OouGHPzSt697sd-W9jjTP5l8rscPfYakniVAM0hPVVdtBZrjVO0xgXY1oHCuXs=w526-h296-rw" alt="" className='card-img-top'  />
                  <div className="collapse">
                    <h4>General knowledge Quiz</h4>
                    <p>Test your knowledege with this exclusive quiz.</p>
                    <Link to="gk" className="btn btn-primary">Start Quiz</Link>
                      
                  </div>
              </div>
            </div>
            <div className="col-sm-4 p-3">
              <div className="card">
                  <img src="https://i.ytimg.com/vi/NfOk6JZWdL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAARnEyAidaxgySw6fwdlWf-RsScg" alt='' className='card-img-top'  />
                  <div className="collapse">
                    <h4>Maths Quiz</h4>
                    <p>Test your knowledege with this exclusive quiz.</p>
                    <Link to="maths" className="btn btn-primary">Start Quiz</Link>

                  </div>
              </div>
            </div>
            <div className="col-sm-4 p-3">
              <div className="card">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0osegUA6wsP_EVwsPEAWrxVBxGi51qrk8-BfaJvsZLCJVin9J7_txfkt40iTLpj0moFEGFVXfJ6Uv3EjZVU-PxDUE4KPX2BQ38nAl7bwWs7KoIWt5iue1FViXRvmBRilHhqWnrpfCiKN5RJMeopyB2JQt9jKQa7dmGRF6omj2smUnJnRngpvrHyFRGkc/w1200-h630-p-k-no-nu/QUIZ.jpg" alt='' className='card-img-top' />
                  <div className="collapse">
                    <h4>Scinece Quiz</h4>
                    <p>Test your knowledege with this exclusive quiz.</p>
                    <Link to="science" className="btn btn-primary">Start Quiz</Link>

                  </div>
              </div>
            </div>
        </div>
    </div>

    </div>
  )
}
