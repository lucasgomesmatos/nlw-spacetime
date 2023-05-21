import { Blur } from "@/components/blur";
import { Copyright } from "@/components/copyright";
import { EmptyMemories } from "@/components/empty-memories";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { SignIn } from "@/components/signIn";
import { Stripes } from "@/components/stripes";
import { cookies } from "next/headers";

export default function Home() {
  const isAuthenticated = cookies().has("token");

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <Blur />
        <Stripes />
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  );
}
