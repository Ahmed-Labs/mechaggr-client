import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

// import probe from "probe-image-size"

type ListingImagesProps = {
  ListingBody: string;
};

type ImgurImage = {
  id: string;
  link: string;
  width: number;
  height: number;
};

const ListingImages: NextPage<ListingImagesProps> = ({ ListingBody }) => {
  const [images, setImages] = useState<ImgurImage[]>([]);

  useEffect(() => {
    async function getImgurLinks(body: string): Promise<string[]> {
      const websiteRegex = new RegExp(
        "(^(http|https):\\/\\/)?(i\\.)?imgur\\.com\\/(?:(?<gallery>gallery\\/)(?<galleryid>\\w+)|(?<album>a\\/)(?<albumid>\\w+)#?)?(?<imgid>\\w*)",
        "gm"
      );
      const matches = ListingBody?.match(websiteRegex);
      return [...new Set(matches)];
    }
    // Add this to api
    async function getAlbumImages(
      albumId: string | undefined
    ): Promise<ImgurImage[]> {
      try {
        const response = await axios.get(
          `http://localhost:3001/album/${albumId}`
        );
        const images = await response.data;
        return images;
      } catch (error) {
        console.log(error);
        return [];
      }
    }

    async function getImages(): Promise<ImgurImage[]> {
      const uniqueMatches = await getImgurLinks(ListingBody);
      const albumIds = uniqueMatches?.map(
        (match) => match?.split("/").slice(-1)[0]
      );
      console.log(albumIds);

      const images = await Promise.all(albumIds.map(getAlbumImages)).then(
        (images) => images.flat()
      );
      return images;
    }

    getImages().then((images) => setImages(images));
  }, [ListingBody]);

  return (
    <div className="flex h-full flex-col overflow-y-auto p-4">
      {images.map((image, idx) => (
        <div key={image.id} className="w-full">
          <Image
            src={image.link}
            alt={`Image preview ${idx}`}
            width={image.width}
            height={image.height}
            priority={true} 
          />
        </div>
      ))}
    </div>
  );
};

export default ListingImages;
