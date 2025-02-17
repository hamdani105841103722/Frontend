import React from "react";
import {
  Box,
  Typography,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  styled,
  ListItemButton, // Tambahkan ini
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;

const MainContainer = styled(Box)({
  display: "flex",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const Sidebar = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const Home: React.FC = () => {
  const navigate = useNavigate();

  const SidebarContent = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/tambah-kehadiran")}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Tambah Kehadiran" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={() => navigate("/pengaturan")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Pengaturan" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/logout")}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <MainContainer>
      <CssBaseline />
      <Sidebar
        variant="permanent"
        sx={{
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {SidebarContent}
      </Sidebar>
      <ContentContainer>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Total Kehadiran
                </Typography>
                <Typography variant="h4" color="primary">
                  {/* Isi dengan data total kehadiran */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Isi dengan deskripsi tambahan */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Kehadiran Hari Ini
                </Typography>
                <Typography variant="h4" color="primary">
                  {/* Isi dengan data kehadiran hari ini */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Isi dengan deskripsi tambahan */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Total Bulanan
                </Typography>
                <Typography variant="h4" color="primary">
                  {/* Isi dengan data total bulanan */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Isi dengan deskripsi tambahan */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="h5">Aktivitas Terakhir</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body1">Belum ada aktivitas terbaru.</Typography>
        </Box>
      </ContentContainer>
    </MainContainer>
  );
};

export default Home;