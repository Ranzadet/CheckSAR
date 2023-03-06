import React from 'react'
import {useState} from 'react'

const Home = () => {
  const [b, setB] = useState(false);
  let t = false;
    return (
        <div>
          <h1>
            CheckSAR
          </h1>
          <button onClick={() => {setB(!b); console.log(b);}}>click</button>
          <p>h{b ? 'sheeesh' : "null"}</p>
        </div>
      );
}

export default Home;