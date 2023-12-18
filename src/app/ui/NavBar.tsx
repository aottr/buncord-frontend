import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { BuncordLogo } from './BuncordLogo';
import { UserNavMenu } from './UserNavMenu';

export default function NavBar() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <BuncordLogo />
                <p className="font-bold text-inherit ml-2">Buncord</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            </NavbarContent>
            <NavbarContent as="div" justify="end">
                <UserNavMenu />
            </NavbarContent>
        </Navbar>
    );
}