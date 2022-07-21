$(document).ready(function () {
    $.getJSON("http://localhost:3000/fetchsongs/table", function (data) {
        if (data.status) {
            var htm = ''

            data.songs.map((item) => {

                htm += "<tr><td><img src='/images/" + item.artwork + "' width='50px' height='50px'></td>"
                htm += "<td>" + item.songname + "</td><td>" + item.dateofrelease + "</td><td>" + item.art + "</td><td>*****</td></tr>"
            })
            $('#result').html(htm)
        }
    })

    $.getJSON("http://localhost:3000/fetchsongs/table1", function (data) {
        if (data.status) {
            var htm = ''
            data.songs.map((item) => {
                htm += "<tr><td>" + item.name + "</td>"
                htm += "<td>" + item.dob + "</td><td>" + item.songs + "</td></tr>"
            })
            $('#result1').html(htm)
        }
    })

})
