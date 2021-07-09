import { cases } from "./Cases";
import { combineReducers } from "redux";

const colorPaletteLists__INIT = {
    [cases.Red]: [{ opacity: 50, hex: '#ffebee' }, { opacity: 100, hex: '#ffcdd2' }, { opacity: 200, hex: '#ef9a9a' }, { opacity: 300, hex: '#e57373' }, { opacity: 400, hex: '#ef5350' }, { opacity: 500, hex: '#f44336' }, { opacity: 600, hex: '#e53935' }, { opacity: 700, hex: '#d32f2f' }, { opacity: 800, hex: '#c62828' }, { opacity: 900, hex: '#b71c1c' }, { opacity: 'A100', hex: '#ff8a80' }, { opacity: 'A200', hex: '#ff5252' }, { opacity: 'A400', hex: '#ff1744' }, { opacity: 'A700', hex: '#d50000' }],

    [cases.Pink]: [{ opacity: 50, hex: '#fce4ec' }, { opacity: 100, hex: '#f8bbd0' }, { opacity: 200, hex: '#f48fb1' }, { opacity: 300, hex: '#f06292' }, { opacity: 400, hex: '#ec407a' }, { opacity: 500, hex: '#e91e63' }, { opacity: 600, hex: '#d81b60' }],

    [cases.Purple]: [{ opacity: 50, hex: '#f3e5f5' }, { opacity: 100, hex: '#e1bee7' }, { opacity: 200, hex: '#ce93d8' }, { opacity: 300, hex: '#ba68c8' }, { opacity: 400, hex: '#ab47bc' }, { opacity: 500, hex: '#9c27b0' }, { opacity: 600, hex: '#8e24aa' }],

    [cases.DeepPurple]: [{ opacity: 50, hex: '#ede7f6' }, { opacity: 100, hex: '#d1c4e9' }, { opacity: 200, hex: '#b39ddb' }, { opacity: 300, hex: '#9575cd' }, { opacity: 400, hex: '#7e57c2' }, { opacity: 500, hex: '#673ab7' }, { opacity: 600, hex: '#5e35b1' }],

    [cases.Indigo]: [{ opacity: 50, hex: '#e8eaf6' }, { opacity: 100, hex: '#c5cae9' }, { opacity: 200, hex: '#9fa8da' }, { opacity: 300, hex: '#7986cb' }, { opacity: 400, hex: '#5c6bc0' }, { opacity: 500, hex: '#3f51b5' }, { opacity: 600, hex: '#3949ab' }],

    [cases.Blue]: [{ opacity: 50, hex: '#e3f2fd' }, { opacity: 100, hex: '#bbdefb' }, { opacity: 200, hex: '#90caf9' }, { opacity: 300, hex: '#64b5f6' }, { opacity: 400, hex: '#42a5f5' }, { opacity: 500, hex: '#2196f3' }, { opacity: 600, hex: '#1e88e5' }],

    [cases.LightBlue]: [{ opacity: 50, hex: '#e1f5fe' }, { opacity: 100, hex: '#b3e5fc' }, { opacity: 200, hex: '#81d4fa' }, { opacity: 300, hex: '#4fc3f7' }, { opacity: 400, hex: '#29b6f6' }, { opacity: 500, hex: '#03a9f4' }, { opacity: 600, hex: '#039be5' }],

    [cases.Cyan]: [{ opacity: 50, hex: '#e0f7fa' }, { opacity: 100, hex: '#b2ebf2' }, { opacity: 200, hex: '#80deea' }, { opacity: 300, hex: '#4dd0e1' }, { opacity: 400, hex: '#26c6da' }, { opacity: 500, hex: '#00bcd4' }, { opacity: 600, hex: '#00acc1' }],

    [cases.Teal]: [{ opacity: 50, hex: '#e0f2f1' }, { opacity: 100, hex: '#b2dfdb' }, { opacity: 200, hex: '#80cbc4' }, { opacity: 300, hex: '#4db6ac' }, { opacity: 400, hex: '#26a69a' }, { opacity: 500, hex: '#009688' }, { opacity: 600, hex: '#00897b' }],

    [cases.Green]: [{ opacity: 50, hex: '#e8f5e9' }, { opacity: 100, hex: '#c8e6c9' }, { opacity: 200, hex: '#a5d6a7' }, { opacity: 300, hex: '#81c784' }, { opacity: 400, hex: '#66bb6a' }, { opacity: 500, hex: '#4caf50' }, { opacity: 600, hex: '#43a047' }],

    [cases.LightGreen]: [{ opacity: 50, hex: '#f1f8e9' }, { opacity: 100, hex: '#dcedc8' }, { opacity: 200, hex: '#c5e1a5' }, { opacity: 300, hex: '#aed581' }, { opacity: 400, hex: '#9ccc65' }, { opacity: 500, hex: '#8bc34a' }, { opacity: 600, hex: '#7cb342' }],

    [cases.Lime]: [{ opacity: 50, hex: '#f9fbe7' }, { opacity: 100, hex: '#f0f4c3' }, { opacity: 200, hex: '#e6ee9c' }, { opacity: 300, hex: '#dce775' }, { opacity: 400, hex: '#d4e157' }, { opacity: 500, hex: '#cddc39' }, { opacity: 600, hex: '#c0ca33' }],

    [cases.Yellow]: [{ opacity: 50, hex: '#fffde7' }, { opacity: 100, hex: '#fff9c4' }, { opacity: 200, hex: '#fff59d' }, { opacity: 300, hex: '#fff176' }, { opacity: 400, hex: '#ffee58' }, { opacity: 500, hex: '#ffeb3b' }, { opacity: 600, hex: '#fdd835' }],

    [cases.Amber]: [{ opacity: 50, hex: '#fff8e1' }, { opacity: 100, hex: '#ffecb3' }, { opacity: 200, hex: '#ffe082' }, { opacity: 300, hex: '#ffd54f' }, { opacity: 400, hex: '#ffca28' }, { opacity: 500, hex: '#ffc107' }, { opacity: 600, hex: '#ffb300' }],

    [cases.DeepOrange]: [{ opacity: 50, hex: '#fbe9e7' }, { opacity: 100, hex: '#ffccbc' }, { opacity: 200, hex: '#ffab91' }, { opacity: 300, hex: '#ff8a65' }, { opacity: 400, hex: '#ff7043' }, { opacity: 500, hex: '#ff5722' }, { opacity: 600, hex: '#f4511e' }],

    [cases.Orange]: [{ opacity: 50, hex: '#fff3e0' }, { opacity: 100, hex: '#ffe0b2' }, { opacity: 200, hex: '#ffcc80' }, { opacity: 300, hex: '#ffb74d' }, { opacity: 400, hex: '#ffa726' }, { opacity: 500, hex: '#ff9800' }, { opacity: 600, hex: '#fb8c00' }],

    [cases.Brown]: [{ opacity: 50, hex: '#efebe9' }, { opacity: 100, hex: '#d7ccc8' }, { opacity: 200, hex: '#bcaaa4' }, { opacity: 300, hex: '#a1887f' }, { opacity: 400, hex: '#8d6e63' }, { opacity: 500, hex: '#795548' }, { opacity: 600, hex: '#6d4c41' }],

    [cases.Grey]: [{ opacity: 50, hex: '#fafafa' }, { opacity: 100, hex: '#f5f5f5' }, { opacity: 200, hex: '#eeeeee' }, { opacity: 300, hex: '#e0e0e0' }, { opacity: 400, hex: '#bdbdbd' }, { opacity: 500, hex: '#9e9e9e' }, { opacity: 600, hex: '#757575' }],

    [cases.BlueGrey]: [{ opacity: 50, hex: '#eceff1' }, { opacity: 100, hex: '#cfd8dc' }, { opacity: 200, hex: '#b0bec5' }, { opacity: 300, hex: '#90a4ae' }, { opacity: 400, hex: '#78909c' }, { opacity: 500, hex: '#607d8b' }, { opacity: 600, hex: '#546e7a' }],
}

const ALL_PALETTES = (state = colorPaletteLists__INIT) => {

    return colorPaletteLists__INIT;

}

const SELECT_DEPARTMENT = (state = null, action) => {

    switch (action.type) {

        case cases.Red:
            return cases.Red

        case cases.Pink:
            return cases.Pink

        case cases.Purple:
            return cases.Purple

        case cases.DeepPurple:
            return cases.DeepPurple;

        case cases.Indigo:
            return cases.Indigo;

        case cases.Blue:
            return cases.Blue;

        case cases.LightBlue:
            return cases.LightBlue;

        case cases.Cyan:
            return cases.Cyan;

        case cases.Teal:
            return cases.Teal;

        case cases.Green:
            return cases.Green;

        case cases.LightGreen:
            return cases.LightGreen;


        case cases.Lime:
            return cases.Lime;

        case cases.Yellow:
            return cases.Yellow;

        case cases.Amber:
            return cases.Amber;

        case cases.DeepOrange:
            return cases.DeepOrange;


        case cases.Orange:
            return cases.Orange;

        case cases.Brown:
            return cases.Brown;

        case cases.Grey:
            return cases.Grey;

        case cases.BlueGrey:
            return cases.BlueGrey

        default:
            return null;

    }

}

const combinedDepartment = combineReducers({
    currentColor: SELECT_DEPARTMENT,
    allColors: ALL_PALETTES
})

export default combinedDepartment;