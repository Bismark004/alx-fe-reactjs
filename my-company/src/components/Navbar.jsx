
import { Link } from 'react-router-dom';

function Navbar() {
  return (
=======
    <nav style={{ padding: '10px', backgroundColor: 'blue', display:'flex', justifyContent: 'center'  }}>
>>>>>>> c93c894ff002774ddef168f8495ccad8dcd560a5
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
