import {
  Form,
  SearchButton,
  SearchInput,
  SearchbarContainer,
} from './searchbar.style'
import SearchIcon from '../../assets/icons/SearchIcon.svg'
import Image from 'next/image'

export default function Searchbar() {
  return (
    <SearchbarContainer>
      <Form>
        <SearchInput type="search" placeholder="Search..." />
        <SearchButton type="submit">
          <Image
            priority
            height={23}
            width={30}
            src={SearchIcon}
            alt="Follow us on Twitter"
          />
        </SearchButton>
      </Form>
    </SearchbarContainer>
  )
}
