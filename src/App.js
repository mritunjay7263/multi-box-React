import React from 'react';
import './scss/style.css';

export default function App(props) {
  return (
    <div class="card">
      <div class="card_content">
        <date>{props.date}</date>
        <h5 class="title">{props.title}</h5>
        <h6 class="sub_title">{props.sub_title}</h6>
      </div>
      <div class="profile">
        <div>
          <img src={props.img}/>
        </div>
        <h6>
          {props.h6} <span>{props.span}</span>
        </h6>
      </div>
    </div>
  );
}

