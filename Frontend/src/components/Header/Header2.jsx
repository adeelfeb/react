// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";

// export default function Header2() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       {["Pages", "Account", "Blocks"].map((item) => (
//         <Typography
//           key={item}
//           as="li"
//           variant="small"
//           className="flex items-center gap-x-2 p-1 font-medium text-white neon-text"
//         >
//           <a href="#" className="flex items-center">
//             {item}
//           </a>
//         </Typography>
//       ))}
//     </ul>
//   );

//   return (
//     <Navbar className="mx-auto my-2 rounded-lg bg-dark-neon p-2">
//       <div className="container mx-auto flex items-center justify-between text-white">
//         <Typography
//           as="a"
//           href="#"
//           variant="h5"
//           className="mr-4 cursor-pointer py-1.5 font-bold neon-text"
//         >
//           NeonNav
//         </Typography>
//         <div className="hidden lg:block">{navList}</div>
//         <Button
//           variant="gradient"
//           size="sm"
//           className="hidden lg:inline-block neon-button"
//         >
//           <span>Get Started</span>
//         </Button>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             className="h-6 w-6"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </IconButton>
//       </div>
//       <MobileNav open={openNav}>
//         {navList}
//         <Button
//           variant="gradient"
//           size="sm"
//           fullWidth
//           className="mb-2 neon-button"
//         >
//           <span>Get Started</span>
//         </Button>
//       </MobileNav>
//     </Navbar>
//   );
// }
import React from 'react';

const Header2 = ({ logoImage }) => {
  const headerStyle = {
    backgroundColor: '#1a1a2e',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    boxShadow: '0 0 10px #0f0f3e, inset 0 0 5px #0f0f3e',
  };

  const neonTextStyle = {
    color: '#ffffff',
    textShadow: '0 0 3px #ffffff, 0 0 6px #ffffff, 0 0 10px #ffffff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    color: '#ffffff',
    background: 'linear-gradient(45deg, #ff0080, #ff6600)',
    padding: '8px 16px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '0 0 8px #ff0080, 0 0 15px #ff6600',
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
  };

  const buttonHoverStyle = {
    boxShadow: '0 0 12px #ff0080, 0 0 25px #ff6600',
    transform: 'scale(1.05)',
  };

  const logoStyle = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    boxShadow: '0 0 8px #ff0080, 0 0 12px #ff6600',
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  return (
    <header style={headerStyle}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {logoImage ? (
          <img src={logoImage} alt="Logo" style={logoStyle} />
        ) : (
          <h1 style={neonTextStyle}>My App</h1>
        )}
      </div>

      {/* Navigation Section */}
      <nav style={navStyle}>
        <a href="/home" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
          Home
        </a>
        <a href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
          About
        </a>
        <a href="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
          Contact
        </a>
      </nav>

      {/* Button Section */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Login
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header2;
