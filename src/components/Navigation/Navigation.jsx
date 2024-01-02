import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/auth/authSelectors';
import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { NavList, NavMenu } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <NavMenu>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavList>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </NavList>
      )}
    </NavMenu>
  );
};

export default Navigation;
