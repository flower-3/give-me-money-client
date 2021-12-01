import React from 'react';
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
  isOpened: boolean;
  anchorEl: HTMLElement | null;
  menuClick: (menuName: string) => void;
}

type Menu = {
  primary: string;
};

const menuList: Array<Menu> = [{ primary: 'HOME' }, { primary: 'MENU1' }, { primary: 'MENU2' }];

export default function HeaderBarMenu({ isOpened, anchorEl, menuClick }: Props) {
  return (
    <div>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={isOpened}>
        {menuList.map((menu) => (
          <StyledMenuItem key={menu.primary} onClick={() => menuClick(menu.primary)}>
            <ListItemText primary={menu.primary} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
