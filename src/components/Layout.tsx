import styles from "@/styles/components/Layout.module.css";
import Navbar from "./Navbar";
interface IProps {
  children: JSX.Element;
}

export default function Layout({ children }: IProps) {
  return (
    <div>
      <div className={styles.imageContainer}></div>
      <Navbar />
      {children}
    </div>
  );
}
