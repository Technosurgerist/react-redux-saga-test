import * as React from "react";
import {Component} from "react";
import {connect} from "react-redux";


import Line from "./Line";
import * as styles from "./styles.less";
import bgImg from "../../res/img/bg.jpg";

export class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {filter,items} = this.props;
		let filteredList = (items) ? items.filter((item)=> !filter || filter.licenses == 'All' || (filter.licenses == 'Not defined' && !item.license) || (item.license && item.license.key && (filter.licenses == item.license.key)) ) : [];
		filteredList = (filteredList) ? filteredList.filter((item)=> !filter.query || item.name.toLowerCase().includes(filter.query.toLowerCase())) : [];
		return (
			<div className={styles.wrapper} style={{backgroundImage:`url(${bgImg})`}}>
				{filteredList && filteredList.map((i)=><Line key={i.id} item={i} />)}
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		filter: state.filters && state.filters.active,
	};
}

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(List);
