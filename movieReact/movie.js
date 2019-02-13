// NOT EVERYTHING HAS TO BE A CLASS
function Poster(props){
    return(
        <div className="col s4 m3">
            <img src={props.image} />
        </div>
    )
}

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
        
        // fetch is a replacement for $.getJSON/$.ajax/axios
        fetch(url)
        .then((response)=>{
          return response.json();
        })
        .then((myJson)=>{
            const results = myJson.results;
            console.log(results)
            this.setState({
                moviesToShow: results
            });
        });

        console.log("Checking... yes! It's mounted");

    }

    // What method do we HAVE to have?
    // REnder is special. react uses it, we dont
    render(){
        const imagePath = "http://image.tmdb.org/t/p/w300";
        let movieList = this.state.moviesToShow.map((movie)=>{
            const fullImagePath = imagePath + movie.poster_path;
            return(<Poster image={fullImagePath} />)
        })
        console.log(this.state.moviesToShow);
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {movieList}
                    </div>
                </div>
            </div>
        )
    }
}