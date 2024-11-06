import styles from '@/styles/components/PushButton.module.css'

const PushButton = () => {
	return (
        <div className={styles.outer}>
            <a href='https://www.register.pickhacks.io' target='_blank' className={styles.container}>
                <p className={styles.text}>REGISTER</p>
            </a>
            <div className={styles.container2}>
            </div>
        </div>

	);
};

export default PushButton;
