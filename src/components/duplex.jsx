"use client";

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { imageLoader } from "../lib/image-loader";

export const Duplex = ({ headline, body, ...experienceProps }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mt-12">
      <div className="text-black flex flex-col justify-center">
        {headline && <h2 className="text-2xl mb-4">{headline}</h2>}
        {body && <div>{documentToReactComponents(body)}</div>}
      </div>

      {image && (
        <Image
          loader={imageLoader}
          width={image.file.details.image.width}
          height={image.file.details.image.height}
          sizes="(min-width: 1280px) 416px, (min-width: 780px) calc(45.42vw - 156px), calc(100vw - 240px)"
          src={`https:${image.file.url}`}
          alt="asdf"
        />
      )}
    </section>
  );
};

export default Duplex;
