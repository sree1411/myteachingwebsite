
const ListOfCourseItems = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href="#list-item-1">HTML5</a>
            <a className="list-group-item list-group-item-action" href="#list-item-2">CSS3</a>
            <a className="list-group-item list-group-item-action" href="#list-item-3">Java Script</a>
            <a className="list-group-item list-group-item-action" href="#list-item-4">React Js</a>
            <a className="list-group-item list-group-item-action" href="#list-item-5">Redux</a>
            <a className="list-group-item list-group-item-action" href="#list-item-6">Bootstrap</a>
          </div>
        </div>
        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={4}
            style={{ height: '260px', overflowY: 'scroll' }} // Ensuring the div is scrollable
          >
            <h4 id="list-item-1">HTML5</h4>
            <p>
              HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it! Many chapters in this Page end with an exercise where you can check you level of knowledge.
            </p>
            <h4 id="list-item-2">CSS3</h4>
            <p>
              CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced. Many chapters in this Page end with an exercise where you can check you level of knowledge.
            </p>
            <h4 id="list-item-3">JavaScript</h4>
            <p>
              JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.
            </p>
            <h4 id="list-item-4">React Js</h4>
            <p>
              React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.
            </p>
            <h4 id="list-item-5">Redux- ReduxTool-Kit</h4>
            <p>
              React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.
            </p>
            <h4 id="list-item-5">Bootstrap</h4>
            <p>
              React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOfCourseItems;
