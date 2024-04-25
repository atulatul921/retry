import { useState } from "react";
import img1 from "../../images/lab.jpg";
import img2 from "../../images/lab1.jpg";
import img3 from "../../images/lab3.jpg";
import img4 from "../../images/class.jpg";
import img5 from "../../images/claas1.jpg";
import img6 from "../../images/blood2.jpg";
import img7 from "../../images/blood3.jpg";
import img8 from "../../images/Events1.jpg";
import img9 from "../../images/Events2.jpg";
import img10 from "../../images/Events3.jpg";
import img11 from "../../images/Events4.jpg";
import img12 from "../../images/Events5.jpg";
import img13 from "../../images/Events6.jpg";
import img15 from "../../images/Events8.jpg";
import img16 from "../../images/Events9.jpg";
import img17 from "../../images/Events10.jpg";
import img18 from "../../images/Events11.jpg";
import { Image } from "antd";

const Gallery = () => {
  const [images, _] = useState([img1, img2, img3, img4, img5, img6, img8, img9, img10, img11, img12, img13, img15, img16, img17, img18 ]);

  return (
    <>
      <div className="container pt-[10rem] pb-[5rem]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-[3rem]">GALLERY</h1>
          <p className="text-xl">Life at theem...</p>
        </div>
        <div className="mt-[2rem]">
          <div className="grid grid-col-1 md:grid-cols-3">
            {images.map((img, idx) => {
              return (
                <div className="img ">
                  <Image
                    src={img}
                    wrapperStyle={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
