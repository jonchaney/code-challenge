import React, { Component } from 'react';

class RecentActivities extends React.Component {
  constructor(props) {
    super(props);
    
  }

  renderHeader() {
    return (
      <div className="header-activity">
        <div><i className="fa fa-angle-left" aria-hidden="true"></i></div>
        <div>Activity</div>
        <div><i className="fa fa-bars" aria-hidden="true"></i></div>
      </div>
    );
  }

  renderActivties() {
    return (
      <div>
        <ul className="recent-activity">
          {this.props.recentActivities.map((item, idx) =>
            <li key={idx}>
              <img className="profile-photo" src={`./${item.authorAvatar}`} />
              <p>{item.author}</p>
              <p>{item.nodeTypeString}</p>
              <p>{item.postDate}</p>
            </li>
          )}

        </ul>
      </div>
    );
  }

  render() {
    console.log(this.props.recentActivities);
    return (
      <div>
          {this.renderHeader()}
          {this.renderActivties()}
      </div>
    );
  }
}

export default RecentActivities;