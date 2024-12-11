import { pickhackssign } from '@/lib/Images';
import styles from '@/styles/components/Hero.module.css';
import PushButton from './PushButton';

const Hero = () => {
	return (
		<div className={styles.main} id='home'>
			<div className={styles.center}>
				<img className={styles.title} src={pickhackssign.src}></img>
				<p className={styles.subtitle}>
					Learn, build, and share at Missouri S&T&apos;s <span className={styles.emphasis}>game</span> hackathon!
				</p>
				<p className={styles.date}>Join us from Feb 28 - March 2nd!</p>
				<PushButton
					variant='primary'
					size='lg'
					onClick={() =>
						window.open(
							'https://my.mlh.io/oauth/authorize?client_id=woPXesu6aEqBIRPV1t50oe_QKrnRNDXX45BG7OcQD2A&redirect_uri=https%3A%2F%2Fadmin.pickhacks.io%2Fapi%2Fauth-callback&scope=+public+user%3Aread%3Aprofile+user%3Aread%3Aeducation+user%3Aread%3Asocial_profiles+user%3Aread%3Aemail+user%3Aread%3Aevent_preferences+user%3Aread%3Aphone&response_type=code',
							'_blank'
						)
					}
					text='register'
				></PushButton>
			</div>
		</div>
	);
};

export default Hero;
