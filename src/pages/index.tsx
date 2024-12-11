import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Title from '@/components/Title';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) {
			return;
		}
        console.log(router.query.err)
		if (router.query.message) {
            toast.success('Successfully registered for MyMLH');
		}
        else if (router.query.err) {
            toast.error("Error while registering for MyMLH")
        }
	}, [router.isReady]);

	return (
		<>
			<Head>
				<title>PickHacks 2025</title>
				<meta name='author' content='PickHacks' />
				<meta name='description' content='Stay up to date with the PickHacks 2025 event!' />
				<meta name='keywords' content='hackathon,mst,pickhacks' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='PickHacks 2025' />
				<meta property='og:description' content='Stay up to date with the PickHacks 2025 event!' />
				<meta property='og:url' content='https://pickhacks.io' />
				<meta property='og:site_name' content='PickHacks' />
				<meta property='og:image' content='https://pickhacks.io/images/Logo2025.png' />
				<meta name='theme-color' content='#ff52d2' />
			</Head>
			<main className={styles.main}>
        <div className={styles.section} id='hero'>
					<Hero />
				</div>
				<div className={styles.section} id='schedule'>
					<Schedule />
				</div>
				<div className={styles.section} id='prizes'>
					<Title>Prizes</Title>
					<p className={styles.tbd}>TBD</p>
					{/* <Prizes />
					<TotalPrizes /> */}
				</div>
				<div className={styles.section} style={{ minHeight: '75vh' }} id='sponsors'>
					<Title>Sponsors</Title>
					<p className={styles.tbd}>TBD</p>
					{/* <Sponsors /> */}
				</div>
				<div className={styles.section} style={{ minHeight: '50vh', marginTop: '5em' }} id='partners'>
					<Title>Partners</Title>
					<p className={styles.tbd}>TBD</p>
					{/* <Partners /> */}
				</div>
				<div className={styles.section} style={{ marginTop: '5em' }} id='faq'>
					<Title>FAQ</Title>
					<p className={styles.tbd}>TBD</p>
					{/* <Faq /> */}
					<div style={{ width: '100vw', marginTop: '5em', marginBottom: '2em' }} id='team'>
						<Title>Team</Title>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<p className={styles.tbd}>TBD</p>
						</div>
						{/* <Team></Team> */}
					</div>
				</div>
			</main>
			<Footer />
			<Toaster position='top-right' containerStyle={{zIndex: 9999999}}/>
		</>
	);
}
