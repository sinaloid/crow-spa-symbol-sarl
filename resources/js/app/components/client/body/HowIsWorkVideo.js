import React from "react";
import img1 from "./assets/imgs/01.png";
import img2 from "./assets/imgs/02.png";
import img3 from "./assets/imgs/03.png";

const HowIsWorkVideo = () => {
    return (
        <section className="pt-2 mb-4 mb-md-5">
            <h2 className="h3 text-center mb-grid-gutter py-4 title-1">
                Découvrir le crowdfunding en video
            </h2>
            <div className="row g-0  rounded-3">
                <div className="col-md-6 py-3 bg-light mx-auto d-flex justify-content-center">
                    <iframe width="420" height="315" className="w-100"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe> 
                </div>
                
            </div>
        </section>
    );
};

export default HowIsWorkVideo;
