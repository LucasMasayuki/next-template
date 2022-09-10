import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../src/presentation/app/hooks';
import {
  selectColorMode,
  toogleColorMode,
} from '../../src/presentation/stores/color-mode-slice';
import { ColorModes } from '../../src/utils/constants';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const { colorMode } = useSelector(selectColorMode);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: '0 2px 9px rgb(0 0 0 / 5%)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: { xs: '1vw', sm: '4vw', md: '17vw' },
            }}
          />
          <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="h6">
            LOGO
          </Typography>{' '}
          <Box component="div" sx={{ flexGrow: 1 }} />
          <IconButton
            color="primary"
            sx={{ ml: 1 }}
            onClick={() => dispatch(toogleColorMode())}
          >
            {colorMode === ColorModes.DARK ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
