"use client";

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export const Duplex = ({ headline, body, cfImageAsset, className }) => {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 py-6 my-12 ${
        className || ""
      }`}
    >
      <div className="text-black flex flex-col justify-center">
        {headline && <h2 className="text-2xl mb-4">{headline}</h2>}
        {body && (
          <div className="text-black">{documentToReactComponents(body)}</div>
        )}
      </div>

      {cfImageAsset && (
        <div className="relative w-full aspect-square">
          <Image
            src={`https:${cfImageAsset.file?.url}`}
            sizes={
              cfImageAsset.sizes ||
              "(min-width: 1280px) 416px, (min-width: 780px) calc(45.42vw - 156px), calc(100vw - 240px)"
            }
            fill={true}
            loading={cfImageAsset.loading || "eager"}
            className="object-cover"
            alt="Alt. Text"
          />
        </div>
      )}
    </section>
  );
};

export default Duplex;
