import React from 'react';
import DatePicker from 'react-date-picker';
import './InputForm.css';



class InputForm extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
		startdate: new Date(),
		enddate: new Date(),
		includeenddate: false
	}
  }
	
 
  	onChangeStartDate = startdate => {
  		this.setState({ startdate })
  	}
  	onChangeEndDate = enddate => {
  		this.setState({ enddate })
  	}

  	onChangeOfCheckBox = value => {
  		let check = this.state.includeenddate;
  		this.setState({ includeenddate: !check })
  	}

	onButtonClick = (event) => {
		event.preventDefault();
		if(event.target.value==='Calculate'){
			this.props.onRouteChange('calculate');
			fetch('https://enigmatic-hollows-38229.herokuapp.com/findNoOfDays',{
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({
						"startDate":this.state.startdate,
						"endDate":this.state.enddate,
						"includeEndDate":this.state.includeenddate
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data) {
					this.props.loadData(data)
				}
			})	
		}
		else{
			this.props.onRouteChange('reset');
			this.setState({startdate: new Date(), enddate: new Date(), includeenddate: false})
		}
	}



	  render(){
	    return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa3 black-80">
				  <form className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Enter dates</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Start Date</label>
				        <DatePicker 
				        	className="pa2 input-reset ba bg-transparent hover-light-green w-100" 
				        	type="startdate" 
				        	name="start-date"  
				        	id="start-date"
				        	onChange={this.onChangeStartDate}
	          				value={this.state.startdate}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">End Date</label>
				       	<DatePicker 
				        	className="pa2 input-reset ba bg-transparent hover-light-green w-100" 
				        	type="enddate" 
				        	name="end-date"  
				        	id="end-date"
				        	onChange={this.onChangeEndDate}
	          				value={this.state.enddate}
				        />
				      </div>
				      <label 
				      		 className="pa0 ma0 lh-copy f6 pointer">
				      		 <input 
				      		 	checked={this.state.includeenddate} 
				      		 	onChange={this.onChangeOfCheckBox}
				      		 	type="checkbox"
				      		 />
				             Include End Date
				      </label>
				    </fieldset>
				    <div className="buttons">
				      <input 
				      	onClick={this.onButtonClick}
				      	className="ma2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Calculate"/>
				      <input 
				      	onClick={this.onButtonClick}
				      	className="ma2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Reset"/>
				    </div>
				  </form>
				</main>
			</article>
	  );
  }
}


export default InputForm;