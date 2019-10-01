import * as React from "react";
import {Component,Fragment} from "react";
import {connect} from "react-redux";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import List from "../../components/List";
import Loader from "../../components/Loader";

import {getRepos} from "../../modules/repos/actions";

export class Repositories extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let d = new Date();
		d = new Date(d.setMonth(d.getMonth()-1));
		this.props.getRepos({
			'query':'',
			'options':{
				'language':'javascript',
				'created':  d.toISOString().substr(0,10)+'..*',
			},
			'sort':'stars',
		});
	}
	render() {
		const {fetching,repos} = this.props;
		return <Fragment>
				<Header filterHandler={this.filterHandler}/>
				{!fetching && repos && <List items={repos}/>}
				{fetching && <Loader />}
				<Footer />
			</Fragment>;
	}
}

function mapStateToProps(state) {
	return {
		repos: state.repos && state.repos.list && state.repos.list.items,
		fetching: state.repos && state.repos.fetching,
	};
}

const mapDispatchToProps = {
	getRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
