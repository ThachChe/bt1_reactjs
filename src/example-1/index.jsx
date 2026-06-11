import Header from "./header"; // Component 1
import Content from "./content"; // Component 2
import Nav from "./nav"; // Component 3
import Footer from "./footer"; // Component 4

// Component chính
function Example1() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Example1;
