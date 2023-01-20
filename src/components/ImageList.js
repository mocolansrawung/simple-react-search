import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList(props) {
    const { images } = props;
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });
    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
