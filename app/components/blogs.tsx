import React from "react";
import { Card, Image, Button, Link } from "@nextui-org/react";
import blogs from "../../public/data/blogs.json";
import { Divider } from "@nextui-org/react";
const BlogList = () => {
  return (
    <section id="projects">
      <h1 className="text-6xl text-center font-extrabold my-16">Projects </h1>
      <div className="blog-list">
        <h2>Latest Blogs</h2>
        <div className="card-container">
          {blogs.map((blog: any) => (
            <>
              <Link href={blog.link}>{blog.name}</Link>
              <Divider className="my-4" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
