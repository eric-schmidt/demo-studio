// This must be a client component. Currently, experiences only supports client components.
"use client";

import React from "react";
import { ExperienceRoot } from "@contentful/experiences-sdk-react";
import "@/src/components/studio-config";

export const Experience = ({ experience, localeCode }) => {
  return <ExperienceRoot experience={experience} locale={localeCode} />;
};
