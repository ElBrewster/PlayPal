import React from 'react';
// import './Form.scss'
import styles from "./Form.module.css";

export default function Form({careGiverName, setCareGiverName, childName, setChildName}) { 

    return (
      <form className={styles.myForm}>
        <input
          className={styles.inputName}
          type='text'
          placeholder='Your Name'
          name='care-giver'
          value={careGiverName}
          onChange={event => setCareGiverName(event.target.value)}
        />
        <input
          className={styles.inputName}
          type='text'
          placeholder="Your Child's Name"
          name='child'
          value={childName}
          onChange={event => setChildName(event.target.value)}
        />
      </form>
    )
  
}
