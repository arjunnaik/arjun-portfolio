// components/Header.tsx
"use client"; // Mark this component as a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import Image from "next/image";
import { socialMediaMapping } from "../../utils/socialMedia";
import { pagesMapping } from "@/utils/pages";

const Header: React.FC = () => {
  const currentPath = usePathname();
  const title = "Arjun Naik"

  return (
    <div className="container">
      <h1>{title}</h1>
      <ul className="main">
        {pagesMapping.map((data, index) => (
          <li key={index} className="list">
            {currentPath === data.url ? (
              <span className="disabled">{data.name}</span>
            ) : (
              <Link href={data.url}>{data.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <div>
        {socialMediaMapping.map((obj) => (
          <Link key={obj.alt} href={obj.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={obj.icon}
              className="image"
              alt={obj.alt}
              width={30}
              height={30}
              loading={"lazy"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
