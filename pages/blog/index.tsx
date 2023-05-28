import { Fragment, useEffect } from "react";
import { observer } from "mobx-react";
import mainStore from "@/store/mainStore";
import BlogSection1 from "@/components/blog/blogSection1";
import BlogSection2 from "@/components/blog/blogSection2";

const Blog = observer(() => {
  useEffect(() => {
    mainStore.changeOsCehck();
    window.addEventListener("resize", mainStore.changePcResize);
    return () => {
      window.removeEventListener("resize", mainStore.changePcResize);
    };
  }, []);

  return (
    <Fragment>
      <BlogSection1 />
      <BlogSection2 /*data={data}*/ />
    </Fragment>
  );
});

export default Blog;
