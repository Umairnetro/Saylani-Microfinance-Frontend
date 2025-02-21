import weddingImg from "../assets/weddingImg.jpg";

const LoanPage = () => {
  return (
    <div className="container h-screen m-auto rounded-3xl flex flex-col justify-center items-center gap-1">
      <h2 className="font-bold text-3xl">Available Loans</h2>
      <div className="cardGroup border w-full">
        <div className="card border-2 border-dark-imperial-blue-border w-1/4 p-4 rounded-2xl bg-ufo-green">
          <div className="cardImage border-2 border-dark-imperial-blue-border rounded-lg overflow-hidden mb-5">
            <img src={weddingImg} alt="" />
          </div>
          <h3 className="font-semibold text-2xl mb-2">Wedding Loan</h3>
          <p>Maximum Amount: 5 Lakh</p>
          <p>Loan Period: 3 years</p>
        </div>
      </div>
    </div>
  );
};

export default LoanPage;
