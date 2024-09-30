import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const ThemeController = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          <FontAwesomeIcon icon={faPalette} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Light"
              value="light"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dark"
              value="night"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ThemeController;
