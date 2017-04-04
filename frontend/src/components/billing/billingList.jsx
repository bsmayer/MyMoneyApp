import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList, showUpdate, showDelete } from './billingActions';

class BillingList extends React.Component {

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.billing.list || [];
    return list.map(x => (
      <tr key={x._id}>
        <td>{x.name}</td>
        <td>{x.month}</td>
        <td>{x.year}</td>
        <td>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(x)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.showDelete(x)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className='table-actions'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }

};

const mapStateToProps = state => ({ billing: state.billing });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingList);
