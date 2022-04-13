import React from "react";

const LikePage = () => {
  return <div>
    <main>
      <div className="container margin_30_40" id="wrapper" style={{paddingTop: 60}}>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="main_profile">
              <div className="author">
                <div className="author_thumb veryfied">
                  <figure>
                    <img
                        src="img/profile.svg"
                        data-src="img/profile.svg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                    />
                  </figure>
                </div>
              </div>
              <h1>User Name</h1>

              <small>Member since July 25 2021</small>
              <div className="follow_buttons">
                <ul>
                  <li>
                    <a href="#0"><i className="bi bi-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i className="bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i className="bi bi-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i className="bi bi-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 ps-lg-5">
            <div className="tabs_detail">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <h3>나의 찜 목록</h3>
                </li>
              </ul>
              <div className="tab-content" role="tablist">
                <div
                    id="pane-A"
                    className="card tab-pane fade show active"
                    role="tabpanel"
                >
                  <div className="card-header" role="tab" id="heading-A">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-A"
                      >
                        Created
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-A" className="collapse" role="tabpanel">
                    <div className="row mt-lg-5 mt-3">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <img
                                src="https://image.tving.com/upload/cms/caip/CAIP0900/P001565742.jpg/dims/resize/F_webp,400"
                                data-src="https://image.tving.com/upload/cms/caip/CAIP0900/P001565742.jpg/dims/resize/F_webp,400"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>돼지의 왕</h3>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="" className="author">
                                <div className="author_thumb veryfied">
                                  <figure>
                                    <img
                                        src="img/tving_logo.jpeg"
                                        data-src="img/tving_logo.jpeg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>티빙</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              159
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <img
                                src="https://images.justwatch.com/poster/262548358/s592/sanae-majseon"
                                data-src="https://images.justwatch.com/poster/262548358/s592/sanae-majseon"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>사내 맞선</h3>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="" className="author">
                                <div className="author_thumb veryfied">
                                  <figure>
                                    <img
                                        src="img/tving_logo.jpeg"
                                        data-src="img/tving_logo.jpeg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>티빙</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              129
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <img
                                src="https://img.etoday.co.kr/pto_db/2020/11/600/20201120085354_1542881_800_1185.jpg"
                                data-src="https://img.etoday.co.kr/pto_db/2020/11/600/20201120085354_1542881_800_1185.jpg"
                                className="lazy"
                                alt=""
                                width="598"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>퀸스갬빗</h3>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="" className="author">
                                <div className="author_thumb veryfied">
                                  <figure>
                                    <img
                                        src="img/netflix_logo.jpeg"
                                        data-src="img/netflix_logo.jpeg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>넷플릭스</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <img
                                src="https://image.news1.kr/system/photos/2022/1/14/5168731/article.jpg/dims/optimize"
                                data-src="https://image.news1.kr/system/photos/2022/1/14/5168731/article.jpg/dims/optimize"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>지금 우리 학교는</h3>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/netflix_logo.jpeg"
                                        data-src="img/netflix_logo.jpeg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>넷플릭스</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              141
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <img
                                src="data:image/jpeg;base64,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"
                                data-src="data:image/jpeg;base64,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"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>브리저튼</h3>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/netflix_logo.jpeg"
                                        data-src="img/netflix_logo.jpeg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>넷플릭스</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                  </div>
                </div>
                {/* /tab */}
                <div id="pane-B" className="card tab-pane fade" role="tabpanel">
                  <div className="card-header" role="tab" id="heading-B">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-B"
                      >
                        On Sale
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-B" className="collapse" role="tabpanel">
                    <div className="row mt-lg-5 mt-3">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <a href="#modal-dialog" className="btn_1 modal_popup"
                            >Place a bid</a
                            >
                            <img
                                src="img/items/item-1-placeholder.png"
                                data-src="img/items/item-12.jpg"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>Brain Storm</h3>
                                <small>2.95 ETH</small>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="author.html" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/avatar-placeholder.png"
                                        data-src="img/avatar1.jpg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>@George_lucas</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <a href="#modal-dialog" className="btn_1 modal_popup"
                            >Place a bid</a
                            >
                            <img
                                src="img/items/item-1-placeholder.png"
                                data-src="img/items/item-11.jpg"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>Hello World!</h3>
                                <small>1.25 ETH</small>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="author.html" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/avatar-placeholder.png"
                                        data-src="img/avatar1.jpg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>@George_lucas</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <a href="#modal-dialog" className="btn_1 modal_popup"
                            >Place a bid</a
                            >
                            <img
                                src="img/items/item-1-placeholder.png"
                                data-src="img/items/item-10.jpg"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>Clock Ocean</h3>
                                <small>0.95 ETH</small>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="author.html" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/avatar-placeholder.png"
                                        data-src="img/avatar1.jpg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>@George_lucas</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                  </div>
                </div>
                {/* /tab */}
                <div id="pane-C" className="card tab-pane fade" role="tabpanel">
                  <div className="card-header" role="tab" id="heading-E">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-C"
                      >
                        Following
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-C" className="collapse" role="tabpanel">
                    <div className="follow_list mt-lg-3">
                      <ul>
                        <li>
                          <div className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar1.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <div>
                              <h6>@George_lucas</h6>
                              <a href="#0">Unfollow</a>
                            </div>
                          </div>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_1.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_2.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_3.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_4.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <div className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar2.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <div>
                              <h6>@Monica_claus</h6>
                              <a href="#0">Unfollow</a>
                            </div>
                          </div>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_5.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_6.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_7.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_8.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <div className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar3.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <div>
                              <h6>@Frederick</h6>
                              <a href="#0">Unfollow</a>
                            </div>
                          </div>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_9.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_10.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_11.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_12.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /follow_list */}
                  </div>
                </div>
                {/* /tab */}
                <div id="pane-D" className="card tab-pane fade" role="tabpanel">
                  <div className="card-header" role="tab" id="heading-D">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-D"
                      >
                        Followers
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-D" className="collapse" role="tabpanel">
                    <div className="follow_list mt-lg-3">
                      <ul>
                        <li>
                          <a href="#0" className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar1.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <h6>@George_lucas</h6>
                          </a>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_1.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_2.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_3.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_4.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <a href="#0" className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar2.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <h6>@Monica_claus</h6>
                          </a>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_5.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_6.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_7.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_8.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <a href="#0" className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar3.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <h6>@Frederick</h6>
                          </a>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_9.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_10.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_11.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_12.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /follow_list */}
                  </div>
                </div>
                {/* /tab */}
              </div>
              {/* /tab-content */}
            </div>
            {/* /tabs_detail */}
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </main></div>;
};

export default LikePage;
