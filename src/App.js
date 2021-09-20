import "./styles.css";

export default function App() {
  //below i create a function and allot it to
  //the required feild
  const udemy = {
    backgroundColor: "#2596be",
    color: "white",
    margin: "10px",
    padding: "20px",
    cursor: "pointer"
  };
  return (
    <div className="App">
      <h1
        style={udemy}
        // inline styling in React using Style
        // style={{
        //   backgroundColor: "#2596be",
        //   color: "white",
        //   margin: "10px",
        //   padding: "20px",
        //   cursor: "pointer"
        // }}
      >
        Udemy React Practice
      </h1>
      <hr />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
