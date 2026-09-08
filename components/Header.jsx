import globe from "../images/globe.png";

export default function Header() {
  return (
    <header>
      <img src={globe} alt="A simple globe icon with latitude and longitude lines, centered in a clean white space, representing travel and global exploration; the design is minimal and friendly, with a calm, welcoming tone" />
      <h1>My Travel Journal</h1>
    </header>
  );
}
