import { type NextPage } from "next";
import React from "react";
import { getTimeAgoString } from "~/utils/util";
import { AiFillRedditCircle } from "react-icons/ai";
import { isServerDefault } from "@trpc/server/dist/core/internals/config";
type postType = {
  id: string;
  title: string;
  author: string;
  postType: string;
  body: string;
  dateCreated: Date;
  url: string;
};

type listingProps = {
  post: postType;
  isSelected: boolean;
  handleClick: React.Dispatch<React.SetStateAction<postType | null>>;
};
const Listing: NextPage<listingProps> = ({ post, isSelected, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(post)}
      className={`${
        isSelected ? "bg-[#161B22]" : ""
      } cursor-pointer border-b border-[#ffffff36] py-4 px-4 transition delay-75 ease-in-out hover:bg-[#161B22]`}
    >
      <div className="mb-2 flex items-center">
        <h1 className="font-bold">r/Mechmarket</h1>
        {isSelected && (
          <span className="mx-2 h-2 w-2 justify-center rounded-full bg-white"></span>
        )}
        <span className="ml-auto text-gray-400">
          {getTimeAgoString(post.dateCreated)}
        </span>
      </div>
      <h1 className="text-[#77a9ff]">{post.title}</h1>
      <p className="text-gray-300">{post.body.slice(0, 50)}...</p>
    </div>
  );
};

export default Listing;
