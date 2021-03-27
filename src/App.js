import { useState, useEffect, } from 'react';

import './App.css';
import { Form } from './Form'
import { List } from './List'
import { PEOPLES } from './const/People';





function App() {

  const [tab,setTab] = useState('form');
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const savedPeopleText = localStorage["peoples"]
    if (savedPeopleText) {
      const peoples = JSON.parse(savedPeopleText)
      setPeoples(peoples)
    }
  }, [])

  const addPeople = (people) => {
    console.log(people);
    const newPeoples = [...peoples, people]
    setPeoples(newPeoples)
    localStorage["peoples"] = JSON.stringify(newPeoples)
    setTab('form')
  }

  return (
    <div>
      <header>
      <ul>
      <li onClick ={() => setTab('form')}>入力フォーム</li>
      <li onClick ={() => setTab('list')}>名簿</li>
      </ul>
      </header>
      <hr />

      {
        tab === 'form' ?  <Form onAddPeople　=　{addPeople} /> : <List peoples={peoples} />
      }
    </div>
  );
}

export default App;
