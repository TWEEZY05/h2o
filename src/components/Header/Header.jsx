import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(2);
  const scrollRef = useRef(null);
  const items = [
    { id: 1, text: "База анкет сотрудников" },
    { id: 2, text: "Общая база сотрудников" },
    { id: 3, text: "База сотрудников" },
    { id: 4, text: "Календарь сотрудников" },
  ];

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  //скролл при нажатии на сами item
  useEffect(() => {
    const scrollContent = scrollRef.current;
    const activeElement = scrollContent.querySelector(".active");

    if (activeElement) {
      scrollContent.scrollTo({
        left: activeElement.offsetLeft - scrollContent.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [selectedItem]);

  //скролл при нажатии на сами кнопки
  const handleScroll = (direction, itemId) => {
    const scrollContent = scrollRef.current;
    const scrollAmount = direction === "left" ? -70 : 70;
    scrollContent.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setSelectedItem(itemId);
  };

  return (
    <div className="header">
      <div className="header__buttons">
        <div
          className="header__buttons-left"
          onClick={() => handleScroll("left", selectedItem - 1)}
        >
          <div></div>
        </div>
        <div
          className="header__buttons-right"
          onClick={() => handleScroll("right", selectedItem + 1)}
        >
          <div></div>
        </div>
      </div>
      <div className="header__employees">
        <div className="scroll-content" ref={scrollRef}>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={selectedItem === item.id ? "active" : ""}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header__user">
        <div>
          <img src="images/user.png" alt="User logo" />
        </div>
        <div className="header__user-name">
          <span style={{ fontWeight: "600" }}>Kristina</span>
          <br />
          <span style={{ fontWeight: "500", color: "#989FA3" }}>
            менеджер продаж
          </span>
        </div>
        <div className="header__user-menu"></div>
      </div>
    </div>
  );
};

export default Header;
