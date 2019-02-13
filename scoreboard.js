function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

function Counter(props){
    return(
        <div className="counter">
            <button className="minus waves-effect waves-light btn">-</button>
            <div className="player-score">0</div>
            <button className="plus waves-effect waves-light btn">+</button>
        </div>        
    )    
}

function Player(props){
    const name = props.name;
    return(
        <div className="player">
            <div className="player-name">{name}</div>
            <Counter />
        </div>
    )
}


// Application is UpperCase... which means it's a 
// Component!!!
// ALL components, without exception, must return
// a single DOM Element. 
function Application(props){
    console.log(props)
    return (
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header title={props.title} />
                    <div className="players">
                        <Player name="Micahel" />
                        <Player name="Jim" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// ReactDOM.render puts React stuff in the DOM
// It takes 2 args:
// 1. What.
// 2. Where.
ReactDOM.render(
    <Application title="Ping Pong Tourney" />,
    document.getElementById('root')
);