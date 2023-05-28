import { observer } from "mobx-react";

type props = {
  src: string;
  className: string;
};

const Img = observer(({ src, className }: props) => {
  return (
    <img
      className={className}
      src={`/landing${src}`}
    ></img>
  );
});

export default Img;
