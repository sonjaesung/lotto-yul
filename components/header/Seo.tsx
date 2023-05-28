import { observer } from "mobx-react";
import Head from "next/head";

type props = {
  title: string;
  des: string;
};

const Seo = observer(({ title, des }: props) => {
  return (
    <Head>
      <meta name={"description"} content={des} />
      <title>{title}</title>
    </Head>
  );
});

export default Seo;
