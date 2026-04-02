import "./Kartu.css"
const Kartu = () => {
    return(
        <div className="konten">
            <div className="kartu1">
                <div className="kartu-head1">
                    <h5>Platinum</h5>
                    <p><b style={{fontSize:"30px"}}>Rp.0 </b><small>/Bulan</small></p>
                </div>
                <div className="kartu-body1">
             <ul>
                <li>AI advisor for a day</li>
                <li>2 auto tracking</li>
                <li>7 day transaction clearnig</li>
                <li>24/7 Customer support</li>
             </ul>
                </div>
                 <div className="Foot">
                      <button>Purchase plan</button>
                </div>
            </div>
            <div className="kartu2">
                <div className="kartu-head2">
                    <h5>Gold</h5>
                    <p><b style={{fontSize:"30px"}}>Rp.0 </b><small>/Bulan</small></p>
                </div>
                <div className="kartu-body2">
                   <ul>
                    <li>AI advisor full time</li>
                    <li>Unlimited auto tracking</li>
                    <li>1 Day transaction clearning</li>
                    <li>Priority customer support</li>
                   </ul>
                </div>
                <div className="Foot">
                      <button>Purchase plan</button>
                </div>
            </div>
            <div className="kartu3">
                <div className="kartu-head3">
                    <h5>Premium</h5>
                    <p><b style={{fontSize:"30px"}}>Rp.0 </b><small>/Bulan</small></p>
                </div>
                <div className="kartu-body3">
                  <ul>
                    <li>AI advisor full time</li>
                    <li>Unlimited auto tracking</li>
                    <li>1 Day transaction clearning</li>
                    <li>Priority customer support</li>
                  </ul>

                </div>
                 <div className="Foot">
                      <button>Purchase plan</button>
                </div>
            </div>
        </div>
    )
};
export default Kartu;
