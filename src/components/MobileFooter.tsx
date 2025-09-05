import styles from "@/styles/components/MobileFooter.module.css";
import { heart } from "@/lib/Images";

const MobileFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.love}>made with &lt;3 by ACM Hack</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.linkContainer}>
          <a
            target="_blank"
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          >
            Code of Conduct
          </a>
          <a target="_blank" href="https://mlh.io/privacy">
            Privacy Policy
          </a>
        </div>

        <p className={styles.right}>PickHacks 2025</p>
      </div>
    </footer>
  );
};

export default MobileFooter;
