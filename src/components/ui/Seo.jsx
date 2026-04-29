import React from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Codilated";
const TWITTER_HANDLE = "@codilated";
const DEFAULT_OG_IMAGE = "/og-image.png";

export default function Seo({
  title,
  description,
  image,
  type = "website",
  noindex = false,
}) {
  const { pathname } = useLocation();
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const url = `${origin}${pathname}`;

  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${origin}${image}`
    : `${origin}${DEFAULT_OG_IMAGE}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
    </>
  );
}
