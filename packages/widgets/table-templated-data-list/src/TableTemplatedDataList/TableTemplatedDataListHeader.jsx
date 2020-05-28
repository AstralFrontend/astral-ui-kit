import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';
import { Checkbox } from '@astral-frontend/components';

import { DataListContext } from '@astral-frontend/data-list';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'sticky',
      top: 0,
      marginBottom: theme.spacing(3),
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderWidth: theme.spacing(0, 0, 0, 1),
      backgroundColor: theme.palette.background.default,
      color: theme.palette.gray[500],
      fontWeight: theme.typography.fontWeightBold,
      zIndex: 2,
      userSelect: 'none',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      '&:first-child': {
        justifyContent: 'center',
      },
    },
  }),
  { name: 'TableTemplatedDataListHeader' },
);

const TableTemplatedDataListHeader = ({ className, columns }) => {
  const classes = useStyles();
  const {
    items,
    selectedItems,
    setSelectedItems,
    disableSelect,
  } = React.useContext(DataListContext);
  const checked = items.length === selectedItems.length;
  const handleCheckboxChange = () => {
    if (checked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.filter(item => item.percentCompleted === 100));
    }
  };

  return (
    <div className={cn(classes.root, className)}>
      <div className={classes.item}>
        {!disableSelect ? (
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
        ) : (
          <div />
        )}
      </div>

      {columns.map(column => (
        <div key={column.title} className={classes.item}>
          {column.title}
        </div>
      ))}
    </div>
  );
};

TableTemplatedDataListHeader.defaultProps = {
  className: null,
};

TableTemplatedDataListHeader.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default TableTemplatedDataListHeader;