import React from "react";
// import expert1 from "../../images/expert1.jpg";
// import expert2 from "../../images/expert2.jpg";
// import expert3 from "../../images/expert3.jpg";
// import expert4 from "../../images/expert4.jpg";

function Experts({ DataExperts }) {
  return (
    <div>
      <form id="expert" className="expert cont">
        <div className="text_tit">
          <h3>
            our kitchen <span>e</span>xpert{" "}
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div className="expert_iteams">
          {DataExperts.length >= 1 ? (
            DataExperts.map((expert) => {
              return (
                <div key={expert.id} className="expert_iteam">
                  <img src={expert.img} alt="" />
                  <h3>{expert.cheifName}</h3>
                </div>
              );
            })
          ) : (
            <h1>Some thing was wrong , please try again</h1>
          )}
        </div>
      </form>
    </div>
  );
}

export default Experts;
