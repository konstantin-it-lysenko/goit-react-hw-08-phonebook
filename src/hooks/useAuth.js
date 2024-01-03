import { useSelector } from 'react-redux';
import {
    selectUser,
    selectLoggedIn,
    selectRefreshing,
} from '../redux/auth/authSelectors.js';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectLoggedIn);
    const isRefreshing = useSelector(selectRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};
