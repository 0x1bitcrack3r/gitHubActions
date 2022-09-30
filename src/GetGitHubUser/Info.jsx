import React from 'react';
import PropTypes from 'prop-types';


const Info = (props) => {
  return (
    <div>
      {
        props.loading
         ? <span>Loading&hellip;</span>
         : <span>{JSON.stringify(props.user)}</span>
      }
    </div>
  )
}

Info.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

export default Info;
