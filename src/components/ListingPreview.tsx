import { type NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type postType = {
  title: string;
  author: string;
  postType: string;
  body: string;
  dateCreated: Date;
  url: string;
};

type listingProps = {
  post?: postType;
};

const ListingPreview: NextPage<listingProps> = ({ post }) => {
  return (
    <div className="h-full w-full overflow-y-auto p-5">
      {post && (
        <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]} />
      )}
    </div>
  );
};

export default ListingPreview;
