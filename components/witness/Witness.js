import Header from "../header/Header";
import Section from '../section/Section'
import styles from './Witness.module.css'

export default function Witness(props) {
  return (
    <Section>
      <Header label="Witness" />
      {Object.values(props.data).map((key, index) => {
        return (
          <a key={index} href={key.address} className={styles.card}>
            <div>
              <h2>{key.name}</h2>
              <p>{key.geocode.long_street + ", " + key.geocode.long_city}</p>
              <p>Status: {key.status.online}</p>
              <p>Scale {key.reward_scale}</p>
            </div>
          </a>
        );
      })}
    </Section>
  );
}
