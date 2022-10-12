import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
  return (
    <div className="accordion-container">
      <h1>Questions & Answer</h1>
      <Accordion className="w-50 mx-auto accordion-content" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the purpose of React Router?
          </Accordion.Header>

          <Accordion.Body>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. <br /> <br />
            <strong> Need of React Router:</strong> React Router plays an
            important role to display multiple views in a single page
            application. Without React Router, it is not possible to display
            multiple views in React applications. Most of the social media
            websites like Facebook, Instagram uses React Router for rendering
            multiple views. <br /> <br />
            Dynamic routing takes place as the app is rendering on our machine,
            unlike the old routing architecture where the routing is handled in
            a configuration outside of a running app. React router implements a
            component-based approach to routing. It provides different routing
            components according to the needs of the application and platform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does Context API works?</Accordion.Header>
          <Accordion.Body>
            <h5>What is Context API</h5>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. <br /> <br />
            <br />
            <h5>React context API: How it works?</h5>
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Briefly describe react useRef() hook.
          </Accordion.Header>
          <Accordion.Body>
            The useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component. <br />
            <br />
            The main use case for the useRef hook is to access a DOM child
            directly. I'll show exactly how to do that in another section.
            Although accessing the DOM is the main use case, it does't mean it's
            the only one! useRef can also be very useful to hold a mutable value
            across different renders of your component.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
