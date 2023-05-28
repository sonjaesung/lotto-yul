import { observer } from "mobx-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import GhostContentAPI from "@tryghost/content-api";
import mainStore from "@/store/mainStore";

const categoryList = [
  { name: "전체 보기", tag: "allposts" },
  { name: "학원 활용 사례", tag: "academy" },
  { name: "업데이트 노트", tag: "updatenotes" },
  { name: "랠리즈 퀵 가이드", tag: "quick" },
  { name: "랠리즈 비하인드", tag: "behind" },
];

interface BlogProps {
  imgList: string[];
  postUrl: URL[];
  titleList: string[];
  excerptList: string[];
}

const BlogSection2 = observer(() => {
  const [currentCategory, setCurrentCategory] = useState("allposts");
  const [blogData, setBlogData] = useState<BlogProps>({
    imgList: [],
    postUrl: [],
    titleList: [],
    excerptList: [],
  });
  const [currentPage, setCurrentPage] = useState(2);
  const [endCheck, setEndCheck] = useState(false);
  const limitPost = 9;

  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_GHOST_URL
      ? process.env.NEXT_PUBLIC_GHOST_URL
      : "",
    key: process.env.NEXT_PUBLIC_GHOST_KEY
      ? process.env.NEXT_PUBLIC_GHOST_KEY
      : "",
    version: "v5.0",
  });

  const categorySelect = (tag: string) => {
    const data: {
      imgList: any[];
      postUrl: any[];
      titleList: any[];
      excerptList: any[];
    } = {
      imgList: [],
      postUrl: [],
      titleList: [],
      excerptList: [],
    };

    setCurrentPage(2);
    api.posts
      .browse({
        filter: `tag:${tag}`,
        order: "updated_at DESC",
        limit: limitPost,
      })
      .then((res: object[]) => {
        res.map((item: any) => {
          data.imgList.push(item.feature_image);
          data.postUrl.push(item.url);
          data.titleList.push(item.title);
          data.excerptList.push(item.excerpt);
        });
        if (res.length < limitPost) {
          setEndCheck(true);
        } else {
          setEndCheck(false);
        }
      })
      .then(() => {
        setBlogData(data);
      })
      .catch((err) => {
        console.error(err);
      });

    setCurrentCategory(tag);
  };

  const clickMore = () => {
    const data: {
      imgList: any[];
      postUrl: any[];
      titleList: any[];
      excerptList: any[];
    } = {
      imgList: [],
      postUrl: [],
      titleList: [],
      excerptList: [],
    };
    setCurrentPage(currentPage + 1);

    api.posts
      .browse({
        filter: `tag:${currentCategory}`,
        order: "updated_at DESC",
        limit: limitPost,
        page: currentPage,
      })
      .then((res: object[]) => {
        res.map((item: any) => {
          data.imgList.push(item.feature_image);
          data.postUrl.push(item.url);
          data.titleList.push(item.title);
          data.excerptList.push(item.excerpt);
        });
        if (res.length < limitPost) {
          setEndCheck(true);
        } else {
          setEndCheck(false);
        }
      })
      .then(() => {
        setBlogData((pre: BlogProps) => {
          return {
            ...pre,
            postUrl: pre.postUrl.concat(data.postUrl),
            imgList: pre.imgList.concat(data.imgList),
            titleList: pre.titleList.concat(data.titleList),
            excerptList: pre.excerptList.concat(data.excerptList),
          };
        });
      })

      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    categorySelect(currentCategory);
  }, []);

  return (
    <div className="blog_section2">
      <div className="content">
        <div className="blog_category_area">
          {categoryList.map((item, idx) => {
            return (
              <Fragment key={idx}>
                <div
                  onClick={() => categorySelect(item.tag)}
                  className={`category ${item.tag} ${
                    currentCategory === item.tag ? "on" : ""
                  }`}
                >
                  {item.name}
                </div>
                {mainStore.getOnlyMobile() && idx === 2 ? <br /> : ""}
                {idx < categoryList.length - 1 ? (
                  mainStore.getOnlyMobile() && idx === 2 ? (
                    ""
                  ) : (
                    <div className="blank">|</div>
                  )
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
        </div>
        <div className="blog_post_area">
          {blogData?.postUrl?.map((item: URL, idx: number) => {
            return (
              <Link
                href={item}
                className="post"
                key={idx}
                data-columns={(idx + 1) % 3 === 0 ? "last" : ""}
              >
                <img src={blogData?.imgList[idx]} className="blog_img" />
                <div className="blog_title">{blogData?.titleList[idx]}</div>
                <div className="blog_excerpt">{blogData?.excerptList[idx]}</div>
              </Link>
            );
          })}
        </div>
        <div className="btn_area">
          {endCheck ? (
            ""
          ) : (
            <button className="blog_more" onClick={() => clickMore()}>
              <div className="text">포스트 더 보기</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default BlogSection2;
