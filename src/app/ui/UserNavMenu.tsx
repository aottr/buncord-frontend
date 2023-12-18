"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { NavbarItem, Link, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export function UserNavMenu() {
    const { data: session } = useSession();
    console.log(session);
    if (session) {
        return (
            <>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name={session?.user?.name || "Unknown User"}
                            size="sm"
                            src={session?.user?.image || undefined}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" color="primary" href="/dashboard">
                            Dashboard
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }
    return (
        <>
            <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat" onClick={() => signIn("discord")}>
                    Login
                </Button>
            </NavbarItem>
        </>
    );
}