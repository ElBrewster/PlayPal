import React from 'react'
import { useNavigate } from 'react-router-dom'
// import './ErrorPage.scss'
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  let navigate = useNavigate()

  return (
    <section className={styles.errorPage}>
      <h2 className={styles.errorMessage}>Something went wrong...</h2>
      <button className={styles.errorBackButton} onClick={() => navigate("/")}>Back</button>
      {/* back button navigates to landing page for now, can be changed if decided */}
    </section>
  )
}