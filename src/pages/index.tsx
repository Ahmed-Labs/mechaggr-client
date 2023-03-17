import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState } from "react";

import Listing from "../components/Listing";
import ListingPreview from "~/components/ListingPreview";
import ListingImages from "~/components/ListingImages";

import {
  AiFillTag,
  AiFillDollarCircle,
  AiFillRedditCircle,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

type postType = {
  title: string;
  author: string;
  postType: string;
  body: string;
  dateCreated: Date;
  url: string;
};

const Home: NextPage = () => {
  const redditPosts: postType[] | undefined = api.redditPost.getAll
    .useQuery()
    .data?.slice(0, 100);
  console.log(redditPosts);
  const [selectedListing, setSelectedListing] = useState<postType>(Object);

  function partitionListings(array: postType[] | undefined) {
    const res: [postType[], postType[]] = [[], []];
    if (!redditPosts) return res;
    for (let i = 0; i < redditPosts.length; i++) {
      const post = redditPosts[i];
      if (
        post &&
        (post.postType == "Group Buy" || post.postType == "Interest Check")
      )
        continue;
      if (post && post.postType == "Buying") res[0].push(post);
      else if (post) res[1].push(post);
    }
    return res;
  }

  const [buying, selling] = partitionListings(redditPosts);
  return (
    <>
      <Head>
        <title>mechfeed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="fixed flex h-screen w-full flex-col bg-gradient-to-b from-[#1E2529] to-[#171D20] text-white">
        {/* Header */}
        <div className="flex min-h-[45px] items-center justify-center border border-[#4c5761] px-3">
          <a href="/" className="mr-auto pl-3 font-bold text-white">
            mechfeed
          </a>
          <div className="my-2 mr-auto flex items-center border border-[#4c5761] bg-[#121618] py-2">
            <span className="px-3">
              <AiOutlineSearch />
            </span>
            <input
              className="min-w-[300px] bg-[#121618] outline-none"
              type="text"
              placeholder="Search listings"
            />
          </div>
          <div className="flex items-center bg-[#a2b6c8] px-3 py-2 font-semibold text-black">
            <AiFillBell size={23} />
            <span className="ml-2">Alerts</span>
          </div>
        </div>
        {/* Main content */}
        <div className="flex min-h-0 w-full flex-1">
          {/* Filters */}
          {/* <div className="min-w-[100px] border-x border-[#4c5761] flex justify-center pt-4">Filters</div> */}
          {/* Listing area */}
          <div className="flex h-full flex-1">
            {/* Buying / Selling Listings and searchbar */}
            {/* <div className="min-h-[50px] border border-white">Search Bar</div> */}
            <div className="flex w-1/2">
              <div className="flex w-1/2 flex-col">
                <div className="flex items-center border-l border-b border-[#4c5761] p-3">
                  <AiFillDollarCircle />
                  <span className="mx-2">Buying</span>
                  <div className="ml-auto" role="status">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-5 w-5 animate-spin fill-[#a4b7c1] text-gray-200 dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="h-full overflow-y-scroll border-x border-[#4c5761]">
                  {buying?.map((post) => {
                    return (
                      <Listing post={post} handleClick={setSelectedListing} />
                    );
                  })}
                </div>
              </div>
              <div className="flex w-1/2 flex-col">
                <div className="flex items-center border-l border-b border-[#4c5761] p-3">
                  <AiFillTag />
                  <span className="mx-2">Selling / Trading</span>
                  <div className="ml-auto" role="status">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-5 w-5 animate-spin fill-[#a4b7c1] text-gray-200 dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="h-full overflow-y-scroll">
                  {selling?.map((post) => {
                    return (
                      <Listing post={post} handleClick={setSelectedListing} />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Selected Listing Info + Image Preview */}
            <div className="flex w-1/2 flex-col">
              <div className="flex h-1/2 items-center justify-center border-x border-b border-[#4c5761] bg-[#13181b]">
                {Object.keys(selectedListing).length === 0 &&
                selectedListing.constructor === Object ? (
                  <div>Select a listing to view it in detail</div>
                ) : (
                  <ListingPreview post={selectedListing} />
                )}
              </div>
              <div className="flex h-1/2 w-full items-center justify-center border-x border-[#4c5761]">
                <ListingImages ListingBody={selectedListing.body} />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="z-50 flex min-h-[35px] border border-[#4c5761]">
          <div className="flex items-center mr-3">
            <span className="relative mx-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-green-300">
              LIVE DATA ACTIVE
            </span>
          </div>
          <div className="flex gap-3 items-center border-x border-[#4c5761] px-2">
            <BsDiscord />
            <AiFillRedditCircle />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
