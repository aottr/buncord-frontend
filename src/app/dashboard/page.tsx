'use client';
import { redirect } from 'next/navigation';
import { Session, getServerSession } from 'next-auth';
import { Button } from '@nextui-org/button';
import { APIGuild } from 'discord.js';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import GuildTable from '../ui/dashboard/GuildTable';
// This function takes a list of guilds and returns only the ones where the user is an administrator.


export default function Dashboard() {

    const { data: session, status } = useSession();

    const [guilds, setGuilds] = useState<APIGuild[]>([]);

    const getGuilds = (session: Session) => {
        const guilds = fetch('https://discord.com/api/users/@me/guilds', {
            headers: {
                Authorization: `Bearer ${(session?.user as any).access_token}`,
            },
        }).then(res => res.json()).then(res => setGuilds(res.filter((guild: APIGuild) => (Number(guild.permissions) & 0x0000000000000008))));

    }

    if (!session) {
        redirect('/api/auth/signin');
    }
    return (
        <main className="">
            <Button onClick={() => getGuilds(session)} className='mb-10'>Get Guilds</Button>

            <GuildTable guilds={guilds} />
        </main>
    )
}