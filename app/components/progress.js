import React from 'react'



class Progress extends React.Component {
    constructor(props) {
    	super(props);
    }
    componentDidMount() {}
    componentWillUnmount() {}
    render(){
    	return (
    		<div className="components-progress row">
    			{this.props.progress}s
    		</div>
    	)
    }
}

export default Progress;