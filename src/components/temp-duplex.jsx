"use client";

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import Image from "next/image";
import { imageLoader } from "../lib/image-loader";

export const Duplex = ({ entry }) => {
  const { fields } = useContentfulLiveUpdates(entry);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mt-12">
      <div className="text-white flex flex-col justify-center">
        <h2 className="text-2xl mb-4">{fields.headline || ""}</h2>

        <div>{documentToReactComponents(fields.bodyText || "")}</div>
      </div>

      <Image
        loader={imageLoader}
        width={fields.image.fields.file.details.image.width}
        height={fields.image.fields.file.details.image.height}
        sizes="(min-width: 1280px) 416px, (min-width: 780px) calc(45.42vw - 156px), calc(100vw - 240px)"
        src={`https:${fields.image?.fields.file.url}` || ""}
        className={`order-first ${
          fields.containerLayout ? "md:order-first" : "md:order-last"
        }`}
        alt={fields.image?.fields.title}
      />
    </section>
  );
};

export default Duplex;
