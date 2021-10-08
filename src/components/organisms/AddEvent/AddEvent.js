import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typography from 'components/atoms/Typography/Typography';
import TextField from 'components/atoms/TextField/TextField';
import Button from 'components/atoms/Button/Button';
import theme from 'theme/MainTheme';

const Container = styled.div``;

const Form = styled.form`
  margin-top: 20px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
`;

const AddEvent = (props) => {
  const [inputFieldValue, setInputFieldValue] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    type: '',
  });

  const [fieldToValidate, setFieldToValidate] = useState({
    title: false,
    date: false,
    time: false,
    type: false,
  });

  const validateField = useCallback(
    (field) => {
      const input = inputFieldValue[field];
      const currentValidationState = fieldToValidate;

      currentValidationState[field] = input === null || input === '';
      setFieldToValidate({ ...currentValidationState });
      return !currentValidationState[field];
    },
    [inputFieldValue, fieldToValidate, setFieldToValidate],
  );

  const isValid = useCallback(() => {
    let validationStatus = true;
    Object.keys(fieldToValidate).forEach((key) => {
      validationStatus = validationStatus && validateField(key);
    });
    return validationStatus;
  }, [fieldToValidate, validateField]);

  const handleFieldChange = useCallback(
    (field, value) => {
      const currentValidationState = fieldToValidate;
      currentValidationState[field] = false;
      setFieldToValidate({ ...currentValidationState });

      const currentFieldValues = inputFieldValue;
      currentFieldValues[field] = value;
      setInputFieldValue({ ...currentFieldValues });
    },
    [fieldToValidate, inputFieldValue, setFieldToValidate, setInputFieldValue],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!props.validate || (props.validate && isValid())) {
        props.onSubmit(inputFieldValue);
      }
    },
    [props, isValid, inputFieldValue],
  );

  return (
    <Container>
      <Typography variant='title'>Add New Event</Typography>
      <Form>
        <TextField
          label='Title'
          required
          value={inputFieldValue.title}
          onChange={(e) => handleFieldChange('title', e.target.value)}
          onBlur={() => props.validate && validateField('title')}
          error={fieldToValidate.title}
        />
        <TextField
          label='Description'
          value={inputFieldValue.description}
          onChange={(e) => handleFieldChange('description', e.target.value)}
          onBlur={() => props.validate && validateField('description')}
          error={fieldToValidate.description}
        />
        <Box>
          <TextField
            label='Date'
            required
            value={inputFieldValue.date}
            onChange={(e) => handleFieldChange('date', e.target.value)}
            onBlur={() => props.validate && validateField('date')}
            error={fieldToValidate.date}
          />
          <TextField
            label='Time'
            required
            value={inputFieldValue.time}
            onChange={(e) => handleFieldChange('time', e.target.value)}
            onBlur={() => props.validate && validateField('time')}
            error={fieldToValidate.time}
          />
        </Box>
        <TextField
          label='Event Type'
          required
          value={inputFieldValue.type}
          onChange={(e) => handleFieldChange('type', e.target.value)}
          onBlur={() => props.validate && validateField('type')}
          error={fieldToValidate.type}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button color={theme.color.primary} title='add event' onClick={handleSubmit} />
        </div>
      </Form>
    </Container>
  );
};

AddEvent.propTypes = {
  validate: PropTypes.bool,
  onSubmit: PropTypes.func,
};

AddEvent.defaultProps = {
  validate: false,
  onSubmit: null,
};

export default AddEvent;
