import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="cards">
      <App title="UI teach Stack" sub_title="UI devlopment" h6="Amit Kumar" span="UI developer" date="2 feb 2023" img="/profile.png" style="background-color:red;"/>
      <App title="React teach Stack" sub_title="React devlopment" h6="Sunil Kumar" date="2 March 2023" span="UI developer" />
      <App title="Anguler teach Stack" sub_title="Java devlopment" h6="Ram Kumar" span="Anguler developer" />
      <App title=".NET teach Stack" sub_title=".NET devlopment" h6="Ravi Kumar" span="UI developer" />
      <App title="React teach Stack" sub_title="QA devlopment" h6="Anurag Kumar" span="QA developer" /> 
      <App title="React teach Stack" sub_title="UI devlopment" h6="Anu Kumar" span="UI developer" />
       <App title="React teach Stack" sub_title="UI devlopment" h6="Aviral Kumar" span="UI developer" /> 
       <App title="React teach Stack" sub_title="UI devlopment" h6="Deepak Kumar" span="UI developer" />
       <App title="React teach Stack" sub_title="UI devlopment" h6="Amit Kumar" span="UI developer" />
    </div>
    
  </StrictMode>
)
