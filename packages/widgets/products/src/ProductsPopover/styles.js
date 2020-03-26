import { makeStyles } from '@astral-frontend/styles';

import { getPopoverArrowStyles } from '../utils';

export default makeStyles(theme => ({
  arrow: getPopoverArrowStyles('#ffffff'),
  popoverContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 300,
    // для того, чтобы стрелка поповера не заезжала на anchor
    marginLeft: 6,
    minHeight: 80,
    borderRadius: 2,
    boxShadow: theme.shadows[2],
  },
}));