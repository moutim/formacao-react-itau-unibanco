import styles from './SelectorGroup.module.css'
import type SelectorGroup from './ISelectorGroup.interface';

export const SelectorGroup = ({ icon, children, ...rest }: SelectorGroup) => {
  return (
    <div className={ styles.container }>
      {icon && <div className={ styles.icone }>{icon}</div>}
      <select className={ styles.selector } {...rest}>
        { children }
      </select>
    </div>
  )
}
