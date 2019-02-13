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
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(){
        // console.log("Flip coin ran!");
        // Listen.
        // Really... please LisTen.
        // Stop typing. Listen.
        // WE NEVER, EVER, EVER CHANGE/MUTATE STATE DIRECLTY.
        // that is react's job. Dont do it. YOu will kill your app
        // or another defveloper will kill you
        // React gave us a setter
        console.log(this)

        let coinSide = Math.round(Math.random()); //0,1
        this.setState({
            image: this.coin[coinSide]
        });
        // NEVER do this...
        // this.state.image = this.coin[coinSide];
    }

    // local class method
    // EVERY... REPEAT... EVERY class component, must have a render.
    render(){

        // ANY TIME state changes. render method runs

        // it is my job to return a single DOM element
        // wheter you like it or not render will run after the constructor
        // React events are camaelcase and attached to the element
        // you dont invoke them. You just pass them
        return(

            <div className="coin-Flip">
                <button onClick={this.flipCoin}>Flip!</button>
                <img src={this.state.image} />
            </div>
        )
    }
}