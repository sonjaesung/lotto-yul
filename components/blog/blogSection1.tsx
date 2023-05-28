import { observer } from "mobx-react";

const BlogSection1 = observer(() => {
  return (
    <div className="blog_section1">
      <div className="bg"></div>
      <div className="content">
        <div className="blog_title">
          고객사 사례 및
          <br />
          랠리즈 주요 소식을 확인하세요
        </div>
      </div>
    </div>
  );
});

export default BlogSection1;
