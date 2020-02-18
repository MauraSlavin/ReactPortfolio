import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { message: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
	let value = event.target.value;
	let name = event.target.name;

    this.setState({[name]: value})
  }

  // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail (email) {
  	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }

  handleSubmit (event) {
	event.preventDefault();
	const templateId = 'template_ge54Jsqk';

	if ((this.state.message.length === 0) || (this.state.message === "Please enter a message.")) {
		alert('Email not sent.  Please enter a message. Thank you.');
		this.setState ({
			message: "Please enter a message."
		})
	} else if ((this.state.name.length === 0) || (this.state.name === "Please enter a name.")) {
		alert('Email not sent.  Please enter a name. Thank you.');
		this.setState ({
			name: "Please enter a name."
		})
	} else if (!this.validateEmail(this.state.email)) {
		alert('Email not sent.  Please enter a valid email address. Thank you.');
		this.setState({
			email: "Please enter a valid email address."
		})
	} else {
		alert(templateId + " " + this.state.name + " " + this.state.email + " " + this.state.email);
		this.sendMessage(templateId, {
			message_html: this.state.message, 
			from_name: this.state.name, 
			reply_to: this.state.email,
			to_name: "Maura Slavin"
		});
	};
  }
	

  sendMessage (templateId, variables) {

	window.emailjs.send('gmail', templateId, variables, 'user_SKsFv4sS17XKyEqKFqn8o')
  	.then(res => {
    	alert('Email successfully sent! ' + res.status + ": " + res.text);
  	})
  	// Handle errors 
  	.catch(err => {
		  alert('Here some thoughts on the error that occured:', err)
	});
  }


  render() {
	return (

		<form id="contact-form">
			<div className="form-group row">
				<label htmlFor="name" className="col-form-label">Name:</label>
				<div>
					<input 
						type="text" 
						id="name" 
						className="form-control" 
						name="name" 
						value={this.state.name}
						onChange={this.handleChange}
						placeholder="your name" 
						required="required"
					></input>
				</div>
			</div>

			<div className="form-group row">
				<label htmlFor="email" className="col-form-label">Email:</label>
				<div>
					<input 
						type="email" 
						id="email" 
						className="form-control" 
						name="email" 
						value={this.state.email}
						onChange={this.handleChange}
						placeholder="example@gmail.com" 
						required="required"
					></input>
				</div>
			</div>

			<div className="form-group row">
				<label htmlFor="message" className="col-form-label">Message:</label>
				<div>
					<textarea 
						id="message" 
						className="form-control" 
						name="message" 
						value={this.state.message}
						onChange={this.handleChange}
						rows="3" 
						required="required"
						></textarea>
				</div>
			</div>

			<div className="form-group row">
				<label htmlFor="submit" className="col-form-label"></label>
				<div>
					<button 
						id="submit" 
						type="submit" 
						className="btn btn-primary form-control my-2" 
						onClick={this.handleSubmit}
					>Send</button>
				</div>
			</div>

		</form>
	)
  }


}