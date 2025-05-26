
import imgs1 from '../assets/img/carbon_book.png'
export default function ServiceCard() {
  return (
    <div>
      <div className="card-item" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '35px 40px', marginRight: '35px' }}>
   <div className="card-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src={imgs1} alt="" />
   </div>
   <div className="card-title" style={{
    marginTop: '10px',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1px',
    textAlign: 'center', color: '#252B42'
   }}>
    <h5>Easy Win</h5>
   </div>
   <div className="card-description" style={{
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    textAlign: 'center', color: '#737373'
   }}>
     <p>Get your best looking smile now!</p>
   </div>
  
  </div>
    </div>
  )
}

