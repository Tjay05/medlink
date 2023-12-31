import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegDomContext } from "../../../../admincomponents/RegDomWorker";
import { useState } from "react";

const DomReview = () => {
  const [isPending, setIsPending] = useState(false);
  const { UserType, firstname, lastname, Gender, number, DOB, education, areaOfSpecialization, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule, addedBy, message, setMessage } = useContext(RegDomContext);

  const history = useNavigate()
  
  const handleSubmit = async() => {

    const domWorker = { UserType, firstname, lastname, Gender, number, DOB, education, areaOfSpecialization, YearsOfExp, employStat, Days_per_week, Hours_per_day, Schedule, addedBy }

    setIsPending(true);

    try {
      const response = await fetch("https://hospital-management-backend.onrender.com/domestic-worker/register", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(domWorker)
      })
      const data = await response.json();
      if (response.ok) {
        setIsPending(false)
        history("../domAddSuccess")
        setMessage(data);
      }
      else {
        setMessage(data);
        setIsPending(false);
      }
    } catch(error) {
      console.log(error);
      }
    }
  
  return (
    <>
      <div className="wrapBasicInfo">
        <header className="headBasicInfo">
          <div className="blurBasic">
            <p>
              <Link to="../AddDomWorker"><span>1 </span> Basic information</Link>
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <Link to="../domEnterDetails"><span>2 </span>Enter Details</Link>
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <Link to="../domServices"><span>3 </span> Select Services</Link>
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>

          <div>
            <p>
              <span>4 </span> Wages and Salary
            </p>
            <img src={seperator} alt="" />
          </div>
        </header>
        <div className="basicInfo">
          <div className="reviewAndSubmit">
            <h2>Wages and Salary</h2>
          </div>
          <div className="twoForms">
            <form action="">

            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={()=>history(-1)}>
              Back
            </button>
            {!isPending && <button onClick={handleSubmit} className="btnNextStep">
              Next step
            </button>}
            {isPending && <button disabled className="btnNextStep">Adding Domestic Worker...</button> }
          </div>
          <p className="error-message">{message}</p>
        </div>
      </div>
    </>
  );
};

export default DomReview;
