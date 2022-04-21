import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import InfiniteScroll from 'react-infinite-scroll-component';
import Heart from '../components/Heart';
import Filter from '../components/Filter';

const ExplorePage = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState('');
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [likes, setLikes] = useState([]);
  const [sort, setSort] = useState('detailsViewCount,desc');
  // const [filtered, setFiltered] = useState([]);
  // const [acvtiveTag, setActiveTag] = useState(0);

  const [searchText, setSearchText] = useState('');

  const userCode = 1; //임시

  // const [search, setSearch] = useState('');
  // const onSearch = (e) => {
  //   e.preventDefault();
  //   if(search === null || search === '') {
  //     axios.get()
  //   }
  // }
  // const onChangeSearch = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  const newData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies?page=0&sort=${sort}`);
      console.log(res.data.content);
      setMovies(res.data.content);
      setTotal(res.data.totalElements);
      // setFiltered(res.data.content);

      res.data.last ? setHasMore(false) : setPage(page + 1);
    } catch (e) {
      console.error(e);
    }
  };

  const moreData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies?page=${page}&sort=${sort}`);
      setMovies(movies.concat(res.data.content));
      setTotal(res.data.totalElements);

      res.data.last ? setHasMore(false) : setPage(page + 1);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/user/${userCode}/like`);

        const likes = res.data.map((element) => (element = element.contentCode));
        setLikes(likes); // 좋아요 누른 컨텐츠 contentCode만 추출해서 배열에 저장

        newData();
      } catch (e) {
        console.error(e);
      }
    })();
  }, [sort]);

  const isLiked = (contentCode) => {
    return likes.includes(contentCode); //값이 likes 배열에 있는지 확인함
  };

  //********검색 ...?********//
  // const MovieSearch = () => {
  //   const [query, setQuery] = useState('');
  //   const handleQuery = (e) => {
  //     setQuery(e.target.value);
  //   };
  // };
  // const handleButton = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/movies/searchText`, {
  //       params: {
  //         query: query,
  //       },
  //     });
  //     if (res && res.status === 200) {
  //       const { data } = res;
  //       console.log(data);
  //       setMovies(data.movies);
  //     }
  //   } catch (e) {
  //     console.log('error', e);
  //   }
  // };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const searchMovies = async (e) => {
    try {
      const res = await axios.get(`${BASE_URL}/movies/searchText?texts=${searchText}`);
      console.log(res);
    } catch (e) {
      console.error(e);
    }

    //아직 콘솔에만 찍을거임  ..(위에 고쳐야 됨..)
  };

  return (
    <div>
      <main>
        <div className="filters_full element_to_stick">
          <div className="container">
            <div className="add_top_10 clearfix row">
              <div className="col-md-5 row" style={{ alignContent: 'center' }}>
                <div className="custom_select">
                  <select
                    name="sort"
                    id="sort"
                    className="col-md-3"
                    style={{ marginRight: 10 }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSort(e.target.value);
                    }}
                  >
                    <option value="detailsViewCount,desc">인기순</option>
                    <option value="">인덱스순</option>
                  </select>
                  {/*</div>*/}
                </div>
              </div>
              <div className="col-md-5 search_bar" style={{ marginLeft: 'auto' }}>
                <input type="text" className="form-control" placeholder="무엇을 찾고 있나요?" onChange={handleChange} />
                <input type="submit" value="검색" onClick={searchMovies} />
              </div>
            </div>
          </div>
        </div>

        {/* /filters_full */}
        <div className="container margin_30_40">
          <div className="page_header">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link to="/mainPage">Home</Link>
                </li>
                <li>
                  <Link to="#">category</Link>
                </li>
                <li>인기 콘텐츠</li>
              </ul>
            </div>
            <h1>All: </h1>
            <span>{total}</span>
            {/* /filter */}
            <Filter />
            {/* <Filter movies={movies} setFiltered={setFiltered} acvtiveTag={acvtiveTag} setActiveTag={setActiveTag} /> */}
          </div>
          {/* /page_header */}
          <InfiniteScroll
            dataLength={movies.length}
            next={moreData}
            hasMore={hasMore}
            // hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="row">
              {movies.map((movie, i) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={movie.contentCode}>
                  <div className="strip">
                    <figure>
                      <img src={movie.contentImgVer} className="lazy" alt="" width="533" height="400" />
                      <Link to={`/main/detailPage/${movie.contentCode}`} className="strip_info">
                        <div className="item_title">
                          <h3>{movie.contentName}</h3>
                        </div>
                      </Link>
                    </figure>
                    <ul>
                      <li>
                        <div className="author">
                          <div className="author_thumb veryfied">
                            <figure>
                              <img src={movie.ottImg} alt="" className="lazy" width="100" height="100" style={{ objectFit: 'cover' }} />
                              <img src={movie.ageRating} alt="" className="lazy" width="100" height="100" />
                            </figure>
                          </div>
                          <h6>{movie.ottName}</h6>
                        </div>
                      </li>
                      <li>
                        <Heart isLiked={isLiked(movie.contentCode)} contentCode={movie.contentCode} />
                        view: {movie.detailsViewCount}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    </div>
  );
};

export default ExplorePage;
