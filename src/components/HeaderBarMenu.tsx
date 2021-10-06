import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    marginLeft: '-16px',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

interface Props {
  openFlag: boolean;
}

export default function HeaderBarMenu({ openFlag }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  type Menu = {
    primary: string;
  };
  const menuList: Array<Menu> = [{ primary: 'menu1' }, { primary: 'menu2' }, { primary: 'menu3' }];

  return (
    <div>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={openFlag}>
        {menuList.map((menu, index) => (
          <StyledMenuItem key={index}>
            <ListItemText primary={menu.primary} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
