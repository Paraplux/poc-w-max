import { Link } from "react-router-dom";
import { NavigationWrapper } from "./Navigation.style";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from "@chakra-ui/icons"

function Navigation () {
    return (
            <NavigationWrapper>
                <Link to="/">Logo</Link>
                <div>
                    <Menu>
                        <MenuButton colorScheme="purple" as={Button} rightIcon={<ChevronDownIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <Link to="/login"><MenuItem>Se connecter</MenuItem></Link>
                            <Link to="/about"><MenuItem>A propos</MenuItem></Link>
                        </MenuList>
                    </Menu>
                </div>
            </NavigationWrapper>
    )
}

export default Navigation;