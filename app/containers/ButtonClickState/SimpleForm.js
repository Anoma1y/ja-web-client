import React from 'react';
import { Field, reduxForm } from 'redux-form';
import type { FormProps } from 'redux-form'
import Input from 'components/Input'

import 'components/Input/style.scss';

type Props = FormProps & {
  onSubmitProp: Function,

};

const SimpleForm = (props: Props) => {
  return (
    <form>
      <div>
        <div>
          <Field
            name="firstName"
            component={Input.Redux}
            type="text"
            label="Username"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="lastName"
            component={Input.Redux}
            type="text"
            label="Lastname"
            placeholder="Last Name"
          />
        </div>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'simple' })(SimpleForm);