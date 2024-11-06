import styles from '@/styles/components/PushButton.module.css';

type PushButtonProps = {
	variant: 'primary' | 'secondary';
    href?: string;
	text: string;
};

const PushButton: React.FC<PushButtonProps> = ({variant, href, text}) => {
	if (variant == 'primary') {
        return (
            <div className={styles.outer}>
                <a href={href} target='_blank' className={styles.top_primary}>
                    <p className={styles.text}>{text}</p>
                </a>
                <div className={styles.bottom_primary}>
                </div>
            </div>
        );
	} else if (variant == 'secondary') {
        return (
            <div className={styles.outer}>
                <a href={href} target='_blank' className={styles.top_secondary}>
                    <p className={styles.text}>{text}</p>
                </a>
                <div className={styles.bottom_secondary}>
                </div>
            </div>
        );
	}
};

export default PushButton;