import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Notification from 'components/Notification';
import Amount from 'components/Amount';
import SimpleForm from './SimpleForm';
import Table from 'components/Table';
import Button from 'components/Button';
import Input from 'components/Input';
import Icon from 'components/Icon';
import Label from 'components/Label';
import Text from 'components/Text';
import _ from 'lodash';

type HomeState = {
  clicks: number,
  country: string,
  gender: string,
  activeIndex: number
}

// const panes = [
//   { menuItem: 'Tab 1', render: () => <span>Tab 1 Content</span> },
//   { menuItem: 'Tab 2', render: () => <span>Tab 2 Content</span> },
//   { menuItem: 'Tab 3', render: () => <span>Tab 3 Content</span> },
// ];

class Home extends Component<{}, HomeState> {

  state = {
    clicks: 0,
    country: '',
    gender: 'other',
    activeIndex: 0
  };

  handleTabChange = (eva: any) => {
    const { activeIndex } = eva;
    this.setState({ activeIndex });
  };

  handleChange = (eva: any): any => {
    const { value } = eva;
    this.setState({
      country: value
    });
  };

  notificator: any;

  showNotification = (): any => {
    this.notificator.note(`Note № ${_.random(1, 5000)}`, 'You can use any of bootstraps other alert styles as well by default.', 4000);
  };

  render() {
    return (
      <div>
        <button onClick={this.showNotification}>Click</button>
        <Notification ref={(notificator) => { this.notificator = notificator; }} />
        <Grid>
          <Row>
            <Button>asd</Button>
            <Col md={4}>
              <Text>
                <Icon name='search' />
                <Text.Content>
                  Account Settings
                  <Text.Sub>
                    Manage your preferences
                  </Text.Sub>
                </Text.Content>
              </Text>
            </Col>
            <Col md={4}>

            </Col>
            <Col md={4}>

            </Col>
          </Row>
          <Row>
            <Col md={12}>

            </Col>
          </Row>
          <Row between="md">
            <Col md={4}>
              <Input />
            </Col>

            <Col md={4}>
            </Col>
            <Col md={4}>

            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                    <Table.HeaderCell> </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'plus'} value={34321.43} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row processing>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'plus'} value={432.43} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'minus'} value={65.40} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'minus'} value={644} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row processing>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'plus'} value={5000.00} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'plus'} value={45789.99} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'minus'} value={0.11} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>FROM: Superhero Savings Bank </Table.Cell>
                    <Table.Cell>04/23/18</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                    <Table.Cell><Amount operation={'plus'} value={0} /></Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;