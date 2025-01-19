import React from "react";
import SocialJsonData from "@/json/social/social.json";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="container flex gap-6 justify-center py-10 z-50 w-full">
      {SocialJsonData && SocialJsonData?.length
        ? SocialJsonData?.map((content, index) => {
            return (
              <Link href={content?.link} key={index} className="cursor-pointer">
                <Image
                  src={content?.logo}
                  alt={content?.alt}
                  color="white"
                  width={30}
                  height={30}
                  priority
                  quality={100}
                />
              </Link>
            );
          })
        : ""}
    </div>
  );
};

export default Footer;
