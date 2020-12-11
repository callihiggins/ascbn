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
    organization: '',
    role: '',
    socialMedia: true,
    educator: false,
    screenings: true,
  }

  buildRequestBody = () => {
    const { email, firstName, lastName, organization, role, socialMedia, educator } = this.state;
    var timestamp = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'});
    return { data: [{ email, firstName, lastName, organization, role, socialMedia, educator, timestamp }]};
  }

  doSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    const requiredFiends = ['email'];

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

    await fetch('https://sheetdb.io/api/v1/9b65ko79r9lus', {
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

  handleCheckboxChange = e => {
    const { checked, name } = e.target;
    this.setState({
      [name]: checked
    });
  }

  render() {
    const { loading, error, success, errorMessage} = this.state;
    return (
      <>
        <div css={styles.closeButtonClass} onClick={this.props.closeModal}>
          <FontAwesomeIcon icon={[ 'fas', 'times' ]} className="fa-times"/>
        </div>
        <form name="contact-form" onSubmit={this.doSubmit} css={styles.formClass}>
          <div css={styles.inputsClass}>
            <Input hasError={this.state.emailError} name="email" label="Email Address *" type="email" doChange={this.handleChange} />
            <Input hasError={this.state.firstNameError} name="firstName" label="First Name *" doChange={this.handleChange} />
            <Input hasError={this.state.lastNameError} name="lastName" label="Last Name *" doChange={this.handleChange} />
          </div>
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
              Thanks for signing up. Welcome to the Action Squad!
            </div>
          }
        </form>
      </>
    );
  }
}

export default Form;