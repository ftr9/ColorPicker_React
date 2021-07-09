import reactDom from "react-dom"
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { selectColors } from "../../actions";
import Divider from "../Divider";






const SideBar = (props) => {

    const { allColors, currentColor } = props;

    const hideSideBar = () => {
        props.selectColors(null);
    }

    const copyToClipBoard = (e) => {
        const value = e.target.value;
        e.target.select();
        document.execCommand('copy');
        e.target.value = "Copied";
        setTimeout(() => {
            e.target.value = value;
        }, 800);
    }

    const return_AllCurrentColors = () => {

        return allColors[currentColor].map(el => <input key={el.hex} value={el.hex} onChange={() => { }} onClick={copyToClipBoard} style={{ backgroundColor: `${el.hex}` }}></input>);

    }

    if (props.currentColor) {
        return (
            reactDom.createPortal(
                <div className="sideBar">
                    <div onClick={hideSideBar}>
                        <CloseIcon />
                    </div>

                    <h4>Current Color</h4>

                    <h1 style={{ color: `${allColors[currentColor][6].hex}` }}>{currentColor}</h1>

                    <p>Lists</p>
                    <Divider />

                    {
                        return_AllCurrentColors()
                    }




                </div>,
                document.querySelector("#sideBar")
            )
        );
    }


}

function mapStateToProp(state) {
    return state;
}

export default connect(mapStateToProp, {
    selectColors
})(SideBar)
