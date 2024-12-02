import React from "react";
import { draftMode } from "next/headers";
import {
  detachExperienceStyles,
  fetchBySlug,
} from "@contentful/experiences-sdk-react";
import { notFound } from "next/navigation";
import { getClient } from "@/src/lib/client";
import { Experience } from "@/src/components/experience";
import "@/src/components/studio-config";

const Page = async ({ params }) => {
  // Check if Draft Mode is enabled.
  let { isEnabled } = draftMode();
  // Sometimes it is helpful to override Draft Mode when testing.
  // isEnabled = true;

  let experience;
  const experienceTypeId = "page";
  const localeCode = "en-US";

  try {
    experience = await fetchBySlug({
      client: await getClient({ preview: isEnabled }),
      slug: params.slug,
      experienceTypeId,
      localeCode,
    });
  } catch (error) {
    console.error(error);
    return notFound();
  }

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
