import './App.css';
import Divider from './components/Divider';
import Palette from './components/Palette';

const App = () => {
  return (
    <>
      <div className="heading">
        <h1>Color-Picker.me</h1>
      </div>

      <Divider />

      <div className="colorList">
        < Palette colorName={"Red"} colorHexa={"rgb(244, 67, 54)"} />
        < Palette colorName={"Pink"} colorHexa={"rgb(233, 30, 99)"} />
        < Palette colorName={"Purple"} colorHexa={"rgb(156, 39, 176)"} />
        < Palette colorName={"DeepPurple"} colorHexa={"rgb(103, 58, 183)"} />
        < Palette colorName={"Indigo"} colorHexa={"rgb(63, 81, 181)"} />

        < Palette colorName={"Blue"} colorHexa={"rgb(33, 150, 243)"} />
        < Palette colorName={"LightBlue"} colorHexa={"rgb(3, 169, 244)"} />
        < Palette colorName={"Cyan"} colorHexa={"rgb(0, 188, 212)"} />
        < Palette colorName={"Teal"} colorHexa={"rgb(0, 150, 136)"} />
        < Palette colorName={"Green"} colorHexa={"rgb(76, 175, 80)"} />

        < Palette colorName={"LightGreen"} colorHexa={"rgb(139, 195, 74)"} />
        < Palette colorName={"Lime"} colorHexa={"rgb(205, 220, 57)"} />
        < Palette colorName={"Yellow"} colorHexa={"rgb(255, 235, 59)"} />
        < Palette colorName={"Amber"} colorHexa={"rgb(255, 193, 7)"} />


        < Palette colorName={"DeepOrange"} colorHexa={" rgb(255, 87, 34)"} />

        < Palette colorName={"Orange"} colorHexa={"rgb(255, 87, 34)"} />
        < Palette colorName={"Brown"} colorHexa={"rgb(121, 85, 72)"} />
        < Palette colorName={"Grey"} colorHexa={"rgb(158, 158, 158)"} />
        < Palette colorName={"BlueGrey"} colorHexa={"#78909c"} />
      </div>

    </>
  );
}

export default App;
