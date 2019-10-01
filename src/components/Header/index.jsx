import * as React from "react";
import * as styles from "./styles.less";
import Filters from "../../containers/Filters";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {filterTab: false};
		this.filtersBarHandler = this.filtersBarHandler.bind(this);
	}
	filtersBarHandler(e){
		this.setState({ filterTab: !this.state.filterTab });
	}
	render() {
		return <div className={styles.header}>
			<div className={styles.title}>JS Most Popular Repos</div>
			<div className={(this.state.filterTab) ? styles.filter_active : styles.filter} onClick={this.filtersBarHandler}></div>
			{this.state.filterTab && <Filters />}
		</div>
	}
}
