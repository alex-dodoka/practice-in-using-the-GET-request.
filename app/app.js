(function () {
    let url = "http://www.filltext.com/?callback=?";
    $.getJSON(url, {
        'rows': 5,
        'fname': '{firstName}',
        'lname': '{lastName}',
        'tel': '{phone|format}',
    })
        .done(function (data) {
            $.each(data, function (i, item) {
                let html =
                    "<td>" + item.fname + "</td>" +
                    "<td>" + item.lname + "</td>" +
                    "<td>" + item.tel + "</td>";
                $("<tr/>").html(html).appendTo("#records");
            });
        });
})();