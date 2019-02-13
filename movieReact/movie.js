class App extends React.Component{
    constructor(){
        super();
        this.state = {
            moviesToShow: []
        }
    }

    // componentDidMount is special. react calls it. we dont
    componentDidMount(){
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log((myJson));
        });

        console.log("Checking... yes! It's mounted");
        this.setState({
            moviesToShow: [1]
        })
    }

    // What method do we HAVE to have?
    // REnder is special. react uses it, we dont
    render(){
        console.log("Rendering...");
        return(
            <h1>Sanity Check</h1>
        )
    }
}