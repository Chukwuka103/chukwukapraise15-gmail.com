import "./Recharge.css"
import "/src/icofont/icofont/icofont.css";
import Inputs from "./Reusables/Inputs";
import Button from "./Reusables/Button";
function Recharge(){
  return (
    <>
    <div className="Recharge">
        <h1>Recharge</h1>
        <div className="cards">
            <div className="card">
                <div>
					<i className="icofont-mobile-phone"></i>
                </div>
                <div>
                    Voucher card
                </div>
            </div>
            <div className="card">
                <div>
					<i className="icofont-mobile-phone"></i>
                </div>
                <div>
                    Voucher card
                </div>
            </div>
            <div className="card">
                <div>
					<i className="icofont-mobile-phone"></i>
                </div>
                <div>
                    Voucher card
                </div>
            </div>
            <div className="card">
                <div>
					<i className="icofont-mobile-phone"></i>
                </div>
                <div>
                    Voucher card
                </div>
            </div>
            <div className="card">
                <div>
					<i className="icofont-mobile-phone"></i>
                </div>
                <div>
                    Voucher card
                </div>
            </div>
        </div>
        <div style={{
            margin: "70px 0px"
        }}>
            <p className="p">please enter valid MTN number below to recharge</p>
            <Inputs name="icofont-mobile-phone"/>
            <p className="p">please enter valid MTN number below to recharge</p>
            <Inputs/>
            <p className="p">please enter valid MTN number below to recharge</p>
            <Inputs/>
            <button className="button" type="submit">
        proceed
      </button>
        </div>
    </div>
    </>
  );
}
export default Recharge;
