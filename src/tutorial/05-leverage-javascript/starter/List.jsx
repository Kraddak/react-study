import React from 'react'
import { people } from '../../../data'
import Person from './Person'

const List = () => {
    const listOfPeople = people

    return (
        <div>
            {listOfPeople.map((person) => <Person key={person.id} {...person}/>)}
        </div>
  )
}

export default List
