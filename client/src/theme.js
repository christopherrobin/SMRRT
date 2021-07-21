import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: '#1ABC9C',
			contrastText: '#fff',
		},
		secondary: {
			main: '#195a85',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#f2f2f2',
		},
	},
});

export default theme;
