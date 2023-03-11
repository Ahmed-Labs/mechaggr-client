import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="fixed flex min-h-screen w-full flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="h-[35px]">Header</div>
        <div className="flex w-full flex-1">
          <div className="min-w-[100px]  bg-white">Filters</div>
          <div className="flex flex-1">
            <div className="flex w-1/2 flex-col bg-gray-200">
              <div className="h-[50px] rounded-lg bg-white">Search Bar</div>
              <div className="flex w-full flex-1">
                <div className="w-1/2 bg-green-100">Buying / Trading</div>
                <div className="w-1/2 bg-blue-200">Selling</div>
              </div>
            </div>
            <div className="flex w-1/2 flex-col bg-white">
              <div className="flex h-1/2 items-center justify-center bg-yellow-100">
                Listing Information Here
              </div>
              <div className="flex h-1/2 items-center justify-center bg-red-100">
                Image Previews Here (Map all images from all image links found
                in post)
              </div>
            </div>
          </div>
        </div>
        <div className="h-[35px]">Footer</div>
      </main>
    </>
  );
};

export default Home;
