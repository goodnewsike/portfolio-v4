import React, {useState} from 'react';
import {withFormsy} from 'formsy-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/// ICON IMPORTS ///
// import {ReactComponent as ErrorIcon} from '../../_assets/icons/Error.svg';

const TextInput = withFormsy((props) => {
   const [focused, setFocused] = useState(false);
   const changeValue = (e) => {
      // setValue() will set the value of the component, which in
      // turn will validate it and the rest of the form
      // Important: Don't skip this step. This pattern is required
      // for Formsy to work.
      props.setValue(e.currentTarget.value);
      typeof props.onValueChange === 'function' && props.onValueChange(e.currentTarget.value);
   };

   // props.errorMessage comes only if the component is invalid
   const errorMessage = props.errorMessage || props.valError;

   return (
      <div className={classNames('text-input', props.className)}>
         <div className={classNames('inputWrapper', {focus: focused, filled: !!props.value, errors: errorMessage})}>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <div className="position-relative">
               {props.leftIcon}
               <input
                  id={props.id}
                  name={props.name}
                  type={props.type}
                  className={`w-100 ${props.inputClassName}`}
                  placeholder={props.placeholder}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  value={props.value || ''}
                  onChange={changeValue}
                  required={props.required}
                  disabled={props.disabled}
                  autoFocus={props.autoFocus}
                  autoComplete={props.autoComplete}
               />
               {props.rightIcon}
            </div>
         </div>
         {errorMessage && (
            <div className="d-flex align-items-center">
               {/* <ErrorIcon && !props.isPristine /> */}
               <p style={{color: 'red'}}>{errorMessage}</p>
            </div>
         )}
      </div>
   );
});

export default TextInput;

TextInput.propTypes = {
   id: PropTypes.string,
   name: PropTypes.string.isRequired,
   className: PropTypes.string,
   type: PropTypes.string,
   value: PropTypes.string,
   placeholder: PropTypes.string,
   required: PropTypes.bool,
   disabled: PropTypes.bool,
   autoFocus: PropTypes.bool,
   autoComplete: PropTypes.bool,
};
