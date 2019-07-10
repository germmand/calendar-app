import React from 'react';

import Calendar from '../../components/Calendar';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <Calendar />
    );
  }
}

export default Home;
