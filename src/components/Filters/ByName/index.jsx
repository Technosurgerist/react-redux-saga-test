import * as React from "react";
import * as styles from "../styles.less";
import Input from "../../Input";

export default class FilterByName extends React.Component {
	render() {
		const {active,filters,setItemHander} = this.props;
		return (
			<div className={styles.licenses}>
				<div>Filter by name:</div>
				<Input setItemHander={setItemHander} filters={filters} active={active} />
			</div>
		);
	}
}
