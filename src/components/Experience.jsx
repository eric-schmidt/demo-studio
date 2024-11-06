// This must be a client component. Currently, experiences only supports client components.
"use client";

import React from "react";
import {
  ExperienceRoot,
  defineComponents,
  defineDesignTokens,
  useFetchBySlug,
} from "@contentful/experiences-sdk-react";
import { getClient } from "@/src/lib/client";

// These could also be dynamic.
const experienceTypeId = "page";
const localeCode = "en-US";

export const Experience = ({ slug, preview }) => {
  // Fetch the experience from Contentful by the slug.
  const { experience, isLoading, error } = useFetchBySlug({
    client: getClient({ preview }),
    experienceTypeId,
    slug,
    localeCode,
  });

  // console.log(isLoading);
  // console.log(error);

  // if (isLoading) return <h1>Loading...</h1>;
  // if (error)
  //   return (
  //     <div className="bg-red-100 w-full py-24 rounded-lg text-center">
  //       Error: {error.message}
  //     </div>
  //   );

  return <ExperienceRoot experience={experience} locale={localeCode} />;
};
