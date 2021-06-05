import styles from './TopButton.module.css'

export default function topButton() {
  return (
    <a href="#" className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" /></svg>
    </a>
  )
}