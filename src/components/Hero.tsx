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
          onClick={() =>
            window.open(
              "https://file.notion.so/f/f/3ccc68c2-cd58-4f1e-b62a-55605f473760/b53fbc14-0350-4249-a170-22acb4786546/Sponsorship_Prospectus_2025_(2).pdf?table=block&id=34bfb8cd-4ee3-43fc-94d4-008c1a103d83&spaceId=3ccc68c2-cd58-4f1e-b62a-55605f473760&expirationTimestamp=1757203200000&signature=sAbup9LjJJZLhLuXji9TbbQ7nUvfiJ0fxwf8vG3UfN0&downloadName=Sponsorship+Prospectus+2025+%282%29.pdf",
              "_blank"
            )
          }
        >
          Sponsor 2026
        </PushButton>
      </div>
    </div>
  );
};

export default Hero;
