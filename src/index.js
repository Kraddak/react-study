
import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './bookList/BookList';
import './bookList/booklist.css';
//import './index.css';
// In react a component is a javascript function that returns HTML
// The component should have a capital letter on it's name

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

function Comp1() {
    return React.createElement('h2', {}, 'HELLO world');
}

// We need to return always a single lement, but we can use Fragments to group different elements
function Comp2() {
    return <React.Fragment>
        <div>
            <h3>
                hello world
            </h3>
        </div>
        <div>
            <h3>
                hello sassy
            </h3>
        </div>
    </React.Fragment>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
