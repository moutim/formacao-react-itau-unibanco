import { Button } from '../../../Button/Button'
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'

export const HeaderActions = () => {
  return (
    <div>
      <Button variant='icon'>
        <HiOutlineShoppingCart />
      </Button>

      <Button variant='icon'>
        <HiOutlineUser />
      </Button>
    </div>
  )
}
