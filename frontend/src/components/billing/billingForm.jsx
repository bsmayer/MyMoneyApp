import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LabelAndInput from '../util/form/labelAndInput';
import { init } from './billingActions';
import Grid from '../util/grid';
import ItemList from './itemList';
import Summary from './summary';

class BillingForm extends React.Component {

  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(credit => +credit.value || 0).reduce(sum),
      sumOfDebits: this.props.debits.map(debit => +debit.value || 0).reduce(sum)
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debits } = this.props;
    const { sumOfCredits, sumOfDebits } = this.calculateSummary();
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly} />
          <Field name='month' component={LabelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' type='number' readOnly={readOnly} />
          <Field name='year' component={LabelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' type='number' readOnly={readOnly} />
          <Summary credit={sumOfCredits} debit={sumOfDebits} />
          <ItemList readOnly={readOnly} cols='6 6' field='credits' legend='Créditos' list={credits} />
          <ItemList readOnly={readOnly} cols='6 6' field='debits' legend='Débitos' list={debits} showStatus={true} />
        </div>
        <div className='box-footer'>
          <Grid cols='12 12'>
            <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
            <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
          </Grid>
        </div>
      </form>
    );
  }

};

BillingForm = reduxForm({ form: 'billingForm', destroyOnUnmount: false })(BillingForm);
const selector = formValueSelector('billingForm');

const mapStateToProps = state => ({ credits: selector(state, 'credits'), debits: selector(state, 'debits') });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingForm);
