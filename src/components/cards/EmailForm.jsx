import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  BORDER_RADIUS,
  COLOR_BORDER,
  COLOR_INPUT_BG,
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_TEXT_DARK,
  FONT_BODY,
  SIZE_BODY,
  TRANSITION_DEFAULT,
} from '../config/Constants';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  isEmailJsConfigured,
} from '../config/emailjs';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  fontFamily: FONT_BODY,
};

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px 14px',
  borderRadius: BORDER_RADIUS,
  border: `1px solid ${COLOR_BORDER}`,
  backgroundColor: COLOR_INPUT_BG,
  color: COLOR_TEXT_DARK,
  fontSize: SIZE_BODY,
  outline: 'none',
  fontFamily: FONT_BODY,
};

const textareaStyle = {
  minHeight: '140px',
  resize: 'vertical',
};

const submitButtonStyle = {
  width: '100%',
  color: '#ffffff',
  padding: '12px 24px',
  border: 'none',
  borderRadius: BORDER_RADIUS,
  cursor: 'pointer',
  fontSize: SIZE_BODY,
  fontWeight: 600,
  fontFamily: FONT_BODY,
  transition: `background-color ${TRANSITION_DEFAULT}`,
};

const statusStyle = {
  margin: 0,
  fontSize: SIZE_BODY,
  color: COLOR_PRIMARY,
  fontWeight: 500,
};

const EmailForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [replyTo, setReplyTo] = useState('');

  useEffect(() => {
    if (isEmailJsConfigured()) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isEmailJsConfigured()) {
      setStatus('Email service is not configured.');
      return;
    }

    const timeField = form.current?.elements.time;
    if (timeField) {
      timeField.value = new Date().toLocaleString('en-GB', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
    }

    setIsSending(true);
    setStatus('Sending...');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current
      );
      setStatus('Message sent. Thank you for contacting me!');
      form.current.reset();
      setReplyTo('');
    } catch (error) {
      setStatus('Failed to send. Please try again or email me directly.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyle}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        style={inputStyle}
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your email"
        style={inputStyle}
        value={replyTo}
        onChange={(e) => setReplyTo(e.target.value)}
        required
      />
      <input type="hidden" name="reply_to" value={replyTo} />
      <input type="hidden" name="time" defaultValue="" />
      <textarea
        name="message"
        placeholder="Your message"
        style={{ ...inputStyle, ...textareaStyle }}
        required
      />
      <button
        type="submit"
        disabled={isSending}
        style={{
          ...submitButtonStyle,
          backgroundColor: isHovered && !isSending ? COLOR_PRIMARY_DARK : COLOR_PRIMARY,
          opacity: isSending ? 0.7 : 1,
          cursor: isSending ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isSending ? 'Sending...' : 'Send message'}
      </button>
      {status && <p style={statusStyle}>{status}</p>}
    </form>
  );
};

export default EmailForm;
