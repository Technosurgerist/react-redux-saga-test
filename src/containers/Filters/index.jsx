import * as React from "react";
import {Component,Fragment} from "react";
import {connect} from "react-redux";

import {getRepos} from "../../modules/repos/actions";
import {setActiveFilter} from "../../modules/filters/actions";
import FiltersBox from "../../components/Filters/Box";
import Licenses from "../../components/Filters/Licenses";
import FilterByName from "../../components/Filters/ByName";
// import pageBgImg from "../../res/img/bg.jpg";


export class Filters extends Component {
	constructor(props) {
		super(props);
		this.setActiveFilterHandler = this.setActiveFilterHandler.bind(this);
	}
	setActiveFilterHandler(type,value){
		this.props.setActiveFilter({
			...this.props.active,
			...{[type]:value}
		})
	}
	render() {
		const {active,filters} = this.props;
		return <FiltersBox>
				{filters && <Licenses filters={filters} active={active.licenses} setItemHander={(value)=>this.setActiveFilterHandler('licenses',value)} />}
				{filters && <FilterByName active={active.query} setItemHander={(value)=>this.setActiveFilterHandler('query',value)} />}
			</FiltersBox>;
	}
}

function mapStateToProps(state) {
	return {
		// repos: state.repos && state.repos.list && state.repos.list.items,
		filters: state.filters && state.filters.list,
		active: state.filters && state.filters.active,
	};
}

const mapDispatchToProps = {
	getRepos,
	setActiveFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
