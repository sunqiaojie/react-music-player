import React from 'react'
import './progress.less'



class Progress extends React.Component {
    constructor(props) {
    	super(props);
    }
  /*  getDefaultProps(){
    	return {
    		barColor: '#2f9842'
    	}
    }*/
   
    changeProgress(e){
    	let progressBar = this.refs.progressBar;
    	let progress = (e.clientX - progress.getBoundingClientRect().left)/(progressBar.clientWidth);
    	this.props.onProgressChange && this.props.onProgressChange(progress);
    }
    componentDidMount() {}
    componentWillUnmount() {}
    render(){
    	return (
    		<div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
                <div className="progress" style={{width:`${this.props.progress}%`,background:this.props.barColor}}>

                </div>
            </div>
    	)
    }
}
Progress.defaultProps = {
		barColor : '#2f9842'
}

export default Progress;