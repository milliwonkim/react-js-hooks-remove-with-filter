import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';

const Div1 = styled.div`
  margin: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Div2 = styled.div`
  border: 3px solid gray;
  padding: 10px;
  height: 25rem;
  margin: 10px;
  overflow-x: scroll;
`;

const App = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setList(res.data))
  }, [])

  const removeById = (index) => {
    console.log('index: ', index)
    const newList = list.filter(data => index !== data.id)
    console.log('list: ', newList)
    setList(newList)
  }

  // const removeById = (index) => {
  //   console.log('index: ', index)
  //   list.splice(index-1, 1)
  //   console.log('list: ', list)
  //   setList(list)
  // }


  return (
    <Div1>
        {
          list.map((l) => (
              <Div2 key={l.id}>
                <h1>{l.id}</h1>
                <h3>{l.title}</h3>
                <h5>{l.body}</h5>
                <button onClick={() => removeById(l.id)}>DELETE</button>
                <hr />
              </Div2>
          ))
        }
    </Div1>
  );
}

export default App;
