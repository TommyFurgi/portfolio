import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckIcon, CopyIcon } from '../../assets/icons/CopyIcon';
import {
  BORDER_RADIUS,
  COLOR_BORDER,
  COLOR_INPUT_BG,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_TEXT_DARK,
  SIZE_BODY,
} from '../config/Constants';

const formSectionStyle = {
  flex: '1 1 500px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px',
  borderRadius: BORDER_RADIUS,
  border: `1px solid ${COLOR_BORDER}`,
  backgroundColor: COLOR_INPUT_BG,
  color: COLOR_TEXT_DARK,
  fontSize: SIZE_BODY,
  outline: 'none',
};

const emailDisplayStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
};

const emailTextStyle = {
  color: COLOR_PRIMARY,
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const formInnerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const textareaStyle = {
  minHeight: '150px',
  resize: 'vertical',
};

const submitButtonStyle = {
  width: '100%',
  color: '#ffffff',
  padding: '12px 25px',
  border: 'none',
  borderRadius: BORDER_RADIUS,
  cursor: 'pointer',
  fontSize: SIZE_BODY,
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

const statusStyle = {
  marginTop: '10px',
  color: COLOR_PRIMARY,
  fontWeight: '500',
};

const EmailForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const myEmail = 'tomaszfurgala23@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        setStatus('Failed to send. Try again later.');
        console.log(error.text);
      });
  };

  return (
    <div style={formSectionStyle}>
      <div
        style={{ ...inputStyle, ...emailDisplayStyle }}
        onClick={handleCopy}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
        title="Copy email"
      >
        <span style={emailTextStyle}>{myEmail}</span>
        <div style={iconContainerStyle}>
          {copied ? <CheckIcon /> : <CopyIcon />}
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} style={formInnerStyle}>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email..."
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Describe your idea or ask a question..."
          style={{ ...inputStyle, ...textareaStyle }}
          required
        />
        <button
          type="submit"
          style={{
            ...submitButtonStyle,
            backgroundColor: isHovered ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get in Touch
        </button>
        {status && <p style={statusStyle}>{status}</p>}
      </form>
    </div>
  );
};

export default EmailForm;
