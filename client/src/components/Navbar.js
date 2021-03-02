
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <h2 className="navbar-brand">ThriftSale</h2>
        <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="navbar-item">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item navbar-float-right">
          <Link to="/create" className="nav-link navbar-float-right">Add Item</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
}

export default Navbar;