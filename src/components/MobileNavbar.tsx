import { devpost, discord, instagram, linkedin, picklogo25, tiktok } from '@/lib/Images';
import styles from '@/styles/components/MobileNavbar.module.css';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import PushButton from './PushButton';

const MobileNavbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{!open && (
				<div className={styles.navbar}>
					<IoMenu color='white' size={32} onClick={() => setOpen(true)} className={styles.icon} />
				</div>
			)}
			<a href='#home' className={styles.logo} onClick={() => setOpen(false)}>
				<img src={picklogo25.src} className={styles.logo} />
			</a>
			<a
				id='mlh-trust-badge'
				style={{ display: 'block', width: '60px', zIndex: 10000, position: 'fixed', top: 0, right: 80 }}
				href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white'
				target='_blank'
			>
				<img
					src='https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg'
					alt='Major League Hacking 2025 Hackathon Season'
					style={{ width: '100%' }}
				></img>
			</a>

			<div className={styles.container} style={{ opacity: open ? 1 : 0, zIndex: open ? 98 : 0 }}>
				<div className={styles.iconContainer}>
					<IoClose color='white' size={32} onClick={() => setOpen(false)} className={styles.icon} />
				</div>
				<a href='#schedule' className={styles.navbarOption} onClick={() => setOpen(false)}>
					Schedule
				</a>
				<a href='#sponsors' className={styles.navbarOption} onClick={() => setOpen(false)}>
					Sponsors
				</a>
				<a href='#faq' className={styles.navbarOption} onClick={() => setOpen(false)}>
					FAQ
				</a>
				<a href='#team' className={styles.navbarOption} onClick={() => setOpen(false)}>
					Team
				</a>
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
				<div className={styles.socials}>
					<a className={styles.icon} href='https://pickhacks-2025mst.devpost.com/' target='_blank'>
						<img src={devpost.src} />
					</a>
					<a className={styles.icon} href='https://www.instagram.com/sandtpickhacks' target='_blank'>
						<img src={instagram.src} />
					</a>

					<a className={styles.icon} href='https://discord.gg/weJVRv4Rk9' target='_blank'>
						<img src={discord.src} />
					</a>

					<a className={styles.icon} href='https://www.linkedin.com/company/pickhacks' target='_blank'>
						<img src={linkedin.src} />
					</a>

					<a className={styles.icon} href='https://www.tiktok.com/@sandtpickhacks' target='_blank'>
						<img src={tiktok.src} />
					</a>
				</div>
			</div>
		</>
	);
};

export default MobileNavbar;
