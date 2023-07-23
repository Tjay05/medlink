import seperator from "../../../../../../assets/icons/Separator.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegDomContext } from "../../../../admincomponents/RegDomWorker";

const DomServices = () => {
  const { Days_per_week, setDaysWeek, Hours_per_day, setHourDay, Schedule, setSchedule } = useContext(RegDomContext);
  const history = useNavigate()
  return (
    <>
      <div className="wrapBasicInfo">
        <header className="headBasicInfo">
          <div className="blurBasic">
            <p>
              <span>1 </span> Basic information
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
          <div className="blurBasic">
            <p>
              <span>2 </span>Enter Details
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>

          <div>
            <p>
              <span>3 </span> Select Services
            </p>
            <img src={seperator} alt="" />
          </div>
          <div className="blurBasic">
            <p>
              <span>4 </span> Review and Submit
            </p>
            <img src={seperator} alt="" className="seperator" />
          </div>
        </header>

        <div className="basicInfo">
          <h2>Select Services And Availbility</h2>
          <div className="twoForms">
            <form action="" className="serviceForm">
              <label htmlFor="days">
                <p className="pInput"> Days/Week </p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id="days"
                  className="editInput"
                  value={Days_per_week}
                  onChange={(e) => setDaysWeek(e.target.value)}
                  placeholder="Days per Week"
                />
              </div>
              <label htmlFor="hour">
                <p className="pInput">Hours/Day </p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id="hour"
                  className="editInput"
                  value={Hours_per_day}
                  onChange={(e) => setHourDay(e.target.value)}
                  placeholder="Hours per Day"
                />
              </div>
              <label htmlFor="schedule">
                <p className="pInput">Schedule Type </p>
              </label>
              <div className="editinput">
                <input
                  type="text"
                  id="schedule"
                  className="editInput"
                  value={Schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder="Schedule Type"
                />
              </div>
            </form>
          </div>
          <div className="nav__direction">
            <button className="btnBack" onClick={()=>history(-1)}>
              Back
            </button>
            <Link to="../domReview">
              <button className="btnNextStep">
                <p>Next step</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomServices;