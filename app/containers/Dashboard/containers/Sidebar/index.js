import * as React from 'react';
import SidebarUser from './components/SidebarUser';
import SidebarNotification from './components/SidebarNotification';
import SidebarWallet from './components/SidebarWallet';
import SidebarCard from './components/SidebarCard';
import ProductAdd from './components/ProductAdd';
import './style.scss';

type State = {
  sidebarIsOpen: boolean
};

class Sidebar extends React.Component<{}, State> {

  state = {
    sidebarIsOpen: false
  };

  componentDidMount() {
    this.updateDimensions();
    (document.addEventListener: Function)('mousedown', this.handleClickOutside);
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    (document.removeEventListener: Function)('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.updateDimensions);
  }

  handleClickOutside = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (this.sidebarRef && !this.sidebarRef.contains(event.target)) {
      this.setState({
        sidebarIsOpen: false
      });
    }
  };

  updateDimensions = () => {
    if (window.innerWidth >= 1200) {
      this.setState({
        sidebarIsOpen: false
      });
    }
  };

  handleSidebar = () => {
    this.setState({
      sidebarIsOpen: !this.state.sidebarIsOpen
    });
  };

  handleSidebarRef = (node: ?HTMLDivElement) => {
    this.sidebarRef = node;
  };

  sidebarRef: ?any;

  render() {

    const { sidebarIsOpen } = this.state;

    return (
      <div className={`sidebar sidebar-content ${sidebarIsOpen ? 'sidebar__active' : ''}`} ref={this.handleSidebarRef}>

        <div className={'sidebar-mobile'}>

          <button className={'sidebar-mobile_button'} onClick={this.handleSidebar}>
            <svg enableBackground="new 0 0 50 50" height="40px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="40px" xmlSpace="preserve">
              <circle cx="25" cy="25" fill="#A3CCEE" r="24" stroke="#A3CCEE" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
              <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
            </svg>
          </button>

        </div>

        <div className={'sidebar_item sidebar-user'}>
          <SidebarUser />
        </div>

        <div className={'sidebar_item sidebar-notification'}>
          <SidebarNotification />
        </div>

        <div className={'sidebar_item sidebar-wallets'}>
          <SidebarWallet />
        </div>

        <div className={'sidebar_item sidebar-cards'}>
          <SidebarCard />
        </div>

        <div className={'sidebar_item sidebar-product-add'}>
          <ProductAdd />
        </div>

      </div>
    );
  }
}

export default Sidebar;
