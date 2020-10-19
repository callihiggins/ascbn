import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from './styles';
import { InputGroup } from './styles';

const Input = ({ name, label, doChange, type='text', hasError}) => {
  return (
    <InputGroup type={type} hasError={hasError}>
      <label htmlFor={name} css={styles.labelClass}>
        { label }
        <input type={type} id={name} name={name} onChange={doChange} css={styles.inputItemClass}/>
      </label>
      {hasError && <div css={styles.requiredErrorClass}>This field is required</div>}
    </InputGroup>
  )
}

class Form extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    state: '',
    mobile: '',
    usedBefore: null,
    learnAbout: false,
  }

  buildRequestBody = () => {
    const { email, firstName, lastName, state, mobile, usedBefore,  learnAbout } = this.state;
    var timestamp = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
    return { data: [{ email, firstName, lastName, state, mobile, usedBefore, learnAbout, timestamp }]};
  }

  doSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    const requiredFiends = ['email', 'firstName', 'lastName', 'state', 'mobile', 'usedBefore'];

    requiredFiends.forEach(field => {
      if (!this.state[field]) {
        hasError = true;
        const stateName = `${field}Error`;
        this.setState({
          [stateName] : true
        })
      }
    })

    if (hasError) return;

    const requestBody = this.buildRequestBody();
    this.setState({
      loading: true,
      error: false,
      success: false,
    });

    await fetch('https://sheetdb.io/api/v1/cakw6mvlsnv0l', {
      method: 'post',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(requestBody),
      responseType: 'json'
    })
    .then(response => {
      this.setState({
        loading: false,
        success: true
      })
    })
    .catch(err => {
      console.log('err', err);
      this.setState({
        loading: false,
        error: true,
        errorMessage: err,
      })
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    
    this.setState({
      [name]: value
    });
  }

  handleRadioChange = e => {
    const { value, name } = e.target;
    console.log(value)
    this.setState({
      [name]: value
    });
  }

  render() {
    const { loading, error, success, errorMessage} = this.state;
    return (
      <form name="contact-form" onSubmit={this.doSubmit} css={styles.formClass}>
        <div css={styles.inputsClass}>
          <Input hasError={this.state.emailError} name="email" label="Email Address *" type="email" doChange={this.handleChange} />
          <Input hasError={this.state.firstNameError} name="firstName" label="First Name *" doChange={this.handleChange} />
          <Input hasError={this.state.lastNameError} name="lastName" label="Last Name *" doChange={this.handleChange} />
          <Input hasError={this.state.stateError} name="state" label="State" doChange={this.handleChange} />
          <Input hasError={this.state.mobileError} name="mobile" label="Mobile Phone *" type="tel" doChange={this.handleChange} />
        </div>
        <label htmlFor="usedBefore" css={styles.radioLabelClass}>
        <span>Have you ever used a peer-to-peer texting tool before?*</span>
          Yes <input type="radio" css={styles.radioClass} name="usedBefore" value="yes" onChange={this.handleRadioChange}/>
          No <input type="radio" css={styles.radioClass} name="usedBefore" value="no" onChange={this.handleRadioChange}/>
        </label>
        {this.state.usedBeforeError && <div css={styles.requiredErrorClass}>This field is required</div>}
        <Input name="learnAbout" label="How did you find out about the text bank?" doChange={this.handleChange} />
        {!loading && !success &&
          <button css={styles.formButtonClass}>Submit</button>
        }
        {loading &&
          <div css={styles.spinClass}>
            <FontAwesomeIcon icon={[ 'fas', 'spinner' ]} className="fa-spin"/>
          </div>
        }
        {error &&
          <div css={styles.errorClass}>
            {errorMessage}
          </div>
        }
        {success && 
          <div css={styles.successClass}>
            Thanks for signing up!
          </div>
        }
      </form>
    );
  }
}

export default Form;