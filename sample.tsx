  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

    const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Array<object> = movieData.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

      {/* <AboutMovie movieData={currentPosts}  /> */}
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movieData.length}
        paginate={paginate}
      /> */}

      


        const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
