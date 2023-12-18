import NavBar from './ui/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <p className="text-foreground text-4xl font-bold">Welcome to Buncord, <br />the otterly good Bot :3</p>
      </main>
    </>
  )
}
