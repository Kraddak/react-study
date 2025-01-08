import React from 'react'


const titleString = 'Onyx Storm'; 
const authorString = 'Rebecca Yarros'; 
const imagePathString = 'https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg';


const books = [ // array
  {
    author: 'Rebecca Yarros',
    title: 'Onyx Storm',
    image: 'https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Mel Robbins',
    title: 'The Let Them Theory: A Life-Changing Tool That Millions of People Can\'t Stop Talking About',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL600_SR600,400_.jpg',
    id: 2,
  }
];


const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        // book = [{author, title, image, id},{...}]
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

// children is a special keyword! Used to render stuff between components
const Book = ({title, image, author, children}) => {
  const handleButtonClick = () => {
    alert('handle button click');
  };
  //const {title, image, author} = props
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4 className='author'>{author.toUpperCase()}</h4>
      {children}
    </article>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};


const Book1 = (props) => {
  console.log(`Book props parameter: ${JSON.stringify(props)}`);
  //console.log(props)
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

const Image = () => (
  <img
    src={imagePathString}
    alt={titleString}
  />
);

const Title = () => <h2>{titleString}</h2>;

const Title1 = () => {
  const titleString1 = 'Onyx Storm'; 
  return <h2>{titleString1}</h2>;
}

const Author = () => {
  /* Inlining styles
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  // {this is a java script object}
  return <h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>;
  */
  return <h4 className='author'>{authorString.toUpperCase()}</h4>;
};


const BookList1 = () => {
  return (
    <section className='booklist'>
      <Book job='developer'/>
      <Book title='randomTitle' number = {22}/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}




const BookList2 = (props) => {
  return (
    <section className='booklist'>
      <Book title={titleString} author={authorString} image={imagePathString}>
        <button>click me</button>
      </Book>
      <Book title={titleString} author={authorString} image={imagePathString}/>
      <Book title={titleString} author={authorString} image={imagePathString}/>
    </section>
  )
}



export default BookList
