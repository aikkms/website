import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-icon.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#20232a`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignItems: `center`
      }}
      className="row align-top"
    >
      <img
        alt=""
        src={logo}
        className="d-inline-block align-top"
        style={{ marginRight: "10px"}}
        width="70"
        height="70"
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
