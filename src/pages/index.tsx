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
} from "react-icons/ai";

type postType = {
  title: string;
  author: string;
  postType: string;
  body: string;
  dateCreated: Date;
  url: string;
};

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [selectedListing, setSelectedListing] = useState<postType>(Object);
  const dummy = [
    {
      title:
        "[US-CA] [H] Purple/Gold Mr suit WK, MW Alfheim, Artisans [W] Paypal",
      author: "cdnguyen729",
      postType: "Selling",
      body: "Timestamp: [https://imgur.com/a/G5KBar0](https://imgur.com/a/G5KBar0)\n\n&#x200B;\n\n1. New Purple/Gold weight Mr Suit WK: Comes with all original accessories, 2 hotswap pcbs, gold artisan, pom plate, and matching cablemods purple gold custom cable. $800 shipped \n2. New MW Alfheim Keycap Set: Base, purple novelties, spacebars. $170 shipped \n\nArtisans: \n\n1. Sodiecaps: Emerald Crescent $65 \n2. Phagecaps: Descent Drip $65 \n3. Deathcaps: Champagne Deathcap $80 shipped \n4. AFXcaps: Monk $40 \n\nNO Chat, PM Comment.. \n\nCan meet up in San Jose if you are local. Thank you.",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11o8gpj/usca_h_purplegold_mr_suit_wk_mw_alfheim_artisans/",
    },
    {
      _id: { $oid: "640bede747c0ea0d559b3382" },
      title:
        "[CA-ON] [H] Owlab Mr Suit, Plume65, Keycaps, Artisans, Red Jacket Linears R1 [W] PayPal",
      author: "cwc25",
      postType: "None",
      body: "Timestamp: [https://imgur.com/s1NqhAK](https://imgur.com/s1NqhAK)\n\n&#x200B;\n\nPlease comment and then PM. No chat please.\n\nPrices in USD and doesn't include shipping. \n\nShipping to Canada and CONUS should be around $10-$20 USD depending on weight.\n\n&#x200B;\n\nKeyboards\n\n&#x200B;\n\nPlume 65 Gray - $500 ([https://imgur.com/a/lbOl6LQ](https://imgur.com/a/lbOl6LQ))\n\n\\- Aluminum plate and FR4 plate\n\n\\- Mill-maxed PCB (Split backspace, Stepped or full capslock)\n\n\\- Gray case, no marks\n\n\\- Brass weight, no patina or scuffs\n\n\\- Small imperfections near weight edge (pictured here: [https://imgur.com/sfWnLwA](https://imgur.com/sfWnLwA), [https://imgur.com/l3o9dpg](https://imgur.com/l3o9dpg))\n\n\\- NovelKeys carrying case and dust cloth\n\n&#x200B;\n\n&#x200B;\n\nOwlab Mr. Suit WK Black Popcorn - $650 ([https://imgur.com/a/4QKfMKj](https://imgur.com/a/4QKfMKj))\n\n\\- Limited edition raffle colorway\n\n\\- Only built once\n\n\\- FR4 Plate\n\n\\- Hotswap PCB\n\n\\- Owlstabs\n\n\\- All Foams\n\n\\- Suit Chroma Artisan\n\n\\- Dust cloth and Original box\n\n\\- Some ano mismatch visible in harsh light (see pics)\n\n&#x200B;\n\nKeycaps\n\n&#x200B;\n\nGMK Striker R2 - $140\n\n\\- BNIB, unmounted, opened to verify no defects\n\n&#x200B;\n\n21Kb / Xiaomi - $50 each or $90 together\n\n\\- Green Zhuyin\n\n\\- Green Cyrillic bold\n\n&#x200B;\n\nArtisans - [https://imgur.com/a/2jhrSsa](https://imgur.com/a/2jhrSsa)\n\n&#x200B;\n\nFrost Witch Rudory - Unmounted - $120\n\nAshes Keysune and Pepper Keysune ($90 each or $150 together)\n\nBlack and White Sirius and Off White Sirius ($125 each or $200 together)\n\nMozicaps Olyra Champagne - $40\n\nSalvun Copper Cu Element - $120\n\nKono Store Metal Nines artisan - Unmounted - $40\n\n3x Archetype Kolkrabba Black Friday M89 - $50 each or $125 for all 3\n\nArchetype Kolkrabba Kohauku Collab Velvet - $120\n\nGooey Keys All Black Hecky and Laser Hecky - $25 bundled together\n\n&#x200B;\n\nSwitches\n\n90x Red Jacket Linears R1 Stock - $55\n\n&#x200B;\n\nThanks for stopping by!",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11o8w63/caon_h_owlab_mr_suit_plume65_keycaps_artisans_red/",
    },
    {
      _id: { $oid: "640bee0347c0ea0d559b3383" },
      title: "[EU-DE] [H] 4/5 Lily58 split keyboards [W] PayPal, local cash",
      author: "normanwink",
      postType: "Selling",
      body: "I built five Lily58 keyboards and I love them all, so I'm selling four of them and will keep the one remaining.\n\n[Timestamp](https://imgur.com/a/DMM2L1Q)\n\n**Similarities**\n\n* Case designed and 3D printed by yours truly\n* ProMicro with USB-C\n* Right half master\n* 128x32 OLED screen\n* 6 LEDs for underglow and per-key LEDs (all RGB)\n* Ergonomic knob for single-finger-operation\n* 2mm silicone sheet underneath the PCB for better sound dampening\n* Basics for magnetic tenting\n* Made with love <3\n\n&#x200B;\n\n**Differences**\n\n**Banana Yellow**\n\n* Ajazz Banana tactile switches\n* 3D-printed in Fillamentum PLA Extrafill Traffic Yellow\n* White OLED screens (instead of blue)\n* Price: 65€ + shipping\n\n**Kiwi Green**\n\n* Equalz Kiwi tactile switches\n* Lubed with G-Lube\n* 3D-printed in AmazonBasics translucent green PET-G\n* Price: 90€ + shipping\n\n**Mystic Blue**\n\n* Gazzew Boba silent tactile switches\n* Lubed with G-Lube\n* 3D-printed I'm Fillamentum PLA Extrafill Wizard's Voodoo\n* Price: 85€ + shipping\n\n**Tangerine Orange**\n\n* Equalz Tangerine linear switches\n* Lubed with G-Lube\n* 3D-printed in Fillamentum PLA Extrafill Luminous Orange\n* Price: 90€ + shipping\n\n**Ivory Ice**\n\n* ZealPC Tealios Aqua linear switches\n* Lubed with Krytox GPL 205 G00\n* 3D-printed with Fillamentum ASA Extrafill Natural\n* Price: 110€ + shipping\n\n&#x200B;\n\n**Further notes**\n\nThis is my first sale here on mechmarket, but I have a few transactions on r/watchexchange if that helps :)\n\nI designed the case with removable tenting legs in mind. But I found myself not using them, so I didn't really follow the path.    \nHowever, we can discuss this topic if you're interested.\n\nThe TRRS cable required to run these is not included.\n\nAnd of course:    \nIt's a DIY project, so no warranty. You gotta know your way - hardware and software.\n\nIf a keyboard is sold, I'll ~~strikethrough~~.\n\nThanks and have a nice weekend!",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11o8wia/eude_h_45_lily58_split_keyboards_w_paypal_local/",
    },
    {
      _id: { $oid: "640d6f935b8e537c3946dd7b" },
      title:
        "[US-CA] [H] Rama Wilba Thermal+ (kuro/black and soya/e-beige) [W] PayPal",
      author: "flashcats",
      postType: "Selling",
      body: "Timestamp: \n\nhttps://imgur.com/a/jLoEBBU\n\nI'm selling the following:\n\n\n\nName | Price | Comments\n---|---|----\nRama Wilba Thermal+ (KURO) | $455 | Hotswap PCB; new and sealed in box.\nRama Wilba Thermal+ (SOYA) | $510 | Hotswap PCB; new and sealed in box.\n\n\nAll prices include shipping CONUS, but happy to ship internationally if you pay for the difference.\n\nI'll provide a small discount for the cost of shipping if you pick up local from 90293.",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11p7bua/usca_h_rama_wilba_thermal_kuroblack_and/",
    },
    {
      title:
        "[US-CA] [H] Purple/Gold Mr suit WK, MW Alfheim, Artisans [W] Paypal",
      author: "cdnguyen729",
      postType: "Selling",
      body: "Timestamp: [https://imgur.com/a/G5KBar0](https://imgur.com/a/G5KBar0)\n\n&#x200B;\n\n1. New Purple/Gold weight Mr Suit WK: Comes with all original accessories, 2 hotswap pcbs, gold artisan, pom plate, and matching cablemods purple gold custom cable. $800 shipped \n2. New MW Alfheim Keycap Set: Base, purple novelties, spacebars. $170 shipped \n\nArtisans: \n\n1. Sodiecaps: Emerald Crescent $65 \n2. Phagecaps: Descent Drip $65 \n3. Deathcaps: Champagne Deathcap $80 shipped \n4. AFXcaps: Monk $40 \n\nNO Chat, PM Comment.. \n\nCan meet up in San Jose if you are local. Thank you.",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11o8gpj/usca_h_purplegold_mr_suit_wk_mw_alfheim_artisans/",
    },
    {
      title:
        "[US-CA] [H] Purple/Gold Mr suit WK, MW Alfheim, Artisans [W] Paypal",
      author: "cdnguyen729",
      postType: "Selling",
      body: "Timestamp: [https://imgur.com/a/G5KBar0](https://imgur.com/a/G5KBar0)\n\n&#x200B;\n\n1. New Purple/Gold weight Mr Suit WK: Comes with all original accessories, 2 hotswap pcbs, gold artisan, pom plate, and matching cablemods purple gold custom cable. $800 shipped \n2. New MW Alfheim Keycap Set: Base, purple novelties, spacebars. $170 shipped \n\nArtisans: \n\n1. Sodiecaps: Emerald Crescent $65 \n2. Phagecaps: Descent Drip $65 \n3. Deathcaps: Champagne Deathcap $80 shipped \n4. AFXcaps: Monk $40 \n\nNO Chat, PM Comment.. \n\nCan meet up in San Jose if you are local. Thank you.",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11o8gpj/usca_h_purplegold_mr_suit_wk_mw_alfheim_artisans/",
    },
    {
      title:
        "[US-CA] [H] Purple/Gold Mr suit WK, MW Alfheim, Artisans [W] Paypal",
      author: "cdnguyen729",
      postType: "Selling",
      body: "Timestamp: [https://imgur.com/a/G5KBar0](https://imgur.com/a/G5KBar0)\n\n&#x200B;\n\n1. New Purple/Gold weight Mr Suit WK: Comes with all original accessories, 2 hotswap pcbs, gold artisan, pom plate, and matching cablemods purple gold custom cable. $800 shipped \n2. New MW Alfheim Keycap Set: Base, purple novelties, spacebars. $170 shipped \n\nArtisans: \n\n1. Sodiecaps: Emerald Crescent $65 \n2. Phagecaps: Descent Drip $65 \n3. Deathcaps: Champagne Deathcap $80 shipped \n4. AFXcaps: Monk $40 \n\nNO Chat, PM Comment.. \n\nCan meet up in San Jose if you are local. Thank you.",
      dateCreated: new Date(),
      url: "https://www.reddit.com/r/mechmarket/comments/11o8gpj/usca_h_purplegold_mr_suit_wk_mw_alfheim_artisans/",
    },
  ];
  return (
    <>
      <Head>
        <title>mechfeed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="fixed flex h-screen w-full flex-col bg-gradient-to-b from-[#1E2529] to-[#171D20] text-white">
        {/* Header */}
        <div className="flex min-h-[45px] items-center border px-3">
          <a href="/" className=" font-bold text-white">
            mechfeed
          </a>
        </div>
        {/* Main content */}
        <div className="flex min-h-0 w-full flex-1">
          {/* Filters */}
          <div className="min-w-[100px] border-x">Filters</div>
          {/* Listing area */}
          <div className="flex h-full flex-1">
            {/* Buying / Selling Listings and searchbar */}
            {/* <div className="min-h-[50px] border border-white">Search Bar</div> */}
            <div className="flex w-1/2">
              <div className="flex w-1/2 flex-col">
                <div className="flex items-center border-b p-3">
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
                <div className="overflow-y-scroll border-r">
                  {dummy.map((post) => {
                    return (
                      <Listing post={post} handleClick={setSelectedListing} />
                    );
                  })}
                </div>
              </div>
              <div className="flex w-1/2 flex-col">
                <div className="flex items-center border-l border-b p-3">
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
                <div className="overflow-y-scroll">
                  {dummy.map((post) => {
                    return (
                      <Listing post={post} handleClick={setSelectedListing} />
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Selected Listing Info + Image Preview */}
            <div className="flex w-1/2 flex-col">
              <div className="flex h-1/2 items-center justify-center border-x border-b bg-[#13181b]">
                {Object.keys(selectedListing).length === 0 &&
                selectedListing.constructor === Object ? (
                  <div>Select a listing to view it in detail</div>
                ) : (
                  <ListingPreview post={selectedListing} />
                )}
              </div>
              <div className="flex h-1/2 w-full items-center justify-center border-x">
                <ListingImages ListingBody={selectedListing.body} />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="z-50 flex min-h-[35px] border">
          <div className="flex items-center">
            <span className="relative mx-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-green-300">
              LIVE DATA ACTIVE
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
