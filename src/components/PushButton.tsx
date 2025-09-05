import styles from "@/styles/components/PushButton.module.css";
import { PropsWithChildren } from "react";

type PushButtonProps = {
  variant: "primary" | "secondary";
  width: string;
  onClick?: Function;
};

const PushButton: React.FC<PropsWithChildren<PushButtonProps>> = ({
  variant,
  onClick,
  width,
  children,
}) => {
  return (
    <div style={{ width, aspectRatio: "137/48" }}>
      {/* Keep hitbox on top */}
      <div className={styles.hitbox} onClick={() => onClick && onClick()}></div>
      <div
        className={
          variant === "primary" ? styles.top_primary : styles.top_secondary
        }
      >
        {children}
      </div>
      <div
        className={
          variant === "primary"
            ? styles.bottom_primary
            : styles.bottom_secondary
        }
      ></div>
    </div>
  );
};

export default PushButton;
