import "./Features.scss"

import features1 from "../../assets/features1.svg"
import features2 from "../../assets/features2.png"
import features3 from "../../assets/features3.png"

function Features(){
    return <div className="features container">
        <p className="features__subtitle">Features</p>
        <h3 className="features__title">Food with a New Passion</h3>
        <div className="features__category">
            <div className="features__card">
                <img src={features1} alt="" />
                <h4>Quality Food</h4>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
            </div>
            <div className="features__card">
                <img src={features2} alt="" />
                <h4>Food Delivery</h4>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
            </div>
            <div className="features__card">
                <img src={features3} alt="" />
                <h4>Super Taste</h4>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
            </div>
        </div>
    </div>
}

export default Features;