import { createTheme } from '@material-ui/core/styles';
import backgroundImageDark from "../assets/backgroundDark.jpg";

const getDarkTheme = (config, locale) =>
    createTheme(
        {
            overrides: {
                MuiCssBaseline: {
                    "@global": {
                        body: {
                            backgroundColor: config?.backgroundDefault || "#2E2E3A",
                        },
                    },
                },
            },
            scrollbarStyles: {
                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
                    backgroundColor: config?.scrollbarThumb || "#8A7DCC",
                },
            },
            palette: {
                primary: { main: config?.primaryColor || "#6eeaff" },
                secondary: { main: config?.secondaryColor || "#5a6eea" },
                toolbar: { main: config?.toolbarColor || "#6eeaff" },
                menuItens: { main: config?.menuItens || "#3b3472" },
                sub: { main: config?.sub || "#5a6eea" },
                toolbarIcon: { main: config?.toolbarIconColor || "#6eeaff" },
                divide: { main: config?.divide || "#3b3472" },
                background: {
                    default: config?.backgroundDefault || "#22223a",
                    paper: config?.backgroundPaper || "#3b3472",
                },
                text: {
                    primary: config?.textPrimary || "#FFFFFF",
                    secondary: config?.textSecondary || "#6eeaff",
                },
            },
            backgroundImage: `url(${config?.backgroundImage || backgroundImageDark})`,
        },
        locale
    );

export default getDarkTheme;
