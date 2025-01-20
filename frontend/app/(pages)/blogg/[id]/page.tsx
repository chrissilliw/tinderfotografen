import React from "react";

interface Props {
  params: { id: number };
}

const BlogArticle = ({ params: { id } }: Props) => {
  return <div>Blogg {id}</div>;
};

export default BlogArticle;
