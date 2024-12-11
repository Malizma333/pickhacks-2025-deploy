import styles from '@/styles/components/Layout.module.css';
import Navbar from './Navbar';
interface IProps {
	children: JSX.Element;
}

export default function Layout({ children }: IProps) {
	return (
		<div className={styles.main}>
			<Navbar />
			{children}
		</div>
	);
}
