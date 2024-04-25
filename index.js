console.log("React",React);
console.log("React",ReactDOM);

const root=document.getElementById("root")

const heading1= React.createElement("h1",{class:"heading1"},"heading1");
const container1= React.createElement("div",{class:"container1",style:{backgroundColor:"red"}},heading1);


const heading2= React.createElement("h3",{class:"heading2"},"heading2");
const container2= React.createElement("div",{class:"container2",style:{backgroundColor:"yellow"}},heading2);

const rootElement= ReactDOM.createRoot(root);

rootElement.render([container1,container2]);