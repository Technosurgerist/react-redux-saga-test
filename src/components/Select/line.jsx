import * as React from "react";
import * as styles from "./styles.less";

export default class Line extends React.Component {
	render() {
		return <div className={styles.line} onClick={()=>this.props.itemHandler(this.props.name)}>{this.props.name}</div>
	}
}
