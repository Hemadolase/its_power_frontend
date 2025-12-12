import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function ProductCategories() {
  useEffect(() => {
  const items = document.querySelectorAll(".parent .child");

  items.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  return () => {
    items.forEach(item => {
      item.removeEventListener("click", () => {});
    });
  };
}, []);

  return (
    <>
    <div className='part2'>
    <div className="parent">

  <div className="cat-box">
    <NavLink to="/OnlineUPS">
      <div className="child child1">
        <div className="box1">
          Online UPS provides backup electric power when mains power fails.
        </div>
      </div>
    </NavLink>
    <h5>Online UPS</h5>
  </div>

  <div className="cat-box">
    <NavLink to="/ServoStabilizer">
      <div className="child child2">
        <div className="box2">
          Servo stabilizer protects your equipment from voltage issues.
        </div>
      </div>
    </NavLink>
    <h5>Servo Stabilizer</h5>
  </div>

  <div className="cat-box">
    <NavLink to="/Battery_Charger">
      <div className="child child3">
        <div className="box3">
          A battery charger supplies controlled power safely.
        </div>
      </div>
    </NavLink>
    <h5>Battery Charger</h5>
  </div>

  <div className="cat-box">
    <NavLink to="/solarproduct">
      <div className="child child4">
        <div className="box4">
          A solar system converts sunlight into electricity.
        </div>
      </div>
    </NavLink>
    <h5>Solar Product</h5>
  </div>

  <div className="cat-box">
    <NavLink to="/other-products">
      <div className="child child5">
        <div className="box5">
          Inverter, Load Bank, Isolation transformer etc.
        </div>
      </div>
    </NavLink>
    <h5>Other Products</h5>
  </div>

</div>

    
    </div>
    
    </>
  )
}

export default ProductCategories