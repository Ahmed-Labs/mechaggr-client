import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState, useEffect } from "react";

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
import { BsDiscord, BsArrow90DegRight } from "react-icons/bs";
import { getTimeAgoString } from "~/utils/util";
import Modal from "~/components/Modal";
import OnBoarding from "~/components/OnBoarding";
import Alerts from "~/components/Alerts";
import { io } from "socket.io-client";

type postType = {
  id: string;
  title: string;
  author: string;
  postType: string;
  body: string;
  dateCreated: Date;
  url: string;
};

const Home: NextPage = () => {
  const { data, isLoading } = useRedditPosts();
  const [selectedListing, setSelectedListing] = useState<postType | null>(null);
  const [lastFetched, setLastFetched] = useState(new Date());
  const [lastFetchedString, setLastFetchedString] = useState(
    getTimeAgoString(lastFetched)
  );
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setShowOnboarding(true);
    }
  }, [showOnboarding]);

  setInterval(() => {
    setLastFetchedString;
  }, 1000);
  const redditPosts = data;

  useEffect(() => {
    const interval = setInterval(() => {
      setLastFetchedString(getTimeAgoString(lastFetched));
    }, 1000);

    return () => clearInterval(interval);
  }, [lastFetched]);

  function useRedditPosts() {
    const { data, isLoading, refetch } = api.redditPost.getAll.useQuery();

    useEffect(() => {
      const interval = setInterval(() => {
        refetch();
        setLastFetched(new Date());
      }, 60000);
      return () => clearInterval(interval);
    }, [refetch]);

    return { data, isLoading };
  }

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
      <Modal isOpen={showOnboarding}>
        <OnBoarding onClose={() => setShowOnboarding(false)} />
      </Modal>
      <Head>
        <title>mechfeed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* #181b21 */}
      {/* 13161B */}
      <main className="fixed flex h-screen w-full flex-col bg-[#15202B] bg-gradient-to-b text-white">
        {/* Header */}
        <div className="flex min-h-[45px] items-center justify-center border-b border-[#22303C] p-2">
          {/* bg-[#00000026] */}
          <a href="/" className="mr-auto pl-3 font-bold text-white">
            mechfeed
          </a>
          <div className="mr-auto flex items-center rounded border border-[#22303C] bg-[#00000075] py-2">
            <span className="px-3">
              <AiOutlineSearch />
            </span>
            <input
              className="min-w-[300px] bg-[#00000000] outline-none"
              type="text"
              placeholder="Search listings"
            />
          </div>
          <div
            onClick={() => setShowAlerts(true)}
            className="relative flex cursor-pointer items-center rounded border border-[#3e4954] bg-[#00000039] px-3 py-2 font-bold text-[#fffffff7] transition duration-150 ease-in-out hover:border-[#dcdcdc89] hover:bg-[#16161656]"
          >
            <AiFillBell size={23} />
            <div className="absolute top-2 right-2.5 z-10 h-3 w-3 justify-center rounded-full border-2 border-[#161616] bg-[#6ae953]"></div>
          </div>
        </div>
        {/* Main content */}
        <div className="flex min-h-0 w-full flex-1 bg-[#15202B] px-5 py-5">
          <div className="flex h-full flex-1 gap-5">
            <div className="flex w-1/2 gap-3">
              <div className="flex w-1/2 flex-col rounded border border-[#22303C]">
                <div className="flex items-center bg-[#22303C] p-3">
                  <AiFillDollarCircle />
                  <span className="mx-2 font-medium">Buying</span>
                  <div className="ml-auto" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="h-full overflow-x-hidden overflow-y-scroll">
                  {buying?.map((post) => {
                    return (
                      <Listing
                        post={post}
                        isSelected={post.id == selectedListing?.id}
                        handleClick={setSelectedListing}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex w-1/2 flex-col rounded border border-[#22303C]">
                <div className="flex items-center bg-[#22303C] p-3">
                  <AiFillTag />
                  <span className="mx-2 font-medium">Selling / Trading</span>
                </div>
                <div className="h-full overflow-x-hidden overflow-y-scroll">
                  {selling?.map((post) => {
                    return (
                      <Listing
                        post={post}
                        isSelected={post.id == selectedListing?.id}
                        handleClick={setSelectedListing}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Selected Listing Info + Image Preview */}
            <div className="flex w-1/2 flex-col overflow-hidden rounded border border-[#22303C] bg-[#192734]">
              <div className="flex h-1/2 items-center justify-center bg-[#00000000]">
                {selectedListing ? (
                  <ListingPreview post={selectedListing} />
                ) : (
                  <div className="text-md font-normal text-[#c2cad8]">
                    Select a listing to view it in detail
                  </div>
                )}
              </div>
              <div className="flex h-1/2 w-full items-center justify-center overflow-hidden">
                {selectedListing ? (
                  <ListingImages ListingBody={selectedListing.body} />
                ) : (
                  <img className="w-full" src={"/hhkb.png"} />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="z-50 flex min-h-[35px] border-t border-[#22303C]">
          <div className="mr-3 flex items-center">
            <span className="relative mx-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-green-300">
              LIVE DATA ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-3 border-x border-[#22303C] px-4 ">
            <BsDiscord />
            <AiFillRedditCircle />
          </div>
          <div className="flex items-center px-4 text-[#ffffffc8]">
            {lastFetchedString}
          </div>
        </div>
        {/* Alerts */}
        <Modal isOpen={showAlerts}>
          <Alerts onClose={() => setShowAlerts(false)} />
        </Modal>
      </main>
    </>
  );
};

export default Home;
