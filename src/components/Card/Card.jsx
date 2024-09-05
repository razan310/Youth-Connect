import styles from './Card.module.css'

function Card({img1,title,desc}) {
  return (
    <div className={styles.card}>
        <div className={styles.imageim}>
            <img src={img1} alt=''/>
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      
    </div>
  )
}

export default Card
