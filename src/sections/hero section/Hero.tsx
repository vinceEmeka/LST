
import './Hero.css'

import img1 from '../assets/img/media bg-cover (1).png';
import img2 from '../assets/img/media bg-cover.png';
import img3 from '../assets/img/media bg-cover (2).png';
import img4 from '../assets/img/media bg-cover (3).png';

export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
       <img className = 'img1' src={img1} alt="" />
      </div>
      <div className="right">
       <div className="upper">
        <img className = 'img2'src={img2} alt="" />
       </div>
       <div className="lower">
         <img className = 'img3' src={img3} alt="" />
          <img className = 'img4' style={{width: '100%'}} src={img4} alt="" />
         </div>
        </div>
       </div>
     
   
  )
}
