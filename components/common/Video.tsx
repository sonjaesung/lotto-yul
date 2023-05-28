import { observer } from "mobx-react";

type props = {
  src: string;
};

const Video = observer(({ src }: props) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video"
      key={`${process.env.NEXT_PUBLIC_APP_CDN_FILE_URL}/landing${src}`}
    >
      {/*!isSafari && <source src={webmSrc} type="video/webm" />*/}
      <source
        src={`${process.env.NEXT_PUBLIC_APP_CDN_FILE_URL}/landing${src}`}
        type="video/mp4"
      />
    </video>
  );
});

export default Video;
