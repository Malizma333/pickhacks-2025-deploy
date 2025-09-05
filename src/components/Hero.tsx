import { pickhackssign } from "@/lib/Images";
import styles from "@/styles/components/Hero.module.css";
import PushButton from "./PushButton";

const Hero = () => {
  return (
    <div className={styles.main} id="home">
      <div className={styles.center}>
        <img className={styles.title} src={pickhackssign.src}></img>
        <p className={styles.subtitle}>PickHacks 2025 has concluded</p>
        <p className={styles.date}>See you next year!</p>
        <PushButton
          variant="primary"
          width="max(115px, 15vw)"
          onClick={() => window.open("example.com", "_blank")}
        >
          Sponsor PickHacks 2026
        </PushButton>
      </div>
    </div>
  );
};

export default Hero;
