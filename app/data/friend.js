//create an array of friends. Each friend is an object within the array. inside the frind object contains a name attribute, the photo url as well as an array of scores
var friends= [
    {
        name: "Chadwick Panther",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bet.com%2Fstyle%2Fbeauty%2F2018%2F03%2F06%2Fsee-how-chadwick-boseman-takes-10-years-off-his-face%2F_jcr_content%2Fbodycopycontainer%2Fembedded_image%2Fimage.custom1200x1800.dimg%2F__1520366255189__1520362441865%2F030618-style-chadwick-2.jpg&imgrefurl=https%3A%2F%2Fwww.bet.com%2Fstyle%2Fbeauty%2F2018%2F03%2F06%2Fsee-how-chadwick-boseman-takes-10-years-off-his-face.html&docid=Ym_riUj2APDA4M&tbnid=boGcI6vsV9APnM%3A&vet=10ahUKEwiEjIrp7ujaAhUk74MKHdX0As8QMwg0KAEwAQ..i&w=1200&h=1800&bih=693&biw=601&q=chadwick%20boseman&ved=0ahUKEwiEjIrp7ujaAhUk74MKHdX0As8QMwg0KAEwAQ&iact=mrc&uact=8",
        scores: [
            "5",
            "4",
            "3",
            "2",
            "1",
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
       
        name: "Robert Man",
        photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.californiamuseum.org%2Fsites%2Fmain%2Ffiles%2Fimagecache%2Flightbox%2Fmain-images%2Frobertdowneyjr_cahalloffameinductee.png&imgrefurl=http%3A%2F%2Fwww.californiamuseum.org%2Finductee%2Frobert-downey-jr&docid=cS8k6ZCzc9K3pM&tbnid=D0N3PGcDMYwv8M%3A&vet=10ahUKEwiN8amd7-jaAhXMx4MKHQ9nC0cQMwg2KAYwBg..i&w=803&h=1200&bih=693&biw=601&q=robert%20downey%20jr&ved=0ahUKEwiN8amd7-jaAhXMx4MKHQ9nC0cQMwg2KAYwBg&iact=mrc&uact=8",
        scores: [
            "4",
            "4",
            "4",
            "2",
            "4",
            "1",
            "4",
            "3",
            "4",
            "5" 
        ]
    },
    {
        name: "Mark Hulk",
        photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcommunity.digitalmediaacademy.org%2Fwp-content%2Fuploads%2F2012%2F05%2FMark-Ruffalo-Hulk.jpg&imgrefurl=http%3A%2F%2Fcommunity.digitalmediaacademy.org%2Ftag%2Fwho-played-the-hulk&docid=0gYI85jLlrvVhM&tbnid=VBNvN29HJ7xy3M%3A&vet=10ahUKEwiHs-Sy7-jaAhVj2oMKHbl1DGoQMwg1KAAwAA..i&w=432&h=288&bih=693&biw=601&q=who%20played%20incredible%20hulk&ved=0ahUKEwiHs-Sy7-jaAhVj2oMKHbl1DGoQMwg1KAAwAA&iact=mrc&uact=8",
        scores: [
            "3",
            "4",
            "3",
            "1",
            "2",
            "2",
            "2",
            "3",
            "4",
            "5"
    ]
    },
    {
        name: "Chris Thor",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa4%2F66%2Fe2%2Fa466e20db0c91142f8a9db5beb0fc85e.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F571605377677260480%2F&docid=QcuDMEysU_rcrM&tbnid=IN1X9MRHlXAnHM%3A&vet=10ahUKEwj7m-3I7-jaAhWI2YMKHRVfCKUQMwg4KAAwAA..i&w=433&h=650&bih=693&biw=601&q=who%20plays%20thor&ved=0ahUKEwj7m-3I7-jaAhWI2YMKHRVfCKUQMwg4KAAwAA&iact=mrc&uact=8",
        scores: [
            "5",
            "5",
            "5",
            "4",
            "2",
            "5",
            "1",
            "4",
            "3",
            "4"
    ]
    },
    {
        name: "Natasha Widow",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpressreleasejet.com%2Fuploads%2Fnewsreleases%2F2926dcb2b212841996c0be33d634a7b8-natasha-romanova-plays-breakout-lead-role-in-south-by-southwest-film-festival-grand-jury-award-winner-most-beautiful-island.jpg&imgrefurl=https%3A%2F%2Fpressreleasejet.com%2Fnews%2Fnatasha-romanova-plays-breakout-lead-role-in-south-by-southwest-film-festival-grand-jury-award-winner-most-beautiful-island%2F1760673&docid=Piv354RlGjtWkM&tbnid=B74QrIKmSTbdgM%3A&vet=10ahUKEwir243y7-jaAhVhyoMKHd4XCgsQMwhfKAcwBw..i&w=853&h=1280&bih=693&biw=601&q=natasha%20romanova&ved=0ahUKEwir243y7-jaAhVhyoMKHd4XCgsQMwhfKAcwBw&iact=mrc&uact=8",
        scores: [
            "3",
            "4",
            "2",
            "2",
            "5",
            "1",
            "2",
            "5",
            "2",
            "2"
    ]
    },
    {
        name: "Halle Storm",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTE1ODA0OTcxODYxNjQwNzE3%2Fhalle-berry-9542339-1-402.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fpeople%2Fhalle-berry-9542339&docid=Ka5udwd0IOZhSM&tbnid=XucFHr0tpChD_M%3A&vet=10ahUKEwjE6MGJ8OjaAhXl6YMKHQwkAXAQMwg1KAMwAw..i&w=1200&h=1200&bih=693&biw=601&q=halle%20berry&ved=0ahUKEwjE6MGJ8OjaAhXl6YMKHQwkAXAQMwg1KAMwAw&iact=mrc&uact=8",
        scores: [
            "1",
            "4",
            "3",
            "2",
            "4",
            "3",
            "2",
            "3",
            "4",
            "1"
    ]
    },
    {
        name: "Gal Widow",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fia.media-imdb.com%2Fimages%2FM%2FMV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM%40._V1_UY317_CR51%2C0%2C214%2C317_AL_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm2933757%2F&docid=9zHuLoLj945tcM&tbnid=oYDfzerk5iRzjM%3A&vet=10ahUKEwiapJip8OjaAhWM14MKHY6kDWIQMwgwKAAwAA..i&w=214&h=317&bih=693&biw=601&q=Gal%20Gadot&ved=0ahUKEwiapJip8OjaAhWM14MKHY6kDWIQMwgwKAAwAA&iact=mrc&uact=8",
        scores: [
            "2",
            "4",
            "5",
            "2",
            "1",
            "3",
            "2",
            "3",
            "4",
            "3"
    ]
    },
    {
        name: "Thandi Gamora",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fstyles%2Farticle_small%2Fpublic%2Fthumbnails%2Fimage%2F2016%2F05%2F23%2F16%2FThandie-Newton.jpg&imgrefurl=https%3A%2F%2Fwww.independent.co.uk%2Fnews%2Fpeople%2Fthandie-newton-groped-by-co-star-a7163781.html&docid=7uMOqsz2J8sKdM&tbnid=dhbGLfvJKNJiIM%3A&vet=10ahUKEwiZzP3D8OjaAhWb3oMKHbCKCdUQMwg4KAcwBw..i&w=620&h=413&bih=693&biw=601&q=thandie%20newton%20&ved=0ahUKEwiZzP3D8OjaAhWb3oMKHbCKCdUQMwg4KAcwBw&iact=mrc&uact=8",
        scores: [
            "4",
            "4",
            "3",
            "3",
            "1",
            "3",
            "2",
            "3",
            "4",
            "1"
    ]
    },
    {
        name: "Anthony Falcon",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fia.media-imdb.com%2Fimages%2FM%2FMV5BMTk3NTM1MjE2M15BMl5BanBnXkFtZTcwNzc5OTI2Mg%40%40._V1_UY317_CR17%2C0%2C214%2C317_AL_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm1107001%2F&docid=1eJzVsUfuhrYsM&tbnid=cnBQkqakgFEFFM%3A&vet=10ahUKEwim58uH8ejaAhUn7oMKHQhiDmUQMwgxKAAwAA..i&w=214&h=317&hl=en&bih=693&biw=601&q=anthony%20mackie&ved=0ahUKEwim58uH8ejaAhUn7oMKHQhiDmUQMwgxKAAwAA&iact=mrc&uact=8",
        scores: [
            "3",
            "4",
            "3",
            "3",
            "1",
            "4",
            "2",
            "3",
            "4",
            "5"
    ]
    }
];

