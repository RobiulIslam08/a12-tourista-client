// import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'

// const MenuItem = ({ label, address, icon: Icon }) => {
//   return (
//     <NavLink
//       to={address}
//       end
//       className={({ isActive }) =>
//         `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//           isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-800'
//         }`
//       }
//     >
//       <Icon className='w-5 h-5' />

//       <span className='mx-4 font-medium'>{label}</span>
//     </NavLink>
//   )
// }
// MenuItem.propTypes = {
//   label: PropTypes.string,
//   address: PropTypes.string,
//   icon: PropTypes.elementType,
// }

// export default MenuItem
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end // Ensures the 'active' class is applied only when the URL is an exact match
      className={({ isActive }) =>
        `flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:ring-offset-1 dark:focus:ring-offset-gray-800 group
        ${isActive
          ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-teal-400 font-semibold shadow-sm' // Active styles
          : 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-teal-400' // Default and hover styles
        }`
      }
    // Optional: Add onClick to close sidebar on mobile when a menu item is clicked
    // If this MenuItem is only used within the main menu (not home/logout),
    // you might want to pass handleToggle from Sidebar as a prop if it's not managed globally.
    >
      <Icon className='w-6 h-6 mr-4 transition-transform duration-300 group-hover:scale-110' />
      <span className=''>{label}</span> {/* No font-medium here as it's set in the parent class */}
    </NavLink>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired, // Label is required
  address: PropTypes.string.isRequired, // Address is required
  icon: PropTypes.elementType.isRequired, // Icon component is required
};

export default MenuItem;