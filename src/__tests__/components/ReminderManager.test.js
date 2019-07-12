import React from 'react';
import EnzymeToJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import { Button, TextField } from '@material-ui/core';
import ReminderManager from '../../components/ReminderManager';

describe('ReminderManager', () => {
  it('matches snapshot', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
    };
    const component = mount(<ReminderManager {...props} />);
    expect(EnzymeToJson(component)).toMatchSnapshot();
  });

  it('calls handleClose on Cancel Button', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
    };
    const component = mount(<ReminderManager {...props} />);
    const cancelButton = component
      .find(Button)
      .filterWhere(b => b.props().children === 'Cancel');
    expect(cancelButton).toHaveLength(1);
    cancelButton.simulate('click');
    expect(props.handleClose).toHaveBeenCalledTimes(1);
  });

  it('sets state with given values if isUpdate = true', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
      isUpdate: true,
      reminder: {
        id: 'dummy-id',
        text: 'dummy-text',
        time: '15:06',
        selectedDate: '',
      },
    };
    const component = mount(<ReminderManager {...props} />).find('ReminderManager');
    const valuesState = component.state().values;
    expect(valuesState.reminderText).toEqual(props.reminder.text);
    expect(valuesState.reminderTime).toEqual(props.reminder.time);
  });

  it('calls onCreate on submit', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
      onCreate: jest.fn(),
    };
    const values = {
      reminderText: 'dummy-text',
      reminderTime: '15:06',
    };
    const component = mount(<ReminderManager {...props} />).find('ReminderManager');
    const submitButton = component
      .find(Button)
      .filterWhere(b => b.props().children === 'Create');
    expect(submitButton).toHaveLength(1);
    component.setState({ values });
    submitButton.simulate('click');
    expect(props.onCreate).toHaveBeenCalledWith(values);
  });

  it('calls onUpdate on submit if isUpdate = true', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
      onUpdate: jest.fn(),
      isUpdate: true,
      reminder: {
        text: 'text',
        time: '00:00',
        id: '123',
        selectedDate: '',
      },
    };
    const values = {
      reminderText: 'dummy-text',
      reminderTime: '15:06',
    };
    const updatedReminder = {
      ...props.reminder,
      text: values.reminderText,
      time: values.reminderTime,
    };
    const component = mount(<ReminderManager {...props} />).find('ReminderManager');
    const submitButton = component
      .find(Button)
      .filterWhere(b => b.props().children === 'Update');
    expect(submitButton).toHaveLength(1);
    component.setState({ values });
    submitButton.simulate('click');
    expect(props.onUpdate).toHaveBeenCalledWith(updatedReminder);
  });

  it('sets reminder text properly on input change', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
    };
    const component = mount(<ReminderManager {...props} />).find('ReminderManager');
    const reminderTextValue = 'dummy-text value';
    const reminderTextInput = component
      .find(TextField)
      .filterWhere(b => b.props().id === 'reminder-text');
    expect(reminderTextInput).toHaveLength(1);
    reminderTextInput.props().onChange({ target: { value: reminderTextValue } });
    expect(component.state().values.reminderText).toEqual(reminderTextValue);
  });

  it('sets reminder time properly on input change', () => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      classes: {
        textField: 'textfield-class',
        button: 'button-class',
      },
    };
    const component = mount(<ReminderManager {...props} />).find('ReminderManager');
    const reminderTimeValue = '15:05';
    const reminderTextInput = component
      .find(TextField)
      .filterWhere(b => b.props().id === 'reminder-time');
    expect(reminderTextInput).toHaveLength(1);
    reminderTextInput.props().onChange({ target: { value: reminderTimeValue } });
    expect(component.state().values.reminderTime).toEqual(reminderTimeValue);
  });
});
