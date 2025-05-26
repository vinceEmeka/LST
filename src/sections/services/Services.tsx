import './Services.css'
import ServiceCard from '../../components/ServiceCard'
export default function Services() {
  return (
    <div className='services'>
      <div className="products-text" style={{marginBottom: '24px'}}>
       <h4 style={{color: '#737373', fontSize: '20px', lineHeight: '30px', letterSpacing: '0.2px',
textAlign: 'center', marginBottom: '10px'}}>Featured Products</h4>
       <h3 style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.1px',
textAlign: 'center', fontWeight: '700', marginBottom: '10px',color: '#252B42'}}>THE BEST SERVICES</h3>
       <p style={{color: '#737373', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px',
textAlign: 'center', fontWeight: '400',}}>Problems trying to resolve the conflict between</p>
      </div>

<div className="services-cards" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
 <ServiceCard />
 <ServiceCard />
 <ServiceCard />
 
</div>
      
    </div>

    
  )
}
