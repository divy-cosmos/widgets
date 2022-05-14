import { Component } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";
import "./App.css";

const items = [
  {
    title: "what is an accordion heading?",
    description: `The accordion header controls the state of the accordion panel. To mark this relationship, we can make use of the aria-controls attribute, which value is the id of the accordion panel (in this case, accordion-panel-1 ). <h3> <button id="accordion-header-1" aria-controls="accordion-panel-1">`,
  },
  {
    title: "what are the features of accordion?",
    description:
      "accordion, Portable musical instrument that uses a hand-pumped bellows and two keyboards to sound free reeds, small metal tongues that vibrate when air flows past them. The keyboards on either side of the bellows effectively resemble individual reed organs.",
  },
  {
    title: "what is the purpose of accordion?",
    description: `Accordions shorten pages and reduce scrolling, but they increase the interaction cost by requiring people to decide on topic headings. Share this article: An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them`,
  },
];

const options = [
  {
    label: "The color of Red",
    value: "red",
  },
  {
    label: "The color of Green",

    value: "green",
  },
  {
    label: "Shade of Blue",

    value: "blue",
  },
  {
    label: "Bright as Sun",

    value: "orange",
  },
  {
    label: "Mango",

    value: "rgba(205, 230, 91, 0.971)",
  },
];

// export default () => {
//   const [select, setSelect] = useState(options[1]);
//   const [showDropdown, setShowDropdown] = useState(true);
//   console.log("Rendered App");
//   console.log(`Event listener will be wired up manually to body in DOM if showdropdown state var is true.
//    Also, if we do not remove the body listener it will be wired up everytime we toggle`);

//   return (
//     <>
//       <div>
//         {showDropdown ? (
//           <Dropdown
//             options={options}
//             select={select}
//             handleSelectChange={setSelect}
//           />
//         ) : null}
//         <button
//           onClick={() => {
//             setShowDropdown(!showDropdown);
//             console.log("changing 'state' variable 'showDropdown'");
//           }}
//         >
//           Toggle Dropdown
//         </button>
//       </div>
//     </>
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = { selected: options[0] };
    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange(select) {
    this.setState({ selected: select });
  }
  render() {
    // function expression for rendering any of the component conditionally
    // const showComponent = (path, component) => {
    //   return path === window.location.pathname ? component : null;
    // };

    //individual functions to render component on the basis of route
    // function showAccordion() {
    //   if (window.location.pathname === "/") return <Accordion items={items} />;
    // }

    return (
      <div className="app">
        <Header />
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label={<h3>Select a Color </h3>}
            dummy={"Change color of the Text using above dropdown !"}
            selected={this.state.selected}
            handleSelectChange={this.onSelectChange}
            options={options}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    );
  }
}
export default App;
