import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";

//Configure your components, design tokens, and custom breakpoints here

defineComponents([
  // Add your custom components here
  // example:
  // {
  //   component: Button,
  //   definition: {
  //     id: 'custom-button',
  //     name: 'Button',
  //     category: 'Custom Components',
  //     variables: {
  //       text: {
  //         displayName: 'Text',
  //         type: 'Text',
  //         defaultValue: 'Click me'
  //       },
  //     },
  //   },
  // },
]);

defineBreakpoints([
  {
    id: "desktop",
    query: "*",
    displayName: "All Sizes",
    displayIcon: "desktop",
    previewSize: "100%",
  },
  {
    id: "tablet",
    query: "<1024px",
    displayName: "Tablet",
    displayIcon: "tablet",
    previewSize: "820px",
  },
  {
    id: "mobile",
    query: "<576px",
    displayName: "Mobile",
    displayIcon: "mobile",
    previewSize: "390px",
  },
]);

defineDesignTokens({
  spacing: { XS: "4px", S: "16px", M: "32px", L: "64px", XL: "128px" },
  sizing: { XS: "16px", S: "100px", M: "300px", L: "600px", XL: "1024px" },
  color: {
    Slate: "#94a3b8",
    Azure: "azure",
    Orange: "#fdba74",
    Blue: "#0000ff",
  },
  textColor: { Dark: "#1a1a1a", Light: "#ffffff", Slate: "#94a3b8" },
});
