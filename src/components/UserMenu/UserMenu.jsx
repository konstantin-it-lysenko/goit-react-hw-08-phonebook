import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  const userName = useSelector(selectUsername);

  return (
    <div>
      <p>{userName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
