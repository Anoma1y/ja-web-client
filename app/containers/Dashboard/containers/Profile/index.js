import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import UserInfo from './components/UserInfo';
import Tab from 'components/Tab';
import Account from './containers/Account';
import Verification from './containers/Verification';
import Security from './containers/Security';
import {
  PersonOutline as PersonOutlineIcon,
  Fingerprint as FingerprintIcon,
  Security as SecurityIcon
} from '@material-ui/icons';
import { pullProfile } from './store/actions';
import './style.scss';

const panes = [
  { icon: <FingerprintIcon />, menuItem: 'Verification', render: () => <Verification /> },
  { icon: <PersonOutlineIcon />, menuItem: 'Account', render: () => <Account /> },
  { icon: <SecurityIcon />, menuItem: 'Security', render: () => <Security /> },
];

@connect(null, ({
  pullProfile
}))
export default class Profile extends Component {

  state = {
    ready: false,
    activeIndex: 0
  };

  componentDidMount() {
    this.props.pullProfile()
      .then(() => {
        this.setState({
          ready: true
        });
      })
  }

  handleChangeTab = ({ activeIndex }) => {
    this.setState({
      activeIndex
    })
  };

  renderContent = (activeIndex) => (
    <div className={'profile-container'}>

      <Tab
        panes={panes}
        onTabChange={this.handleChangeTab}
        activeIndex={activeIndex}
      />

    </div>
  )

  render() {
    const { activeIndex, ready } = this.state;
    return (
      <Grid container justify={'center'} className={'profile'}>
        <Grid item xs={12}>
          <div className={'dashboard-container dashboard-container__fluid'}>

            <UserInfo />

          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={'dashboard-container container'}>

            {ready ? this.renderContent(activeIndex) : <CircularProgress size={70} className={'dashboard_loading'} />}

          </div>
        </Grid>
      </Grid>
    )
  }

}
