import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import {
  SpaceDashboardOutlined,
  QrCode,
  BarChart,
  Settings,
  Help,
} from "@mui/icons-material";
import { useLocation, Link } from "react-router";

const drawerWidth = 240;

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <SpaceDashboardOutlined />, path: "/" },
    { text: "QR Codes", icon: <QrCode />, path: "/qrcodes" },
    { text: "Analytics", icon: <BarChart />, path: "/analytics" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
    { text: "Help", icon: <Help />, path: "/help" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          color: "#000",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: "1rem",
            mb: "1rem",
          }}
        >
          <Avatar>CD</Avatar>
          <Box>
            <Typography>QR Code Directory</Typography>
            <Typography sx={{ fontSize: "10px" }}>
              QR Code Management System
            </Typography>
          </Box>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                transition: "300ms ease-in-out",
                ml: "1rem",
                mt: "1rem",
                width: "80%",
                borderRadius: "1rem",
                cursor: "pointer",
                color: "black", //use black so it wont show the purple anchor tag color
                backgroundColor:
                  location.pathname === item.path ? "#e0e0e0" : "inherit",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
