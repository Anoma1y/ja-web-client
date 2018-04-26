import React, { Component } from 'react';
import Divider from 'components/Divider';
import SelectList from 'components/SelectList';
import Button from 'components/Button';
import Text from 'components/Text';
import Avatar from 'components/Avatar';
import Amount from 'components/Amount';
import Table from 'components/Table';

import countries from 'lib/countries';

type HomeState = {
  clicks: number,
  country: string
}

class Home extends Component<{}, HomeState> {
  state = {
    clicks: 0,
    country: ''
  };

  _handleChange = (value: any): any => {
    console.log(value);
    this.setState({
      country: value.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <Table
            celled
            structured
            columns={'10'}
          >
            <Table.Header>
              <Table.Row>
                <Table.Cell>Header 1</Table.Cell>
                <Table.Cell>Header 2</Table.Cell>
                <Table.Cell>Header 3</Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Row 1 - 1</Table.Cell>
                <Table.Cell>Row 1 - 2</Table.Cell>
                <Table.Cell>Row 1 - 3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Row 2 - 1</Table.Cell>
                <Table.Cell>Row 2 - 2</Table.Cell>
                <Table.Cell>Row 2 - 3</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell>Footer 1</Table.Cell>
                <Table.Cell>Footer 2</Table.Cell>
                <Table.Cell>Footer 3</Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
        <div>
          <Amount amount={{ value: 75435799.20, currency: 'EUR' }} /> <br />
          <Amount amount={{ value: 54.2, currency: 'EUR' }} /> <br />
          <Amount amount={{ value: 242, currency: 'EUR' }} /> <br />
          <Amount amount={{ value: 2.20, currency: 'EUR' }} /> <br />
          <Amount amount={{ value: 4789.02, currency: 'EUR' }} /> <br />
        </div>
        <div>
          <Avatar
            size="md"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
          />
        </div>
        <Divider
          color={'gray'}
        />
        <div>
          <SelectList
            id="country"
            name="country"
            options={countries} // req
            onChange={this._handleChange} // req
            placeholder={'Select country'}
            value={this.state.country} // req
          />

          <Button
            size={'md'}
            inline
            color={'green'}ljl
            onClick={() => console.log('Click')}
          > <span style={{ color: '#fff' }}>Withdraw</span>
          </Button>

          <Button
            disabled
            size={'md'}
            inline
            color={'red'}
            onClick={() => console.log('Click')}
          > <span style={{ color: '#fff' }}>Blocked</span>
          </Button>

        </div>
        <div>
          <Text>
            Text kakoi to
          </Text>
          <Text
            weight={'bold'}
          >
            Text bold
          </Text>
          <Text
            align={'right'}
            weight={'bold'}
          >
            Text right bold
          </Text>
        </div>
        <div>
          <Text inline>inl</Text>
          <Text inline>ine</Text>
        </div>
      </div>
    );
  }
}

export default Home;
