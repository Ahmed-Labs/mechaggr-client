import { type NextPage } from "next";
import React from "react";
import { getTimeAgoString } from "~/utils/util";
import { AiFillRedditCircle } from "react-icons/ai";
type postType = {
  title: string;
  author: string;
  postType: string;
  body: string;
  dateCreated: Date;
  url: string;
};

type listingProps = {
  post: postType;
  handleClick: React.Dispatch<React.SetStateAction<postType>>;
};
const Listing: NextPage<listingProps> = ({ post, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(post)}
      className="cursor-pointer border-b border-gray-500 py-4 px-4 hover:bg-[#0000004e]"
    >
      <div className="flex">
        <h1 className="font-bold">r/Mechmarket</h1>

        <span className="ml-auto mb-2 text-gray-400">
          {getTimeAgoString(post.dateCreated)}
        </span>
      </div>
      <h1>{post.title}</h1>
      <p className="text-gray-300">{post.body.slice(0, 50)}...</p>
    </div>
  );
};

export default Listing;
