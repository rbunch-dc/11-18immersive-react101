class CoinFlip extends React.Component{
    // the first thing we do in ANY class...
    constructor(props){
        // this is a child class. It's a child of React.Component
        // in order to get the cool stuff that is React.Component,...
        super(props)
        // REact doesn't care about heads or tails.
        // like, at all
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // State is special. REact cares about state. A lot
        this.state = {
            image: this.coin[0]
        }
    }

    // local class method
    // EVERY... REPEAT... EVERY class component, must have a render.
    render(){
        // it is my job to return a single DOM element
        // wheter you like it or not render will run after the constructor
        return(
            <div className="coin-Flip">
                <img src={this.state.image} />
            </div>
        )
    }
}