import React, { Fragment } from 'react';
import { TextField, FormHelperText } from '@material-ui/core';
/**
 * Рендер формы для ввода обычного текста
 * @param input - инпут
 * @param label - надпись
 * @param helperText - хх
 * @param touched - хз
 * @param error - текст ошибки
 * @param custom - плейсхолдер и т.п.
 * @returns {*}
 */
export default ({ input, label, helperText, meta: { touched, error }, ...custom }) => (
  <Fragment>
    <TextField
      fullWidth
      label={label}
      error={error && touched}
      className={'dashboard-form_input'}
      {...input}
      {...custom}
    />
    <FormHelperText error={error && touched}>{error || helperText}</FormHelperText>
  </Fragment>
);
