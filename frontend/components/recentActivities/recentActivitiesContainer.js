import { connect } from 'react-redux';
import RecentActivities from './recentActivities.jsx';

const mapStateToProps = ({ recentActivities }) => ({
  recentActivities: recentActivities
});

const mapDispatchToProps = dispatch => ({
//  fetchActivities: () => fetchActivities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentActivities);
