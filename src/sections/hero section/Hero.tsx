
import './Hero.css'
export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
       <img className = 'img1' src="src\assets\img\media bg-cover (1).png" alt="" />
      </div>
      <div className="right">
       <div className="upper">
        <img className = 'img2'src="src\assets\img\media bg-cover.png" alt="" />
       </div>
       <div className="lower">
        <div className="lower-left">
         <img className = 'img3' src="src\assets\img\media bg-cover (2).png" alt="" />
         <div className="lower-right">
          <img className = 'img4' src="src\assets\img\media bg-cover (3).png" alt="" />
         </div>
        </div>
       </div>
      </div>
    </div>
  )
}
