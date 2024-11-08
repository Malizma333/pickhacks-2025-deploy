import styles from '@/styles/components/PushButton.module.css';

type PushButtonProps = {
	variant: 'primary' | 'secondary';
    size: 'sm' | 'lg';
    href?: string;
	text: string;
};

const PushButton: React.FC<PushButtonProps> = ({variant, size, href, text}) => {
	if (variant == 'primary') {
        if (size == 'sm') {
            return (
                <div className={styles.outer}>
                    <a href={href} target='_blank' className={styles.top_primary}>
                        <p className={styles.text}>{text}</p>
                    </a>
                    <div className={styles.bottom_primary}>
                    </div>
                </div>
            );
        } else if (size == 'lg') {
            return (
                <div className={styles.outer_lg}>
                    <a href={href} target='_blank' className={styles.top_primary_lg}>
                        <p className={styles.text_lg}>{text}</p>
                    </a>
                    <div className={styles.bottom_primary_lg}>
                    </div>
                </div>
            );
        }
	} else if (variant == 'secondary') {
        if (size == 'sm') {
            return (
                <div className={styles.outer}>
                    <a href={href} target='_blank' className={styles.top_secondary}>
                        <p className={styles.text}>{text}</p>
                    </a>
                    <div className={styles.bottom_secondary}>
                    </div>
                </div>
            );
        } else if (size == 'lg') {
            return (
                <div className={styles.outer_lg}>
                    <a href={href} target='_blank' className={styles.top_secondary_lg}>
                        <p className={styles.text_lg}>{text}</p>
                    </a>
                    <div className={styles.bottom_secondary_lg}>
                    </div>
                </div>
            );
        }
	}
};

export default PushButton;