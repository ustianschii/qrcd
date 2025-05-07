import Box from "@mui/joy/Box";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={({ palette }) => ({ backgroundColor: palette.background.level2 })}
      p={2}
      mb={2}
    >
      Navbar
    </Box>
  );
};

export default Navbar;
