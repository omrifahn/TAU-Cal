import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #555;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #555;
  }

  &.tab-list-active {
    border-bottom: 2px solid #555;
    color: #fff;
    background-color: #3fb58e;
  }
`;

function Tab(props) {
  const { activeTab, label, onClick } = props;

  const handleClick = () => {
    onClick(label);
  };

  const isActive = activeTab === label;

  return (
      <TabItem
          className={`tab-list-item ${isActive ? 'tab-list-active' : ''}`}
          onClick={handleClick}
      >
        {label}
      </TabItem>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
