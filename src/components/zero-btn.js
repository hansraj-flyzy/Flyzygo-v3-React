import React from 'react'

import PropTypes from 'prop-types'

import './zero-btn.css'

const ZeroBtn = (props) => {
  return (
    <div className={`zero-btn-container zoom ${props.rootClassName} `}>
      <div className="zero-btn-container1">
        <span className="zero-btn-text">{props.text}</span>
        <span className="zero-btn-text1">{props.text1}</span>
      </div>
    </div>
  )
}

ZeroBtn.defaultProps = {
  text: 'New',
  rootClassName: '',
  text1: 'ZERO*',
}

ZeroBtn.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default ZeroBtn
