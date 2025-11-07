import { Logo } from '../../../Logo/Logo';
import styles from '../../Footer.module.css';

export const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo src='/assets/logos/Logo.png' alt='Logo'/>
      <p>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}
