import React, { Component } from 'react';

import StoreStepOne from './Step1';

import StoreStepTwo from './Step2';

import StoreStepThree from './Step3';


class Stores extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1
		}
	}

	saveValues = (field_value) => {

	}

	nextStep = () => {
		this.setState({
		  step : this.state.step + 1
		})
	}

	previousStep = () =>  {
		this.setState({
		  step : this.state.step - 1
		})
	}

	submitRegistration = () => {
	// Handle via ajax submitting the user data, upon
	// success return this.nextStop(). If it fails,
	// show the user the error but don't advance

	this.nextStep()
	}

	showStep = () => {
		switch (this.state.step) {
			case 1:
			return <StoreStepOne 	fieldValues={fieldValues}
			                      	nextStep={this.nextStep}
			                      	previousStep={this.previousStep}
			                      	saveValues={this.saveValues} />
			case 2:
			return <StoreStepTwo 	fieldValues={fieldValues}
			                     	nextStep={this.nextStep}
			                     	previousStep={this.previousStep}
			                     	saveValues={this.saveValues} />
			case 3:
			return <StoreStepThree 	fieldValues={fieldValues}
			                     	nextStep={this.nextStep}
			                     	previousStep={this.previousStep}
			                     	saveValues={this.saveValues} />	
			case 4:
			return <Confirmation 	fieldValues={fieldValues}
			                     	previousStep={this.previousStep}
			                     	submitRegistration={this.submitRegistration} />
			case 5:
		    return <Success fieldValues={fieldValues} />
		}	
	}

	render(){
		<div>{this.showStep()}</div>
	}
}
export default Stores;