import React from 'react'
import styles from"./Todo.module.css"
 const Todoapp = (props) => {
  let x=props.logo;
  let y=props.apple
  return (
    <div className={styles.todos}>
   <div className={styles.todo}>
    <div className={styles.first}>
    <p>{x.date}</p>
    <button>{x.btn}</button>
    <h1>{x.name}</h1>
    <h1>{x.pay}</h1>
    <h3>{x.ds}</h3>
    </div>
    <div>
      <img src={x.logo} alt="" />
    </div>
   
   </div>
   <div className={styles.todo}>
    <div className={styles.first}>
    <p>{x.date}</p>
    <button>{x.btn}</button>
    <h1>{x.name}</h1>
    <h1>{x.pay}</h1>
    <h3>{x.ds}</h3>
    </div>
    <div>
      <img src={x.logo} alt="" />
    </div>
   
   </div>
   <div className={styles.todo}>
    <div className={styles.first}>
    <p>{y.date}</p>
    <button>{y.btn}</button>
    <h1>{y.name}</h1>
    <h1>{y.pay}</h1>
    <h3>{y.ds}</h3>
    </div>
    <div>
      <img src={y.logo} alt="" />
    </div>
   
   </div>
   </div>
  )
}
export default Todoapp;