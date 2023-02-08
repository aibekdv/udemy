import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Menu.module.scss";
import { useOnHoverOutside } from "@/hooks/useHoverOutside";
import { dataMenu } from "./data";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const MenuCategories = () => {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLElement>(null);

  const closeCategories = () => {
    setOpen(false);
  };

  useOnHoverOutside(menuRef, closeCategories);

  React.useEffect(() => {}, [open]);

  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        variant="subtitle2"
        color="black"
        lineHeight="72px"
        onMouseOver={() => setOpen(true)}
        sx={{
          ml: 1.5,
          cursor: "pointer",
          "&:hover": {
            color: "secondary.main",
          },
        }}
      >
        Categories
      </Typography>

      {open && (
        <Box
          ref={menuRef}
          sx={{
            position: "absolute",
            top: "100%",
            bgcolor: "white",
            color: "black",
            transform: ".3s ease",
            py: 1,
            minWidth: 200,
            border: "1px solid lightgrey",
          }}
        >
          <Box sx={{ position: "relative" }}>
            {dataMenu.map((item, idx) => (
              <Box
                key={idx}
                className={styles.menuItem}
                sx={{ "&:hover": { color: "secondary.main" } }}
                component={Link}
                to={item.link}
              >
                <Typography variant="subtitle2">
                  {item.categoryTitle}
                </Typography>
                <NavigateNextIcon sx={{ width: 18, height: 18 }} />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MenuCategories;
