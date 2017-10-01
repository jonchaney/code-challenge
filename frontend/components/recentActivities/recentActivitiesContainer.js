import { connect } from 'react-redux';
import RecentActivities from './recentActivities.jsx';
import {recentActivities} from '../../util/user_util.js';

const mapStateToProps = () => ({
  recentActivities: recentActivities.data.recentActivities
});

const mapDispatchToProps = dispatch => ({
//  fetchActivities: () => fetchActivities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentActivities);
