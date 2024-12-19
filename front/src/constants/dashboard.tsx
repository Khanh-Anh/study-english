import { Navigation } from "@toolpad/core";
import CottageIcon from '@mui/icons-material/Cottage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StyleIcon from '@mui/icons-material/Style';
import { Chip } from "@mui/material";

const NAVIGATION: Navigation = [
    { title: "Home", segment: "home", icon: <CottageIcon /> },
    {
        segment: "library-of-your",
        title: "Library of your",
        icon: <LibraryBooksIcon />,
    },
    {
        segment: "notification",
        title: "Notification",
        icon: <NotificationsIcon />,
        action: <Chip label={7} color="primary" size="small" />,
    },
    {
        kind: "header",
        title: "Study",
    },
    {
        segment: "memory-card",
        title: "Memory card",
        icon: <StyleIcon />,
    },
];

export { NAVIGATION };
