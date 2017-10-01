import React, { Component } from 'react';

class RecentActivities extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    this.props.fetchRecentActivities();
  }

  renderHeader() {
    return (
      <div className="header-activity">
        <div><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
        <div>Activity</div>
        <div><i className="fa fa-bars" aria-hidden="true"></i></div>
      </div>
    );
  }

  renderActivities() {
    let today = new Date(this.props.recentActivities[0].postDate),
        activites = this.props.recentActivities.map((item, idx) => {

          let phrase = this.selectPhrase(item.nodeTypeString),
              date = this.getTime(item.postDate, today);

          return (
              <div className="list-item" key={idx}>
                  <img className="profile-photo" src={`./${item.authorAvatar}`} />
                  <div className="post-info">
                    <div>
                      <p>{item.author} <span>{phrase}</span></p>
                    </div>
                    <div>
                      <div>{item.title}</div>
                    </div>
                    <div>
                      <p><span>{date}</span></p>
                    </div>
                  </div>
              </div>
            );
          });

          return (
            <div className="recent-activity">
              {activites} 
            </div>
            );
  }

  selectPhrase(nodeType) {
    let phrase;
    if (nodeType === "Comment") {
      phrase = "commented on the idea";
    } else if (nodeType === "Reply") {
      phrase = "replied to a comment on the idea";
    } else if (nodeType === "Idea") {
      phrase = "posted an idea";
    }
    return phrase;
  }

  getTime(postDate, today) {
    let diff = today - postDate,
        date = new Date(diff);

    if (diff === 0) {
      return "4 minutes ago";
    }

    return `${date.getDate()} days ago`;
  }

  render() {
    if (this.props.recentActivities.author === null) {
      return (
        <div>loading...</div>
      ); 
      } else {
        return (
          <div>
              {this.renderHeader()}
              {this.renderActivities()}
          </div>
          );
        }
  }
}

export default RecentActivities;