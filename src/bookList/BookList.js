import React from 'react'


const titleString = 'Onyx Storm'; 
const authorString = 'Rebecca Yarros'; 

const BookList = () => {
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg'
    alt={titleString}
  />
);const Title = () => <h2>{titleString}</h2>;

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

export default BookList
