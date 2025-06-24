import { createTheme } from '@material-ui/core/styles';
import backgroundImageLight from "../assets/backgroundLight.png";

const getLightTheme = (config, locale) =>
    createTheme(
        {
            scrollbarStyles: {
                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
                    backgroundColor: config?.scrollbarThumb || "#E5E5E5",
                },
            },
            palette: {
                primary: { main: config?.primaryColor || "#6eeaff" },
                secondary: { main: config?.secondaryColor || "#5a6eea" },
                toolbar: { main: config?.toolbarColor || "#6eeaff" },
                menuItens: { main: config?.menuItens || "#FFFFFF" },
                sub: { main: config?.sub || "#3b3472" },
                toolbarIcon: { main: config?.toolbarIconColor || "#3b3472" },
                divide: { main: config?.divide || "#5a6eea" },
                background: {
                    default: config?.backgroundDefault || "#FFFFFF",
                    paper: config?.backgroundPaper || "#F7F7F7",
                },
                text: {
                    primary: config?.textPrimary || "#000000",
                    secondary: config?.textSecondary || "#3b3472",
                },
            },
            backgroundImage: `url(${config?.backgroundImage || backgroundImageLight})`,
        },
        locale
    );

export default getLightTheme;
