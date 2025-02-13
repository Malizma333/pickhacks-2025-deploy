import { devpost, discord, instagram, linkedin, picklogo25, tiktok } from '@/lib/Images';
import styles from '@/styles/components/Navbar.module.css';
import { useMediaQuery } from 'usehooks-ts';
import MobileNavbar from './MobileNavbar';
import PushButton from './PushButton';

function Navbar() {
	const matches = useMediaQuery('(max-width: 1139px)');

	if (matches) {
		return <MobileNavbar />;
	}

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<ul className={styles.list}>
					<a href="/#home" className={styles.logo}>
						<img src={picklogo25.src} />
					</a>
					<li>
						<a className={styles.buttons} href="/#schedule">
							Schedule
						</a>
					</li>
					<li>
						<a className={styles.buttons} href="/#sponsors">
							Sponsors
						</a>
					</li>
					<li>
						<a className={styles.buttons} href="/#faq">
							FAQ
						</a>
					</li>
					<li>
						<a className={styles.buttons} href="/#team">
							Team
						</a>
					</li>
					<PushButton
						variant="primary"
						size="sm"
						onClick={() =>
							window.open(
								'https://my.mlh.io/oauth/authorize?client_id=woPXesu6aEqBIRPV1t50oe_QKrnRNDXX45BG7OcQD2A&redirect_uri=https%3A%2F%2Fadmin.pickhacks.io%2Fapi%2Fauth-callback&scope=+public+user%3Aread%3Aprofile+user%3Aread%3Aeducation+user%3Aread%3Asocial_profiles+user%3Aread%3Aemail+user%3Aread%3Aevent_preferences+user%3Aread%3Aphone&response_type=code',
								'_blank'
							)
						}
						text="register"></PushButton>
				</ul>
				<ul className={styles.social}>
					<div className={styles.socialContainer}>
						<li className={styles.socialitem}>
							<a className={styles.icon} href="https://pickhacks-2024.devpost.com/" target="_blank">
								<img src={devpost.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href="https://www.instagram.com/sandtpickhacks" target="_blank">
								<img src={instagram.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href="https://discord.gg/weJVRv4Rk9" target="_blank">
								<img src={discord.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href="https://www.linkedin.com/company/pickhacks" target="_blank">
								<img src={linkedin.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href="https://www.tiktok.com/@sandtpickhacks" target="_blank">
								<img src={tiktok.src} />
							</a>
						</li>
					</div>
					<a
						id="mlh-trust-badge"
						style={{ display: 'block', width: '100px', zIndex: 10000, marginTop: '6.5em' }}
						href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
						target="_blank">
						<img
							src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
							alt="Major League Hacking 2025 Hackathon Season"
							style={{ width: '100%' }}></img>
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
