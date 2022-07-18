import styles from './layout.module.css';

const layout = ({ children }) => <div className={styles.container}>{children}</div>;

export default layout;
