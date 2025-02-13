import React from "react";

interface Props {
  params: { slug: number };
}

const BlogArticle = ({ params: { slug } }: Props) => {
  return <div>Blogg {slug}</div>;
};

export default BlogArticle;
