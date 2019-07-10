import React from 'react';

import Calendar from '../../components/Calendar';
import Reminders from '../../components/Reminders';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div>
            <div>
                <Calendar />
            </div>
            <div>
                <Reminders />
            </div>
        </div>
    );
  }
}

export default Home;
