import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../content/contentHeader';
import Content from '../content/content';
import Tabs from '../util/tabs/tabs';
import TabsHeader from '../util/tabs/tabsHeader';
import TabHeader from '../util/tabs/tabHeader';
import TabsContent from '../util/tabs/tabsContent';
import TabContent from '../util/tabs/tabContent';
import BillingList from './billingList';
import BillingForm from './billingForm';
import { create, update, remove, init } from './billingActions';


class Billing extends React.Component {

  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingForm onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingForm onSubmit={this.props.update} submitLabel='Alterar' submitClass='primary' />
              </TabContent>
              <TabContent id='tabDelete'>
                <BillingForm onSubmit={this.props.remove} submitLabel='Excluir' submitClass='danger' readOnly={true} />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, init }, dispatch);
export default connect(null, mapDispatchToProps)(Billing);
