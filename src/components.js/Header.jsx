import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="p-5 bg-[#000000] flex gap-20 text-2xl font-medium text-white">
      <h1 className="w-56"><Link to={"/"}>List of Students</Link></h1>
      <h1>
        <Link to={"/favourites"}>Favourite Students</Link>
      </h1>
    </div>
  );
}

export default Header;
