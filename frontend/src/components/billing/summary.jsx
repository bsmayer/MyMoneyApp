import React from 'react';

import Grid from '../util/grid';
import Row from '../util/row';
import ValueBox from '../valuebox/valuebox';

export default ({ credit, debit }) => (
  <Grid cols='12'>
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debit}`} text='Total de Débitos' />
        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debit}`} text='Valor Consolidado' />
      </Row>
    </fieldset>

  </Grid>
);
