import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState } from "react";

import Listing from "../components/Listing";
import ListingPreview from "~/components/ListingPreview";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [selectedListing, setSelectedListing] = useState(Object);
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
        <a
          href="/"
          className="flex min-h-[35px] items-center px-3 font-bold text-white"
        >
          mechfeed
        </a>
        {/* Main content */}
        <div className="flex min-h-0 w-full flex-1">
          {/* Filters */}
          <div className="min-w-[100px] border border-white">Filters</div>
          {/* Listing area */}
          <div className="flex h-full flex-1">
            {/* Buying / Selling Listings and searchbar */}
            {/* <div className="min-h-[50px] border border-white">Search Bar</div> */}
            <div className="flex w-1/2">
              <div className="flex w-1/2 flex-col">
                <div className="border border-white p-3">Buying</div>
                <div className="overflow-y-scroll border">
                  {dummy.map((post) => {
                    return (
                      <Listing post={post} handleClick={setSelectedListing} />
                    );
                  })}
                </div>
              </div>
              <div className="flex w-1/2 flex-col">
                <div className="border border-white p-3">Selling</div>
                <div className="overflow-y-scroll border">
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
              <div className="flex h-1/2 items-center justify-center border border-yellow-100">
                {Object.keys(selectedListing).length === 0 &&
                selectedListing.constructor === Object ? (
                  <div>Select a listing to view it in detail</div>
                ) : (
                  <ListingPreview post={selectedListing} />
                )}
              </div>
              <div className="flex h-1/2 items-center justify-center border border-red-100">
                Image Previews Here (Map all images from all image links found
                in post)
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="z-50 flex min-h-[35px]">
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
