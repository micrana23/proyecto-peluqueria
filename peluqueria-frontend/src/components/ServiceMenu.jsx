import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { serviceLinks } from "./serviceLinks";

export function ServiceMenuItems({ mobile = false, onNavigate }) {
  return serviceLinks.map(({ label, to, icon: Icon }) => (
    <li key={to} className="flex items-center">
      <Icon
        sx={{ color: "#e3c9a0", fontSize: mobile ? 18 : 20 }}
        className={mobile ? "ml-6 mr-2" : "ml-4 mr-3"}
      />
      <Link
        to={to}
        className={
          mobile
            ? "block px-2 py-2 w-full text-white/80 font-sans font-light text-sm hover:text-[#e3c9a0] transition-colors duration-200"
            : "block px-2 py-2.5 w-full text-white/90 font-sans font-light text-sm tracking-wide hover:text-[#e3c9a0] transition-colors duration-200"
        }
        onClick={onNavigate}
      >
        {label}
      </Link>
    </li>
  ));
}

ServiceMenuItems.propTypes = {
  mobile: PropTypes.bool,
  onNavigate: PropTypes.func,
};
