import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import { selectColors } from '../actions';
import { Component } from 'react';
import SideBar from './Portals/SideBar';

class Palette extends Component {

    state = {
        active: false
    }

    changeActiveStatus = () => {
        if (this.state.active) {

            this.props.selectColors(null);

            this.setState({
                active: false
            })
        }
        if (!this.state.active) {

            this.props.selectColors(this.props.colorName);
            this.setState({
                active: true
            })
        }
    }

    componentDidUpdate() {

        if (this.props.colorName !== this.props.currentColor && this.state.active) {
            this.setState({
                active: false
            })
        }

    }

    render() {

        return (
            <>
                <div onClick={this.changeActiveStatus} className={`Palette  ${this.props.colorName === this.props.currentColor ? "active" : "notActive"}`} style={{ backgroundColor: this.props.colorHexa }}>
                    <h3>{this.props.colorName}</h3>
                    <CheckIcon className={`${this.props.colorName === this.props.currentColor ? "activeTick" : "inactiveTick"}`} />
                </div>
                {
                    this.state.active ? <SideBar /> : ""
                }

            </>
        );
    }


}

function mapStateToProp(store) {
    return store;
}

export default connect(mapStateToProp, {
    selectColors
})(Palette)
