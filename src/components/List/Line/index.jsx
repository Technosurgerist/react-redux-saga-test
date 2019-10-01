import * as React from "react";
import {Component} from "react";
// import {Link} from "react-router-dom";
// import {normalizeDate,smartDate} from "../../../utils/tools";
import * as styles from "../styles.less";
import {fixNumber} from "../../../utils/tools";

export class Line extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {item} = this.props;
		const itemDate = new Date(item.created_at);
		const formatter = new Intl.DateTimeFormat("ru");
		return (
			<div className={styles.line} key={item.id}>
				<div className={styles.title}><a href={item.html_url} target="_blank">{item.name}</a></div>
				<div className={styles.stars}>★ {item.stargazers_count}</div>
				{item.license && item.license.key && <div className={styles.midtext}>{item.license.key && item.license.name}</div>}
				<div className={styles.date}>{formatter.format(itemDate)}</div>
			</div>
		);
	}
}

export default Line;
