import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission (replace with actual email service integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically integrate with an email service like EmailJS,
      // Formspree, or a backend API to send the email to ayushyogi0@gmail.com
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // For now, we'll just log the form data and show success message
      console.log('Form data:', formData);
      console.log('This would send an email to: ayushyogi0@gmail.com');
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              placeholder="Tell me about your project or just say hello!"
              rows="5"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <span className="button-icon">✉️</span>}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              ❌ Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
