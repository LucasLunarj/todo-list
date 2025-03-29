import styles from "./styles.module.css";
import rocketLogo from "../../assets/rocket.svg";
export function Header() {
  return (
    <header className={styles.container}>
      <img src={rocketLogo} alt="" />
      <h1>to<span>do</span></h1>
    </header>
  );
}
