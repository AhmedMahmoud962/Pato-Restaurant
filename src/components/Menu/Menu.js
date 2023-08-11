import React from "react";

function Menu({ DataMenu }) {
  return (
    <div>
      <form id="menu" className="cont mnue">
        <div className="text_tit">
          <h3>
            our <span>m</span>enu{" "}
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        </div>
        <div className="card_items">
          {DataMenu.length >= 1 ? (
            DataMenu.map((menu) => {
              return (
                <div key={menu.id} className="card_item">
                  <img src={menu.img} alt="" />
                  <h3>{menu.MenuName}</h3>
                </div>
              );
            })
          ) : (
            <h1>No Menu Available Now</h1>
          )}
        </div>
      </form>
    </div>
  );
}

export default Menu;
