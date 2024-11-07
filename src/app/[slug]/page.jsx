import React from "react";
import { draftMode } from "next/headers";
import {
  detachExperienceStyles,
  fetchBySlug,
} from "@contentful/experiences-sdk-react";
import { getClient } from "@/src/lib/client";
import { Experience } from "@/src/components/Experience";

const Page = async ({ params }) => {
  // Check if Draft Mode is enabled.
  const { isEnabled } = draftMode();
  // TODO: Can't set the cookie on localhost with Live Preview, so preview can be forced to `true` here.
  // const isEnabled = true;

  const localeCode = "en-US";

  const experience = await fetchBySlug({
    client: await getClient({ preview: isEnabled }),
    slug: params.slug,
    experienceTypeId: "page",
    localeCode,
  });

  // Extract the styles from the experience for manual placement.
  // If these are not placed, there may be some odd flashes of unstyled content.
  const stylesheet = experience ? detachExperienceStyles(experience) : null;

  // The experience is not serializable by Next.js directly due to their strict JSON serialization techniques,
  // so we need to serialize the experience ourselves and pass the JSON string as a prop to the component.
  // @see https://www.contentful.com/developers/docs/experiences/using-with-nextjs/#server-side-rendering-using-app-router
  const experienceJSON = experience ? JSON.stringify(experience) : null;

  return (
    <>
      {stylesheet && <style>{stylesheet}</style>}
      <Experience experience={experienceJSON} localeCode={localeCode} />
    </>
  );
};

export default Page;
