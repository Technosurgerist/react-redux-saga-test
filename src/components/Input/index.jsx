import * as React from "react";
import * as styles from "./styles.less";

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: ''};
		this.typeHandler = this.typeHandler.bind(this);
	}
	typeHandler(e){
		this.setState({ value: e.target.value });
		this.props.setItemHander(e.target.value);
	}
	render() {
		const {filters, active} = this.props;
		return (
			<div className={styles.wrapper}>
				<input type="text" className={styles.wrapper} onChange={this.typeHandler} value={this.state.value} />
			</div>
		);
	}
}
