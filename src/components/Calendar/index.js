import React from 'react';
import dateFns from 'date-fns';

import calendarActions from '../../store/actions/calendar.actions';

import { connect } from 'react-redux';

// import styles from './styles';

class Calendar extends React.Component {
  nextMonth = () => {
    const { currentMonth, onChangeMonth } = this.props;
    onChangeMonth(dateFns.addMonths(currentMonth, 1));
  };

  prevMonth = () => {
    const { currentMonth, onChangeMonth } = this.props;
    onChangeMonth(dateFns.subMonths(currentMonth, 1));
  };

  onDateClick = (day) => {
    const { onChangeSelectedDate } = this.props;
    onChangeSelectedDate(day);
  };

  renderCells() {
    const { currentMonth, selectedDate } = this.props;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart) // eslint-disable-line no-nested-ternary
                ? 'disabled'
                : dateFns.isSameDay(day, selectedDate) ? 'selected' : ''
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>,
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  renderDays() {
    const dateFormat = 'dddd';
    const days = [];
    const { currentMonth } = this.props;

    const startDate = dateFns.startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>,
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY';
    const { currentMonth } = this.props;

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedDate: state.calendar.selectedDate,
  currentMonth: state.calendar.currentMonth,
});

const mapDispatchToProps = dispatch => ({
  onChangeMonth: month => dispatch(calendarActions.onChangeCurrentMonth(month)),
  onChangeSelectedDate: date => dispatch(calendarActions.onChangeSelectedDate(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
