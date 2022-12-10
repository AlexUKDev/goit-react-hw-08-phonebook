import { useAuth } from 'hooks';
import { Nav, NavLink } from './Navigation.Styled';

// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const Navigation = ({ isBarOpen }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      {isBarOpen ? (
        <NavLink to="/">
          <HomeRoundedIcon sx={{ fontSize: 30, mr: 1 }} />
          Home
        </NavLink>
      ) : (
        <NavLink to="/">
          <HomeRoundedIcon sx={{ fontSize: 30, mr: 1 }} />
        </NavLink>
      )}

      {isLoggedIn && isBarOpen && (
        <NavLink to="/contacts">
          <RecentActorsRoundedIcon sx={{ fontSize: 30, mr: 1 }} />
          Contacts
        </NavLink>
      )}
      {isLoggedIn && !isBarOpen && (
        <NavLink to="/contacts">
          <RecentActorsRoundedIcon sx={{ fontSize: 30, mr: 1 }} />
        </NavLink>
      )}
    </Nav>
  );
};
