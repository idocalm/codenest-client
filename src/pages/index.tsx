import { Database, Globe } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Step from "~/components/Step";

import { api } from "~/utils/api";

const Home = () => {

  return (
    <>
      <Head>
        <title>CodeNest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col py-20 gap-16 items-center bg-gradient-to-b from-[#0a0e14] to-[#0d1117]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4">
          <div className="container flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#ff5100] to-[#9849ff] sm:text-[5rem]">
              CodeNest
            </h1>
            <span className="text-white font-medium">
                Create • Share • Teach • Study
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Card 
              title="Large database"
              subtitle="Enjoy a wide pool of code problems to improve your skills"
            >
              <div className="container flex flex-col justify-center items-center gap-3">
                  <div className="container flex flex-row gap-4">
                    <Database />
                    <span className="text-white font-medium">
                      Over 1000+ problems and solutions with tests and explanations
                    </span>
                  </div>
                  <div className="container flex flex-row gap-4">
                    <Globe />
                    <span className="text-white font-medium">
                      Trusted by hundreds of teachers around the globe
                    </span>
                  </div>

              </div>
            </Card>
            <Card 
              title="How does it work"
              subtitle="Just choose one from our pool of problems! The rest is on us."
            >
              <div className="container w-full flex flex-row justify-center items-center gap-3">
                <Step number={1} text="Signup for free" />
                <Step number={2} text="Build your class" />
                <Step number={3} text="Start coding!" />
              </div>
            </Card>

          </div>
        </div>
        <Button>Sign In</Button>

      </main>
    </>
  );
}

export default Home;

/*
function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
*/