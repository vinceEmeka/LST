

export default function Card() {
 return (
  <div className="card-item" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
   <div className="card-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src="src\assets\img\fixed-height (3).png" alt="" />
   </div>
   <div className="card-title" style={{
    marginTop: '10px',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1px',
    textAlign: 'center', color: '#252B42'
   }}>
    <h5>Graphic Design</h5>
   </div>
   <div className="card-description" style={{
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    textAlign: 'center', color: '#737373'
   }}>
    <p>English Department</p>
   </div>
   <div className="card-price" style={{
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1px',
    textAlign: 'center', color: '#BDBDBD'
   }}>
    <p>$16.48<span style={{ color: '#23856D', marginLeft: '5px' }}>$6.68</span></p>
   </div>
  </div>
 )
}
