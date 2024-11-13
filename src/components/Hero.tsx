import { pickhackssign } from '@/lib/Images';
import styles from '@/styles/components/Hero.module.css';
import PushButton from './PushButton';

const Hero = () => {
	return (
		<div className={styles.main} id='home'>
      <div className={styles.center}>
        <img className={styles.title} src={pickhackssign.src}></img>
        <p className={styles.subtitle}>Learn, build, and share at Missouri S&T&apos;s <span className={styles.emphasis}>game</span> hackathon!</p>
        <p className={styles.date}>Join us from Feb 28 - March 2nd!</p>
        <PushButton
          variant='primary'
          size='lg'
          onClick={() => window.open('https://www.register.pickhacks.io', '_blank')}
          text='register'
        ></PushButton>
      </div>
		</div>
	);
};

export default Hero;
