"use client";
import React from "react";
import { AdminUrls } from "@/data/admin-urls";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

const AdminUrlsLinks = (props: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <span className="flex items-center space-x-6 bg-gray-100 p-3 rounded-xl md:inline-block">
        {AdminUrls?.map((url, idx) => (
          <Link
            href={url.path}
            key={idx}
            className={`${
              pathname === url.path
                ? "bg-main_pink p-2 rounded-lg text-white"
                : "hover:bg-main_pink text-center p-2 hover:text-white rounded-lg"
            }`}
          >
            {url.label}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default AdminUrlsLinks;
