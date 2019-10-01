import * as React from "react";
import * as styles from "../styles.less";
import Select from "../../Select";

export default class Licenses extends React.Component {
	render() {
		const {active,filters,setItemHander} = this.props;
		return (
			<div className={styles.licenses}>
				<div>Licenses:</div>
				<Select setItemHander={setItemHander} items={filters} active={active} />
			</div>
		);
	}
}
