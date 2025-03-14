import { store } from '@/redux/store'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from '@/styles/case.module.scss'
function CaseSlick(props) {
  const {common} = store.getState()

  const {id} = props
  
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className={['slider-container',styles.caseSlick,'case-slick'].join(' ')}>
      <Slider {...settings}>
        <div className={styles.caseImgWrap}>
          <img src={common.imgURL + "case/"+id+"/1.png"} />
        </div>
        <div className={styles.caseImgWrap}>
          <img src={common.imgURL + "case/"+id+"/2.png"} />
        </div>
        <div className={styles.caseImgWrap}>
          <img src={common.imgURL + "case/"+id+"/3.png"} />
        </div>
      </Slider>
    </div>
  );
}

export default CaseSlick;