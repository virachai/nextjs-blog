import styles from "./TopNavbar.module.css";

function TopNavbar({ children }) {
  return <div className={styles.container}>{children}</div>;
}
