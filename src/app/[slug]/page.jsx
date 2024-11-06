import React from "react";
import { draftMode } from "next/headers";
import { getEntriesBySlug } from "@/src/lib/client";
import { ComponentResolver } from "@/src/components/ComponentResolver";
import { notFound } from "next/navigation";

const landingPage = async ({ params }) => {
  // Check if Draft Mode is enabled.
  const { isEnabled } = draftMode();
  // TODO: Can't set the cookie on localhost with Live Preview, so preview can be forced to `true` here.
  // const isEnabled = true;

  const pages = await getEntriesBySlug({
    preview: isEnabled,
    contentType: "landingPage",
    slug: params.slug,
    includeDepth: 1,
  });

  if (pages.length === 0) {
    notFound();
  }

  return (
    <>
      {pages &&
        pages.map((page) =>
          page.fields.content?.map((entry) => (
            <ComponentResolver key={entry.sys.id} entry={entry} />
          ))
        )}
    </>
  );
};

export default landingPage;
