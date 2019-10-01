import * as React from "react";
import * as styles from "../styles.less";

export default class FiltersBox extends React.Component {
	render() {
		return <div className={styles.wrapper}>{this.props.children}</div>
	}
}
