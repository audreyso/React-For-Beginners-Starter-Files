import React from 'react';

// param 1 = component, param 2 = dom element it should reneder out to
class StorePicker extends React.Component {
	render() {
		// Don't put a comment directly under return, you'll get an error
		return (
			<form className="store-selector">
			{/* Testing a comment in JSX*/}
			<h2>Please Enter Store Name</h2>
			<input type="text" required placeholder="Store Name"/>
			<button type ="submit">Visit Store --></button>
			</form>
			// FYI You can't return <p>Hello</p> outside of form
		)
	}
}

export default StorePicker;