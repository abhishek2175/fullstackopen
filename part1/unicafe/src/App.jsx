import { useState } from 'react'

const Header = () => {
        return (
            <h2>give feedback</h2>
        )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (stats) => {
    //console.log("Statistics component called")
    let good = stats.statistics.good
    let neutral = stats.statistics.neutral
    let bad = stats.statistics.bad
    let total = good + bad + neutral
    let average = good - bad
    let positivePercentageFeedback = (good/total)*100
    if ( total > 0) {
        return (
            <>
                <h2>Statistics</h2>
                <table>
                <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={total}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positivePercentageFeedback" value={positivePercentageFeedback.toString().concat(" %")}/>
                </tbody>
                </table>

            </>
        )
    } else {
        return (
            <p>No feedback given</p>
        )
    }

}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const stats = {
        good,
        neutral,
        bad
    }

    return (
        <div>
            <Header/>
            <Button handleClick={() => setGood(good + 1)} text="good"/>
            <Button handleClick={() => setNeutral(neutral + 1)} text="netural"/>
            <Button handleClick={() => setBad(bad + 1)} text="bad"/>
            <Statistics statistics={stats}/>
        </div>
    )
}

export default App