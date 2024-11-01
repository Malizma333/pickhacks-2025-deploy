import { pickhackssign } from '@/lib/Images';
import styles from '@/styles/components/Hero.module.css';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className={styles.main} id='home'>
      <div className={styles.center}>
        <img className={styles.title} src={pickhackssign.src}></img>
        <p className={styles.subtitle}>Learn, build, and share at Missouri S&T&apos;s <span className={styles.emphasis}>game</span> hackathon!</p>
        <p className={styles.date}>Join us from Feb 28 - March 2nd!</p>
        <Link href='https://www.register.pickhacks.io' target='_blank' className={styles.registerButton}>
          REGISTER
        </Link>
      </div>
		</div>
	);
};

export default Hero;
