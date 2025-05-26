import Card from "../../components/Card"
import './Products.css'


export default function Products() {
  return (
    <div className="products-section">
      <div className="products-text" style={{marginBottom: '24px'}}>
       <h4 style={{color: '#737373', fontSize: '20px', lineHeight: '30px', letterSpacing: '0.2px',
textAlign: 'center', marginBottom: '10px'}}>Featured Products</h4>
       <h3 style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.1px',
textAlign: 'center', fontWeight: '700', marginBottom: '10px',color: '#252B42'}}>BESTSELLER PRODUCTS</h3>
       <p style={{color: '#737373', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px',
textAlign: 'center', fontWeight: '400',}}>Problems trying to resolve the conflict between</p>
      </div>
<div className="card-items">
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
</div>

<div className="load-btn" style={{display: 'flex', justifyContent: 'center', marginTop: '24px'}}>
 <button className="load">LOAD MORE PRODUCTS</button>
</div>
     
    </div>
  )
}
