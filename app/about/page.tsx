import Heading from "@Components/Heading";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Heading>About Page</Heading>
    </>
  );
};

export default AboutPage;
