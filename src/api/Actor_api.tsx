import Actor from "../interface/Actor";


export const getActors = async () => {
    const actors : Actor[] = [
        {
            id:"0",
            name:"Alexandra Daddario",
            age:37,
            birthDay:"March 16, 1986",
            img:"src/assets/actor/alexandra_daddario.jpg",
            link_video:"https://www.youtube.com/embed/2YUuoSGeY-U?si=dOvtR7CptURpxYhF",
            detail_type:[
                "Actress",
                "Producer",
                "Soundtrack",
            ],
            video_amount:80,
            photo_amount:100,
            amount_populality:40,
            amount_something:6,
            detail:"Alexandra Anna Daddario was born on March 16, 1986 in New York City, New York, to Christina, a lawyer, and Richard Daddario, a prosecutor. Her brother is actor Matthew Daddario, her sister is actor Catharine Daddario, and her grandfather was congressman Emilio Daddario (Emilio Q. Daddario), of Connecticut. She has Italian, Irish, Hungarian/Slovak ancestry. She wanted to be an actress when she was young. Her first job came at age 16, when she got the role of Laurie Lewis on All My Children (1970)."
        },
        {
            id:"1",
            name:"Emma watson",
            age:33,
            birthDay:"April 15, 1990",
            img:"src/assets/actor/emma_watson.jpg",
            detail_type:[
                "Actress",
                "Producer",
                "Soundtrack",
            ],
            link_video:"https://www.youtube.com/embed/Gw18ErP9jd0?si=ves3mhsvukbXDj5q",
            video_amount:93,
            photo_amount:100,
            amount_populality:500,
            amount_something:116,
            detail:"Emma Charlotte Duerre Watson was born in Paris, France, to British parents, Jacqueline Luesby and Chris Watson, both lawyers. She moved to Oxfordshire when she was five, where she attended the Dragon School. From the age of six, Emma knew that she wanted to be an actress and, for a number of years, she trained at the Oxford branch of Stagecoach Theatre Arts, a part-time theatre school where she studied singing, dancing and acting. By the age of ten."
        },
        {
            id:"2",
            name:"Johnny depp",
            age:60,
            birthDay:"June 9, 1963",
            img:"src/assets/actor/johny_depp.jpg",
            detail_type:[
                "Actor",
                "Producer",
                "Director",
            ],
            link_video:"https://www.youtube.com/embed/2kYKfGpL4hw?si=kWY0_7kxYneFyYTz",
            video_amount:100,
            photo_amount:100,
            amount_populality:500,
            amount_something:61,
            detail:"John Christopher Johnny Depp II was born on June 9, 1963 in Owensboro, Kentucky, to Betty Sue Palmer (née Wells), a waitress, and John Christopher Depp, a civil engineer. He was raised in Florida. He dropped out of school when he was 15, and fronted a series of music-garage bands, including one named 'The Kids'. When he married Lori A. Depp"
        },
        {
            id:"3",
            name:"Leonardo diCaprio",
            age:49,
            birthDay:" November 11, 1974",
            img:"src/assets/actor/leonado.jpg",
            detail_type:[
                "Producer",
                "Actor",
                "Writer",
            ],
            link_video:"https://www.youtube.com/embed/xpyrefzvTpI?si=IpKX1KvDhs4bK1FX",
            video_amount:100,
            photo_amount:100,
            amount_populality:49,
            amount_something:8,
            detail:"Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as Critters 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Romeo + Juliet (1996) and Titanic (1997)."
        },
        {
            id:"4",
            name:"Olsen twins",
            age:37,
            birthDay:"June 13, 1986",
            img:"src/assets/actor/oldsen.jpg",
            detail_type:[
                "Actress",
                "Producer",
                "Soundtrack",
            ],
            link_video:"https://www.youtube.com/embed/yXEDZI9Emiw?si=xj-Reuu4lorIiTd0",
            video_amount:100,
            photo_amount:100,
            amount_populality:500,
            amount_something:13,
            detail:"Elizabeth Chase Lizzie Olsen (born February 16, 1989) is an American actress. She is known for her roles in the films Silent House (2011), Liberal Arts (2012), Godzilla (2014), Avengers: Age of Ultron (2015), and Captain America: Civil War (2016). For her role in the critically-acclaimed Martha Marcy May Marlene (2011)."
        },
        {
            id:"5",
            name:"Tom cruise",
            age:61,
            birthDay:"July 3, 1962",
            img:"src/assets/actor/tom_cruse.jpg",
            detail_type:[
                "Actor",
                "Producer",
                "Director",
            ],
            link_video:"https://www.youtube.com/embed/avz06PDqDbM?si=0NEwJuZDvUMCIMhG",
            video_amount:100,
            photo_amount:100,
            amount_populality:68,
            amount_something:9,
            detail:"In 1976, if you had told fourteen-year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was born in 1962 in Syracuse."
        },
        {
            id:"6",
            name:"Will Smith",
            age:55,
            birthDay:"September 25, 1968",
            img:"src/assets/actor/will_smite.jpg",
            detail_type:[
                "Actress",
                "Producer",
                "Soundtrack",
            ],
            link_video:"https://www.youtube.com/embed/myjEoDypUD8?si=rSzgLmyUf0PEeCrO",
            video_amount:100,
            photo_amount:100,
            amount_populality:5000,
            amount_something:91,
            detail:"Willard Carroll Will Smith II (born September 25, 1968) is an American actor, comedian, producer, rapper, and songwriter. He has enjoyed success in television, film, and music. In April 2007, Newsweek called him the most powerful actor in Hollywood. Smith has been nominated for five Golden Globe Awards, two Academy Awards, and has won four Grammy Awards.In the late 1980."
        },

    ]
    return actors;
}



