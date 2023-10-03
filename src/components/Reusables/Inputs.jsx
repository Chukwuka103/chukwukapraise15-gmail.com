import "./Inputs.css";
import "/src/icofont/icofont/icofont.css";

function Inputs({name}) {
  return (
    <>
      <div className="inputs">
        <div className="div">
					<i className={name}></i>
        </div>
        <input type="text" name="" id="" placeholder="Eg: 090xxxxxxxx" />
      </div>
      <div className="msg"></div>
    </>
  );
}
export default Inputs;
