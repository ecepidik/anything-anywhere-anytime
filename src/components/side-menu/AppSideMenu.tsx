import React, { FunctionComponent,} from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Divider from "@mui/material/Divider";

export type UserDetailsProp = {
  menuOpen: boolean;
  toggleMenu: (open: boolean) => void;
};

export const AppSideMenu: FunctionComponent<UserDetailsProp> = (props: {
  menuOpen: boolean;
  toggleMenu: any;
}) => {
  return (
    <div>
      <Drawer open={props.menuOpen} onClose={props.toggleMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={props.toggleMenu(false)}
          onKeyDown={props.toggleMenu(false)}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
