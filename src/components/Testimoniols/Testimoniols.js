import React from "react";

function Testimoniols({ TestData }) {
  return (
    <div>
      <form id="testimoniols" className="comment ">
        <div className="text_tit">
          <h3>
            they <span>s</span>aid about us{" "}
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div className="comment_items cont">
          {TestData.length >= 1 ? (
            TestData.map((item) => {
              return (
                <div key={item.id} className="comment_item">
                  <div className="imgc">
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.descraption}</p>
                  <h3>{item.clientName}</h3>
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

export default Testimoniols;
