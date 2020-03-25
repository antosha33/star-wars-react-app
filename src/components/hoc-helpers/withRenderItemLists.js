import React from 'react';

const WithRenderItemLists =(renderfn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props} renderItem={renderfn} ></Wrapped>
    )
  }
}

export default WithRenderItemLists;
