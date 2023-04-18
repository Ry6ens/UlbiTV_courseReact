import React, { useEffect, useState } from "react";

import Form from "../components/Form/Form";
import PostFilter from "../components/PostFilter/PostFilter";
import PostsList from "../components/PostsList/PostsList";

import MyButton from "../components/UI/MyButton/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";

import { usePosts } from "../hooks/usePosts";
import { useFetch } from "../hooks/useFetch";

import { getTotalPages } from "../utils/pages";

import { getPosts } from "../api/getPosts";

import "../App.css";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  // Custom hooks
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, postsIsLoading, postsError] = useFetch(
    async (limit, page) => {
      const response = await getPosts(limit, page);
      setPosts(response.data);

      const headerTotalCount = response.headers["x-total-count"];
      setTotalPages(getTotalPages(headerTotalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function deletePost(post) {
    const newArrayPosts = posts.filter((item) => item.id !== post.id);
    setPosts(newArrayPosts);
  }

  function changePage(page) {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <section>
      <MyButton className="modalBtn" onClick={() => setModal(true)}>
        CREATE POST
      </MyButton>
      <MyModal active={modal} setModal={setModal}>
        <Form addPost={addPost} setPosts={setPosts} />
      </MyModal>
      <hr style={{ margin: "25px auto 0px auto", width: "600px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: "25px auto 0px auto", width: "600px" }} />
      {postsError && (
        <h2 style={{ margin: "20px auto 0px auto", width: "600px" }}>
          {postsError}
        </h2>
      )}
      {postsIsLoading ? (
        <Loader />
      ) : (
        <PostsList posts={sortedAndSearchedPosts} deletePost={deletePost} />
      )}
      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </section>
  );
}
