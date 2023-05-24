import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const buttons = [
    { id: 1, imageSrc: "images/icon-1.png", altText: "icon-1" },
    { id: 2, imageSrc: "images/icon-2.png", altText: "icon-2" },
    { id: 3, imageSrc: "images/icon-3.png", altText: "icon-3" },
    { id: 4, imageSrc: "images/icon-4.png", altText: "icon-4" },
    { id: 5, imageSrc: "images/icon-5.png", altText: "icon-5" },
    { id: 6, imageSrc: "images/icon-6.png", altText: "icon-6" },
    { id: 7, imageSrc: "images/icon-7.png", altText: "icon-7" },
  ];

  const handleActiveButton = (buttonId) => {
    setActive(buttonId);
  };

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <div className="wrapper__logo">
          <img src="images/logo.svg" alt="Logo" />
        </div>
        <div className="wrapper__icons">
          {buttons.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleActiveButton(item.id)}
                className={active === item.id ? "active" : ""}
              >
                <img src={item.imageSrc} alt={item.altText} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
