import { Content, Header, Total } from "./components";

const App = () => {
    const course = 'Half Stack application development';

    const content = [
        {
            part: "Fundamentals of React",
            exercise: 10,
        },
        {
            part: "Using props to pass data",
            exercise: 7,
        },
        {
            part: "State of a component",
            exercise: 14,
        },
    ]

    return (
        <div>
            <Header course={course}/>
            <Content content={content}/>
            <Total content={content}/>
        </div>
    )
}

export default App