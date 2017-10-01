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
    let today = new Date(this.props.recentActivities[0].postDate);
    let activites = this.props.recentActivities.map((item, idx) => {
    let phrase = this.selectPhrase(item.nodeTypeString);
    let date = this.getTime(item.postDate, today);

    return (
      <div key={idx} className="recent-activity">
          <div className="list-item">
            <img className="profile-photo" src={`./${item.authorAvatar}`} />
              <div>
                <p>{item.author}</p>
                <p>{phrase}</p>
                <p>{item.title}</p>
                <p>{date}</p>
              </div>
            </div>
      </div>
      );
    });

    return (
        <div>
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
    let diff = today - postDate;
    let date = new Date(diff);

    if (diff === 0) {
      console.log(today.getMinutes());
      // console.log(.getMinutes());
      return "hi";
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