import React from 'react'
import './hello.less'

/*let Hello = React.createClass({
	render() {
		return (
			<div className="hello-component">
				Hello, React
			</div>
		);
	}
});
*/
class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return (
        	<div className = "hello-component">
            	Hello world, React and webpack 
            </div>
        );
    }

}

export default Hello;