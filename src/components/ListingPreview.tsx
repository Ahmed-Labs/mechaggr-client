import { type NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillRedditCircle } from "react-icons/ai";
import { ReactNode } from "react";
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
};
// https://api.imgur.com/post/v1/albums/G5KBar0?client_id=546c25a59c58ad7&include=media%2Cadconfig%2Caccount
const ListingPreview: NextPage<listingProps> = ({ post }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center bg-[#0000005b] px-4 py-2 font-bold">
        <span className="text-[#FF5700] bg-white rounded-lg mr-3"><AiFillRedditCircle size={35} /></span>
        <div>
          <h1>r/MechMarket</h1>
          <a
            target="_blank"
            href={`https://www.reddit.com/user/${post.author}`}
          >
            u/{post.author}
          </a>
        </div>
        <a target="_blank" href={post.url} className="ml-auto">
          <BiLinkExternal size={30} />
        </a>
      </div>

      <div className="relative flex-1 overflow-y-auto p-2">
        <div className="p-3">
          <div className="mb-3 font-bold">{post.title}</div>
          <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
};

export default ListingPreview;
