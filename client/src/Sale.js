import './Sale.css';
import Header from './Header';
import Footer from './Footer';

function Sale() {
    return(
        <div>
            <Header />
            <h1>I am Sales</h1>
            {/* div className="cards">
                            {item.on_sale ? <img src={item.img}/> : null}
                            {item.on_sale ?<div className="name" id="inCard">{item.name} <br></br><br></br>${item.price}</div>: null }
                            {item.on_sale ?<button className="cart">Add To Cart</button> : null}
                        </div> */}
            <Footer />
        </div>
    )
}

export default Sale;