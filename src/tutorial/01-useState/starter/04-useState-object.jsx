import { useState } from 'react';

const peopleSource = [
  { id: 1, name: 'john', age: '19', hobby: 'gaming' },
  { id: 2, name: 'peter', age: '29', hobby: 'golf'  },
  { id: 3, name: 'susan', age: '22', hobby: 'swimming'  },
  { id: 4, name: 'anna', age: '18', hobby: 'reading'  },
];

/*
- setup three state values
  - name(string)
  - age(number)
  - hobby(string)
- render in the browser
- create a button
  - setup a function
    - update all three state values
- as a result once the user clicks the button,
  new person is displayed in the browser

*/

const UseStateObject = () => {
  const [people, setPeople] = useState(peopleSource)
  const [current, setCurrent] = useState(0)

  return <div>
    <h2>{people[current].name}</h2>
    <h2>{people[current].age}</h2>
    <h2>{people[current].hobby}</h2>
    <button className='btn' type='button' 
      onClick={() => {setCurrent((current+1) % people.length)}}>
      Next Person
    </button>
  </div>;
};

export default UseStateObject;
