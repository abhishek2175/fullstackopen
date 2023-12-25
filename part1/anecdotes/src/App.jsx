import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [mostVoted, setMostVoted] = useState(0)

    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const selectRandomAnecdote = () => {
        let totalAnecdotes = anecdotes.length
        let randomValue = getRandomInt(0, totalAnecdotes - 1)
        setSelected(randomValue)
    }

    const incrementVotes = () => {
        const copy = [...votes]
        copy[selected] = copy[selected] + 1
        if(copy[mostVoted] < copy[selected]) {
            setMostVoted(selected)
        }
        setVotes(copy)
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            {anecdotes[selected]}<br/><br/>
            <Button text="vote" handleClick={() => incrementVotes()}/>
            <Button text="next anecdote" handleClick={() => selectRandomAnecdote()}/>
            <h2>Anecdote with most votes</h2>
            {anecdotes[mostVoted]}
        </div>
    )
}

export default App