// This must be a client component. Currently, experiences only supports client components.
"use client";

import React from "react";
import {
  ExperienceRoot,
  defineComponents,
  defineDesignTokens,
  useFetchBySlug,
} from "@contentful/experiences-sdk-react";

export const Experience = ({ experience, localeCode }) => {
  return <ExperienceRoot experience={experience} locale={localeCode} />;
};
