import React from 'react';
import './Form.scss'

export default function Form({careGiverName, setCareGiverName, childName, setChildName}) { 

    return (
      <form>
        <input
          type='text'
          placeholder='Your Name'
          name='care-giver'
          value={careGiverName}
          onChange={event => setCareGiverName(event.target.value)}
        />
        <input
          type='text'
          placeholder="Your Child's Name"
          name='child'
          value={childName}
          onChange={event => setChildName(event.target.value)}
        />
      </form>
    )
  
}
