import { HeaderListItem } from "./components/HeaderListItem/HeaderListItem"
import { Logo } from "../Logo/Logo"
import { HeaderLinks } from "./components/HeaderLinks/HeaderLinks"
import { HeaderList } from "./components/HeaderList/HeaderList"
import { HeaderFormField } from "./components/HeaderFormField/HeaderFormField"
import { HeaderActions } from "./components/HeaderActions/HeaderActions"

export const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src='/assets/logos/Logo.png' />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormField />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  )
}