// src/components/Navbar.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { devpost, discord, instagram, linkedin, picklogo25, tiktok } from '@/lib/Images';
import styles from '@/styles/components/Navbar.module.css';
import { useMediaQuery } from 'usehooks-ts';
import MobileNavbar from './MobileNavbar';
import PushButton from './PushButton';

function Navbar() {
  const router = useRouter();
  
  // Always call hooks unconditionally:
  const [mounted, setMounted] = React.useState(false);
  const matches = useMediaQuery('(max-width: 1139px)');

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (matches) return <MobileNavbar />;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {/* Use a plain anchor for hash navigation */}
          <li>
            <a href="#home" className={styles.logo}>
              <img src={picklogo25.src} alt="Pickhacks Logo" />
            </a>
          </li>
          <li>
            <a className={styles.buttons} href="#schedule">
              Schedule
            </a>
          </li>
          <li>
            <a className={styles.buttons} href="#sponsors">
              Sponsors
            </a>
          </li>
          <li>
            <a className={styles.buttons} href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <a className={styles.buttons} href="#team">
              Team
            </a>
          </li>
          {/* Link to Resume Submission Page using new Link API */}
          <li>
            <Link href="/resume" className={styles.buttons}>
              Submit Resume
            </Link>
          </li>
          {/* "Register" button that navigates to /resume */}
          <li>
            <PushButton
              variant="primary"
              size="sm"
              onClick={() => router.push('/resume')}
              text="Register"
            />
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <div className={styles.socialContainer}>
              <a className={styles.icon} href="https://pickhacks-2024.devpost.com/" target="_blank" rel="noopener noreferrer">
                <img src={devpost.src} alt="Devpost" />
              </a>
              <a className={styles.icon} href="https://www.instagram.com/sandtpickhacks" target="_blank" rel="noopener noreferrer">
                <img src={instagram.src} alt="Instagram" />
              </a>
              <a className={styles.icon} href="https://discord.gg/weJVRv4Rk9" target="_blank" rel="noopener noreferrer">
                <img src={discord.src} alt="Discord" />
              </a>
              <a className={styles.icon} href="https://www.linkedin.com/company/pickhacks" target="_blank" rel="noopener noreferrer">
                <img src={linkedin.src} alt="LinkedIn" />
              </a>
              <a className={styles.icon} href="https://www.tiktok.com/@sandtpickhacks" target="_blank" rel="noopener noreferrer">
                <img src={tiktok.src} alt="TikTok" />
              </a>
            </div>
          </li>
          <li>
            {/* MLH Trust Badge container */}
            <div
              id="mlh-trust-badge-container"
              style={{ display: 'block', width: '100px', zIndex: 10000, marginTop: '6.5em' }}
            >
              <div
                className="mlh-trust-badge"
                data-badge-theme="dark" // or "light"
                data-badge-type="default"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
