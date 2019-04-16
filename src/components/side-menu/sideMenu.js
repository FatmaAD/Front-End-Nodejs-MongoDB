import React from "react";
const sideMenu = () => {
  return (
    <>
      
      <section className="filters">
            {/* <!-- search box --> */}
            <div className="search-box">
                <input className="search-box__input" placeholder="Search..." type="text" name="txt_search" id=""/>
                <button type="submit" className="search-box__btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            {/* <!-- filter list --> */}
            <div>
                {/* <!-- filter header --> */}
                <h5>Categories</h5>
                {/* <!-- filter list --> */}
                <ul className="list list--vr-separator">
                    <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Bags</li>
                    <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Electronics</li>
                    <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Shoes</li>

                </ul>
            </div>
            {/* <!-- filter tags --> */}
            <div>
                {/* <!-- filter header --> */}
                <h5></h5>
                {/* <!-- filter tags --> */}
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <!-- related items --> */}
            <div>
                {/* <!-- title --> */}
                <h5></h5>
                {/* <!-- small item --> */}
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    </>
  );
};
export default sideMenu;
