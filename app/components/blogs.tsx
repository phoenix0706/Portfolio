"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/react";
import blogs from "../../public/data/blogs.json";
import { Divider } from "@nextui-org/react";
import CButton from "./button";
interface BlogDetail {
  name: string;
  link: string;
}
const Blogs = () => {
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const handleViewAllClick = () => {
    setShowAllBlogs(true);
  };
  const handleViewLessClick = () => {
    setShowAllBlogs(false);
  };
  const renderBlogs = () => {
    return blogs
      .slice(0, showAllBlogs ? blogs.length : 4)
      .map((blog: BlogDetail, index: number) => (
        <>
          <Link
            key={index}
            showAnchorIcon
            href={blog.link}
            target="_blank"
            className="text-white visited:visited:text-purple-600"
          >
            {blog.name}
          </Link>
          <Divider className="my-4" />
        </>
      ));
  };
  return (
    <>
      <section id="blogs" style={{ zIndex: 10 }}>
        <h1 className="text-6xl text-center font-extrabold my-16">Blogs </h1>

        <div className="card-container">{renderBlogs()}</div>
        {!showAllBlogs ? (
          <CButton color="secondary" onClick={handleViewAllClick}>
            View All
          </CButton>
        ) : (
          <CButton color="secondary" onClick={handleViewLessClick}>
            View Less
          </CButton>
        )}
      </section>
    </>
  );
};

export default Blogs;
