import React from 'react'
import {books} from './books'
import Book from './book'




const BookList = () => {
  return (
    <React.Fragment>
      <h1>Amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          // book = [{author, title, image, id},{...}]
          return <Book {...book} index={index+1} key={book.id} />
        })}
      </section>
    </React.Fragment>
  )
}

export default BookList
