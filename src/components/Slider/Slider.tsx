import "./Slider.css";
export function Slider() {
  return (
    <div className="container">
      <ul className="slider">
        <li id="slide1">
          <img src="https://www.futuroprossimo.it/wp-content/uploads/2021/11/3706B6C4-397F-428F-AEED-87C07F0073CD.jpeg" />
        </li>
        <li id="slide2">
          <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/07/Galaxy-plegables.jpg?fit=1200%2C900&quality=50&strip=all&ssl=1" />
        </li>
      </ul>

      <ul className="menu">
        <li>
          <a href="#slide1">1</a>
        </li>
        <li>
          <a href="#slide2">2</a>
        </li>
      </ul>
    </div>
  );
}
