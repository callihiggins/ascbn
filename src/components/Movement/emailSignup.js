import React, {Component} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from './styles';

const url = "https://andshecouldbenext.us19.list-manage.com/subscribe/post?u=6451bb053a61584a94aa81331&amp;id=fae27cfb86";

const CustomForm = ({ status, message, onValidated }) => {
  let email, zipcode;
  const submit = () =>
    email &&
    zipcode &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      ZIPCODE: zipcode.value
    });

  return (
    <>
    <div
      css={styles.signupContainerClass}
    >
      {status === "sending" && (
        <div className="spin">
          <FontAwesomeIcon icon={[ 'fas', 'spinner' ]} className="fa-spin"/>
        </div>
      )}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        css={styles.inputItemClass}
        ref={node => (email = node)}
        type="email"
        placeholder="Email Address"
      />
      <br />
      <input
        css={styles.shortInputItemClass}
        ref={node => (zipcode = node)}
        type="zipcode"
        placeholder="Zipcode"
      />
      </div>
      <button css={styles.submitButtonClass} onClick={submit}>
        Sign Up
      </button>
    </>
  );
};

const EmailSignup = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
}

export default EmailSignup;