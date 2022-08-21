import React, {FC} from 'react';
import PropTypes from 'prop-types';
import { pageSize } from './filterArray';
import { SelectProps } from '../containers/interface';
const PageFilter = (props: SelectProps) => {
  
  return(
  <div>
    <select className="select" onChange={props.handlePageSizeChange} name="filter">
      {pageSize.map((filter) => (
        <option value={filter} key={filter}>
          {filter}
        </option>
      ))}
    </select>
  </div>
)};

PageFilter.propTypes = {
  handlePageSizeChange: PropTypes.func.isRequired,
};

export default PageFilter;
