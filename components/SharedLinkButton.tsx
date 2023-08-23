"use client";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SharedLinkButton(props) {
  const [clicked, setClicked] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <button
      onClick={handleShareClick}
      className="border border-slate-500 px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-200 hover:text-slate-700"
    >
      <FontAwesomeIcon icon={faShare} className="pr-2" />
      {clicked ? "Link copied" : "Share this post"}
    </button>
  );
}

export default SharedLinkButton;
