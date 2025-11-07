import style from './Links.module.css'

export const Links = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a className={style.link} {...rest}>{ children }</a>
}
