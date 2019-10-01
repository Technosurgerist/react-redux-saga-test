import * as React from "react";
import * as styles from "./styles.less";
import Line from "./line";

export default class Select extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectOpen: false};
		this.selectHandler = this.selectHandler.bind(this);
		this.chooseHandler = this.chooseHandler.bind(this);
	}
	selectHandler(i){
		this.setState({ selectOpen: !this.state.selectOpen });
	}
	chooseHandler(selected){
		this.setState({ selectOpen: !this.state.selectOpen });
		this.props.setItemHander(selected);
	}
	render() {
		const {items, active} = this.props;
		return (
			<div>
				<div className={styles.wrapper} onClick={this.selectHandler}>{(active) ? active : 'Please choose'}</div>
				<div className={(this.state.selectOpen) ? styles.selectList_open : styles.selectList}>{items.map((i)=><Line key={`line-${i}`} itemHandler={this.chooseHandler} name={i} />)}</div>
			</div>
		);
	}
}
