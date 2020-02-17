import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { message: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
	alert("handleSubmit:" + this.state.message + " from " + this.state.name + " at " + this.state.email);
	const templateId = 'template_ge54Jsqk';
	
	this.sendMessage(templateId, {
		message_html: this.state.message, 
		from_name: this.state.name, 
		reply_to: this.state.email,
		to_name: "Maura Slavin",
	})
  }

  sendMessage (templateId, variables) {
	// alert("sendMessage");
	alert("templateId: " + templateId);
	alert(variables.message_html);
	alert(variables.from_name);
	alert(variables.reply_to);

	window.emailjs.send('gmail', templateId, variables, 'user_SKsFv4sS17XKyEqKFqn8o')
	// document.emailjs.send('gmail', templateId, variables, 'user_SKsFv4sS17XKyEqKFqn8o')
  	.then(res => {
    	alert('Email successfully sent!');
		alert(res.status + res.text);
  	})
  	// Handle errors 
  	.catch(err => {
		  alert(err);
		  console.error('Here some thoughts on the error that occured:', err)
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

  handleChange(event) {
	let value = event.target.value;
	let name = event.target.name;

    this.setState({[name]: value})
  }

}