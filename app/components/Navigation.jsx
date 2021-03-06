var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return(
      <div className = "top-bar">
        <div className = "top-bar-left">
          <ul className = "menu">
            <li className="menu-text">
              React Timer Application
            </li>
            <li>
              <IndexLink to = "/" activeClassName = "active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to = "/countdown" activeClassName = "active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className = "top-bar-right">
          <ul className = "menu">
            <li className = "menu-text">
              Created by <span><a href="http://github.com/zanemountcastle" target="_blank">Zane Mountcastle</a></span>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Navigation;
