import { connect } from 'react-redux';
import RecentActivities from './recentActivities.jsx';

import { fetchRecentActivities } from "../../actions/user_actions.js";
import {recentActivities} from '../../util/user_util.js';

const mapStateToProps = ( state ) => ({
  recentActivities: state.recentActivities
});

const mapDispatchToProps = dispatch => ({
  fetchRecentActivities: () => dispatch(fetchRecentActivities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentActivities);
