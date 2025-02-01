import style from "./Home.module.css";
import airplane from "../assets/airplane.png";
import ceo from "../assets/ceo.png";

const Home = () => {
  return (
    <div>
      <div className={`${style.landingPage}`}>
        <div className={`${style.main} container mx-auto`}>
          <div className={`${style.content} w-1/2 flex flex-col items-start`}>
            <h1 className="text-5xl/16 font-extrabold">
              Welcome To Saylani Microfinance
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the loan.
            </p>
            <button>Take Your Loan</button>

            <div className="ceo mt-10 flex items-center gap-2">
              <img
                className="w-12 rounded-full border-2 border-dark-imperial-blue"
                src={ceo}
                alt=""
              />
              <div className="details">
                <h3 className="name font-semibold">Bashir Ahmed Farooqui</h3>
                <p className="position text-sm">Chairman and Founder</p>
              </div>
            </div>
          </div>
          <div className="sideImage w-1/2">
            <img src={airplane} alt="error to load image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
