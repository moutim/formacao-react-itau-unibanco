import { FooterInfo } from "./components/FooterInfo/FooterInfo"
import { FooterLogo } from "./components/FooterLogo/FooterLogo"
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
      </div>
    </footer>
  )
}
