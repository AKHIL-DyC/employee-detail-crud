import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
  <>
  <div className={styles.main}>
  <div className={styles.txtcontainer}>
    <h1>NEED ONESTOP SOLUTION TO MANAGE YOUR EMPLOYEES DATA ?</h1>
    <button className={styles.button}>GET SERVICE</button>
  </div>
  </div>
  </>
  )
}
