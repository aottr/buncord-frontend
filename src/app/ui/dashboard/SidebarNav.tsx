'use client';
import { User, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function SidebarNav() {

    const { data: session } = useSession();

    return (
        <nav className="w-full flex flex-col h-screen md:w-64 bg-gray-900 text-white p-6">
            <div className="text-left">
                <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                        <User
                            name={session?.user?.name}
                            description="Premium User"
                            avatarProps={{
                                src: session?.user?.image || '',
                            }}
                            className="transition-transform"
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
            </div>
            <div className="flex flex-col h-full pt-10">
                <div className="grid gap-2">
                    <Button color='primary'>Test</Button>
                    <Button color='primary' variant="flat">Test</Button>
                    <Button color='primary' variant="bordered">Test</Button>
                </div>

                <Button color='danger' className='mt-auto' onClick={() => signOut()}>Logout</Button>
            </div>
        </nav>
    )
}