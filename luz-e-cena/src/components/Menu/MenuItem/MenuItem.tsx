import { Links } from '../../Links/Links'
import type MenuItem from './MenuItem.inteface'

export const MenuItem = ({ children, href = '#' }: MenuItem) => {
  return (
    <li>
      <Links href={href}>{ children }</Links>
    </li>
  )
}
