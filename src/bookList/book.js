import React from 'react'

// children is a special keyword! Used to render stuff between components
const Book = ({title, image, author, index, children}) => {
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick>click me</button>
      <h4 className='author'>{author.toUpperCase()}</h4>
      <span className='number'>{`#${index}`}</span>
      {children}
    </article>
  )
}
// <<
export default Book
