import MovieType from "./Movie_Type";

interface Movie {
  id:number;
    title: string;
  rating: number;
  amountRating: number;
  poster: string;
  youtube_link : string;
  detailMovie:string[];
  videoAmount:number;
  photoAmount:number;
  movieType:MovieType[];
  popularity:number;
  detail:string;
  director:string[];
  writers:string[];
  star:string[];
  userReviews:number;
  criticReviews:number;
  metascore:number;
}
export default Movie;