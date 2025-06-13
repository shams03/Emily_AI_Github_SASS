
import Head from "next/head";
import Index from "./Index";

export default async function Home() {  
  
  return (
    <>
      <Head>
        <title>Emily - AI GitHub and Meeting SaaS</title>
        <meta
          name="description"
          content="AI-powered GitHub and Meeting Management SaaS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Index />
    </>
  );
}

