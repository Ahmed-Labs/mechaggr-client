import { type NextPage } from "next";
import React from "react";
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
      className="cursor-pointer border-b border-gray-500 py-4 px-4 hover:bg-[#13181b]"
    >
      <h1>{post.title}</h1>
      <p className="text-gray-300">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default Listing;
