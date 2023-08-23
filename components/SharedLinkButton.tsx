"use client";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

function SharedLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  console.log("[Shared Link Button] rendering with props");

  return (
    <button
      onClick={handleShareClick}
      className="border flex gap-1 items-center border-slate-500 px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-200 hover:text-slate-700"
    >
      <LinkIcon className="w-4 h-4" />
      {clicked ? "Link copied" : "Share link"}
    </button>
  );
}

export default SharedLinkButton;
