import React from 'react'
import Header from './components/header'
import Progress from './components/progress'

class Root extends React.Component {
	/*constructor(props) {
    	super(props);
    }
    componentDidMount() {}
    componentWillUnmount() {}*/
	render() {
		return (
			<div>
				<Header />
				<Progress 
					progress='12'
				></Progress>
			</div>
		)
	}
}

export default Root;