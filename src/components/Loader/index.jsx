import * as React from "react";
import {Component} from "react";
import {connect} from "react-redux";

import * as styles from "./styles.less";
import bgImg from "../../res/img/bg.jpg";

export default class Loader extends Component {
	render() {
		return (
			<div className={styles.wrapper} style={{backgroundImage:`url(${bgImg})`}}>
				<div className={styles.loader}><div></div><div></div><div></div><div></div></div>
			</div>

		);
	}
}
