import React from "react";
import { draftMode } from "next/headers";
import { Experience } from "@/src/components/Experience";

const Page = ({ params }) => {
  // Check if Draft Mode is enabled.
  const { isEnabled } = draftMode();
  // TODO: Can't set the cookie on localhost with Live Preview, so preview can be forced to `true` here.
  // const isEnabled = true;

  return <Experience slug={params.slug} preview={isEnabled} />;
};

export default Page;
