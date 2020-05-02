# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a UI library created by facebook to allow developers to quickly create complex web apps using a 'component' architecture. This allows for complex applications to be built with fewer lines of code, and less repetitive code.

1. Describe component state.

Component state is a way to save what is currently happenning usually this is an event. By saving state we have a way to control what happens in the application.

1. Describe props.

props are a way to pass data down from different components. For example, lets say we had a component with data and we had another component that needed to display that data. As long as the component with data is the parent component we can retrieve the props from the parent component and display it in the child component.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

side effects are something that happens as a result of an event. For example when we fetch data from an API and the page might reload, to prevent this we use a React Hook called useEffect() and add a dependancy array to it. This prevents the page from reloading everytime the API is called.

Another example is when you click a button and the button changes the state of a component.

to sync effects in a React component to changes of certain state or props you would use the useState() hook.
