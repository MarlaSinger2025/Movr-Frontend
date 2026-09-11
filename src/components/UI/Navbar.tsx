import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import DefaultAvatar from "../../assets/img/default_userAvatar.png";

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const decoyLinks = [
    { label: "Home", to: "/" },
    { label: "My Profile", to: "/me" },
    { label: "Browse Activities", to: "/events" },
    { label: "Messages", to: "/messages" }, // <-- kind of a decoy, page is there but messaging is not a working function yet
    { label: "About Movr", to: "" }, // <-- decoy, no page yet
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 border-b border-divider bg-bg/90 backdrop-blur-md">
      <Link
        to="/"
        className="font-display font-black text-2xl tracking-widest uppercase text-white hover:text-lime"
      >
        MOVR
      </Link>
      {!loading && !user && (
        <div className="flex items-center gap-3">
          <NavLink
            to="/signup"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-lime-400 text-black hover:bg-lime-300 transition-colors duration-200"
          >
            Join Movr
          </NavLink>
          <NavLink
            to="/login"
            className="px-4 py-2 rounded-lg text-sm font-medium border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors duration-200"
          >
            Login
          </NavLink>
        </div>
      )}

      {!loading && user && (
        <div className="flex items-center gap-4">
        
        {/* Navigation - Desktop view */}
          <div className="hidden sm:flex items-center gap-6">
            {decoyLinks
              .map((item) => (
                <NavLink key={item.label} to={item.to} className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 hover:underline ${isActive ? 'text-lime-400 font-semibold' : 'text-white'}`
                }>{item.label}</NavLink>
              ))}
          </div>

          <NavLink
            to="/createevent"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-lime-400 text-black hover:bg-lime-300 transition-colors duration-200"
          >
            Post activity
          </NavLink>

          <span className="hidden sm:inline text-white/70 text-sm">
            {`Hi, ${user.username}`}
          </span>

          <Link to="/me">
            <img
              src={user.profileImage || DefaultAvatar}
              alt={user.username}
              onError={(e) => {
                e.currentTarget.src = DefaultAvatar;
              }}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-lime-400/50"
            />
          </Link>

          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="hidden sm:flex mt-1 px-3 py-2 rounded-lg text-sm text-left text-red-400 hover:bg-red-400 hover:text-black transition-colors duration-200"
          >
            Logout
          </button>

          {/* Burger menu - mobile only */}
          <button
            className="sm:hidden text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      )}

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-56 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-lg flex flex-col p-2 sm:hidden">
          {decoyLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-white hover:bg-lime-400 hover:text-black transition-colors duration-200"
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="mt-1 px-3 py-2 rounded-lg text-sm text-left text-red-400 hover:bg-red-400 hover:text-black transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
