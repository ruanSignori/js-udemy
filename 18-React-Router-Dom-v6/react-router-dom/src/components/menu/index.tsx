import { Link } from 'react-router-dom'
import './styles.css';

export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" state={'This is state from About'}>About</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/posts/5">Posts 5</Link></li>
        <li><Link to="/posts/10">Posts 10</Link></li>
      </ul>
    </nav>
  );
}