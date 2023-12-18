import type { APIGuild } from 'discord.js';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Button } from "@nextui-org/react";
import { EditIcon } from '../icons/EditIcon';
import { DeleteIcon } from '../icons/DeleteIcon';

export default function GuildTable({ guilds }: { guilds: APIGuild[] }) {
    return (
        <Table aria-label="Example static collection table">

            <TableHeader>
                <TableColumn>Guilds</TableColumn>
                <TableColumn align='end'>Action</TableColumn>
            </TableHeader>

            <TableBody emptyContent={"Please load the guilds"}>
                {guilds.map(guild => (
                    <TableRow key={guild.name}>
                        <TableCell>
                            <User
                                avatarProps={{ radius: "lg", src: guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : '' }}
                                description="Administrator"
                                name={guild.name}
                            >
                                {guild.name}
                            </User>
                        </TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Button size='sm' color='secondary'>Edit</Button>
                                <Button size='sm' color='danger'>Delete</Button>
                                <Button size='sm' color='success'>Invite</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}