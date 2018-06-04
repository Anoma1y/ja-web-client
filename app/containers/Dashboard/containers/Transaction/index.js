import React from 'react';
import { Grid } from '@material-ui/core';
import DataTable from './components/DataTable';
import FilterSearch from 'containers/Dashboard/components/FilterSearch';

export default class Transaction extends React.Component {
  componentDidMount() {
    console.log('Transactions will be mounted')
  }
  componentWillUnmount() {
    console.log('Transactions will be unmounted')
  }
  render() {
    return (
      <Grid container className={'transactions'}>
        <Grid item xs={12}>

          <FilterSearch handleChangeDate={() => {}} />

        </Grid>

        <Grid item xs={12} className={'dashboard-container'}>

          <DataTable />

        </Grid>

      </Grid>
    )
  }
}
