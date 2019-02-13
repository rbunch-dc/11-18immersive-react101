function Header(props){
    return(
        <div className="header">
            <h1>Ping Pong Championship</h1>
        </div>
    )
}


// Application is UpperCase... which means it's a 
// Component!!!
// ALL components, without exception, must return
// a single DOM Element. 
function Application(){
    return (
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header />
                    <div className="players">
                        <div className="player">
                            <div className="player-name">Michael</div>
                            <div className="counter">
                                <button className="minus waves-effect waves-light btn">-</button>
                                <div className="player-score">0</div>
                                <button className="plus waves-effect waves-light btn">+</button>
                            </div>
                        </div>

                        <div className="player">
                            <div className="player-name">Jim</div>
                            <div className="counter">
                                <button className="minus waves-effect waves-light btn">-</button>
                                <div className="player-score">0</div>
                                <button className="plus waves-effect waves-light btn">+</button>
                            </div>
                        </div>


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
    <Application />,
    document.getElementById('root')
);