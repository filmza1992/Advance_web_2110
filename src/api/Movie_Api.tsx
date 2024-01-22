import Movie from "../interface/Movie";

export const getMovies = async () => {
  const movies: Movie[] = [
    {
      id: 0,
      title: "Avenger Endgames",
      poster: "src/assets/avengers_endgame.jpg",
      rating: 8.4,
      amountRating: 12098000,
      youtube_link:
        "https://www.youtube.com/embed/TcMBFSGVi1c?si=sPElaD6psPZu0SjW",
      videoAmount: 140,
      photoAmount: 240,
      detailMovie: ["2019", "PG-13", "3h 1m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Adventure",
        },
        {
          name: "Drama",
        },
      ],
      popularity: 225,
      detail:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      director: ["Anthony Russo", "Joe Russo"],
      writers: ["Christopher Markus", "Stephen McFeely", "Stan Lee"],
      star: ["Robert Downey Jr", "Chris Evans", "Mark Ruffalo"],
      userReviews: 9500,
      criticReviews: 538,
      metascore: 78,
    },
    {
      id: 1,
      title: "Avenger Infinity Wars",
      poster: "src/assets/avengers_infinity.jpg",
      rating: 8.4,
      amountRating: 12086543,
      youtube_link:
        "https://www.youtube.com/embed/QwievZ1Tx-8?si=YHnlm_VWodTihrvK",
      videoAmount: 140,
      photoAmount: 240,
      detailMovie: ["2018",
        "PG-13",
        "2h 29m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Adventure",
        },
        {
          name: "Sci-Fi",
        },
      ],
      popularity: 557,
      detail:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      director: ["Anthony Russo", "Joe Russo"],
      writers: ["Christopher Markus", "Stephen McFeely", "Stan Lee"],
      star: ["Robert Downey Jr", "Chris Hemsworth", "Mark Ruffalo"],
      userReviews: 4600,
      criticReviews: 524,
      metascore: 68,
    },
    {
      id: 2,
      title: "Blade Runner 2046",
      poster: "src/assets/blade_runner_2046.jpg",
      rating: 8.0,
      amountRating: 643928,
      youtube_link:
        "https://www.youtube.com/embed/gCcx85zbxz4?si=06mEzh1sKKNCMA9M",
      videoAmount: 22,
      photoAmount: 240,
      detailMovie: ["2017",
      "R",
      "2h 44m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Drama",
        },
        {
          name: "Mystery",
        },
      ],
      popularity: 200,
      detail:
        "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      director: ["Denis Villeneuve"],
      writers: ["Hampton Fancher", "Michael Green", "Philip K. Dick"],
      star: ["Harrison Ford", "Ryan Gosling", "Ana de Armas"],
      userReviews: 2500,
      criticReviews: 579,
      metascore: 81,
    },
    {
      id: 3,
      title: "Guardians of the Galaxy",
      poster: "src/assets/original_guardians.jpg",
      rating: 8.0,
      amountRating: 13000000,
      youtube_link:
        "https://www.youtube.com/embed/JqcncLPi9zw?si=L1IXLTcindt113Oj",
      videoAmount: 95,
      photoAmount: 240,
      detailMovie: ["2014",
      "PG-13",
      "2h 1m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Adventure",
        },
        {
          name: "Comedy",
        },
      ],
      popularity: 456,
      detail:
        "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      director: ["Denis Villeneuve"],
      writers: ["Hampton Fancher", "Michael Green", "Philip K. Dick"],
      star: ["Harrison Ford", "Ryan Gosling", "Ana de Armas"],
      userReviews: 2500,
      criticReviews: 578,
      metascore: 81,
    },
    {
      id: 4,
      title: "65",
      poster: "src/assets/original_theatrical.jpg",
      rating: 5.4,
      amountRating: 84520,
      youtube_link:
        "https://www.youtube.com/embed/bHXejJq5vr0?si=jLSep7MUrJSI5KIL",
      videoAmount: 7,
      photoAmount: 100,
      detailMovie: ["2018",
      "PG-13",
      "1h 33m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Adventure",
        },
        {
          name: "Drama",
        },
      ],
      popularity: 733,
      detail:
        "An astronaut crash lands on a mysterious planet only to discover he's not alone.",
      director: ["Scoott Beck", "Bryan Woods"],
      writers: ["Scoott Beck", "Bryan Woods"],
      star: ["Adam Driver", "Ariana Greenblatt", "Chole Coleman"],
      userReviews: 903,
      criticReviews: 173,
      metascore: 40,
    },
    {
      id: 5,
      title: "The Last of US",
      poster: "src/assets/the_last_of_us.jpg",
      rating: 8.8,
      amountRating: 488882,
      youtube_link:
        "https://www.youtube.com/embed/uLtkt8BonwM?si=x8mSF7Rpg3keHOjq",
      videoAmount: 21,
      photoAmount: 100,
      detailMovie: ["2023",
      "TV-MA",
      "50m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Adventure",
        },
        {
          name: "Drama",
        },
      ],
      popularity: 27,
      detail:
        "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      director: ["Neil Druckmann", "Craig Mazin"],
      writers: [],
      star: ["Pedro Pascal", "Bella RamseyAnna Torv"],
      userReviews: 1600,
      criticReviews: 102,
      metascore: 0,
    },
    {
      id: 6,
      title: "Black Panther I",
      poster: "src/assets/black_panther.jpg",
      rating: 7.3,
      amountRating: 827203,
      youtube_link:
        "https://www.youtube.com/embed/xjDjIWPwcPU?si=uYm6ljeA-1ybWv8V",
      videoAmount: 74,
      photoAmount: 100,
      detailMovie: ["2018",
      "PG-13",
      "2h 14m"],
      movieType: [
        {
          name: "Action",
        },
        {
          name: "Adventure",
        },
        {
          name: "Sci-Fi",
        },
      ],
      popularity: 814,
      detail:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      director: ["Ryan Coogler"],
      writers: ["Ryan Coogler", "Joe Robert ColeStan Lee"],
      star: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
      userReviews: 3400,
      criticReviews: 466,
      metascore: 88,
    },
    {
      id: 7,
      title: "Harry Potter and the Sorcerer's Stone",
      poster: "src/assets/harry_potter.jpg",
      rating: 7.6,
      amountRating: 844123,
      youtube_link:
        "https://www.youtube.com/embed/VyHV0BRtdxo?si=zEa26E6jGGKyRycf",
      videoAmount: 24,
      photoAmount: 100,
      detailMovie: ["2001",
      "PG",
      "2h 32m"],
      movieType: [
        {
          name: "Adventure",
        },
        {
          name: "Family",
        },
        {
          name: "Fantasy",
        },
      ],
      popularity: 733,
      detail:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      director: ["Chris Columbus"],
      writers: ["J.K. Rowling", "Steve Kloves"],
      star: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
      userReviews: 2014,
      criticReviews: 152,
      metascore: 65,
    },
  ];

  return movies;
};
