import MediaLoader from "./articles/MediaLoader";
import Slider from "./carousel";
import typeOfMedia from "../utils/type";
import extension from "../utils/extension";

export default function SliderOrMedia({ media }) {
  // console.log("media in sliderOrMedia",media);
  if (!media) return;
  if (media.length < 1)
    return;
    

  return media.length > 1 ? (
    <Slider
      mediaArray={media.map((item) => item.attributes.url)}
    />
  ) : (
    <MediaLoader
      type={typeOfMedia(media.media.attributes.url)}
      extension={extension(media.media.attributes.url)}
      media={media.media.attributes?.url}
    />
  );
}
