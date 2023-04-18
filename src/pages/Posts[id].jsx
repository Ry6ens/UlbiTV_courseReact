import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import { getPostById, getPostComments } from "../api/getPosts";
import Loader from "../components/UI/Loader/Loader";

export default function PostsIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchingPostById, isLoading, Error] = useFetch(async (id) => {
    const response = await getPostById(id);
    setPost(response.data);
  });
  const [fetchingComments, isCommentsLoading, ErrorComments] = useFetch(
    async (id) => {
      const response = await getPostComments(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchingPostById(params.id);
    fetchingComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <div>Comments</div>
          {isCommentsLoading ? (
            <Loader />
          ) : (
            <ul>
              {comments.map((com) => (
                <li key={com.id}>
                  <h5>{com.email}</h5>
                  <div>{com.body}</div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
