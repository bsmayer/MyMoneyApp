import React from 'react';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';

    if (cols[0]) classes += `col-xs-${cols[0]}`;
    if (cols[1]) classes += ` col-sm-${cols[1]}`;
    if (cols[2]) classes += ` col-md-${cols[2]}`;
    if (cols[2]) classes += ` col-lg-${cols[3]}`;

    return classes;
  }

  render() {
    var classes = this.toCssClasses(this.props.cols || '12');
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
};
