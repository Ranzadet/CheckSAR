import {React} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let t = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <App test={(n) => {console.log(n); return "imported from index.js!";}}/>
    <p>hello</p>
    <button onClick={() => {t = !t; console.log(t);}}>click</button>
    {t ? <p>sheeesh</p> : null}
    <input type="text" defaultValue={'sss'}></input>
    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

