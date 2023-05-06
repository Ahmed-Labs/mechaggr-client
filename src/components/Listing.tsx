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
      className={`${isSelected? "bg-[#0000004e]": ""} cursor-pointer border-b border-[#ffffff36] py-4 px-4 hover:bg-[#0000004e] transition ease-in-out delay-75`}
    > 
      <div className="flex items-center mb-2">
        <h1 className="font-bold">r/Mechmarket</h1>
        {isSelected && <span className="bg-white justify-center w-2 h-2 rounded-full mx-2"></span>}
        <span className="ml-auto text-gray-400">
          {getTimeAgoString(post.dateCreated)}
        </span>
      </div>
      <h1>{post.title}</h1>
      <p className="text-gray-300">{post.body.slice(0, 50)}...</p>
    </div>
  );
};

export default Listing;
