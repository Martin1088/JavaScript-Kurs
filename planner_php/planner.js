console.log(document);
$(document).ready(function () {
    function loadEntrymonth (data) {
            let out = `<li> Titel: ${data.title} 
                Typ: ${data.titletyp}
                Betrag: ${data.amount}
                Datum: ${data.titledate}
                </li>`;
            if(data.typ == 'Einnahme') {
                $('.income').append(out);
            }else {
                $('.outcome').append(out);
            }
    }
    function load () {
        $.ajax({
            type: "POST",
            url: 'planner.php',
            data: {
                target: "getAllEntry"
            },
            dataType: "json",
            success: function(data) {
                // console.log(data);
                data.forEach(element => {
                    console.log(element);
                    loadEntrymonth(element);
                });

            },
            error: function(jqXHR, textStatus, XMLHttpRequest, errorThrown) {
                console.log(textStatus);
                console.log(XMLHttpRequest);
                console.log(jqXHR.responseJSON);
            }
        });
    }
    function balanceAll () {
        $.ajax({
            type: "POST",
            url: 'planner.php',
            data: {
                target: "balance"
            },
            dataType: "json",
            success: function(data) {
                console.log(data);
                $('#balance').append(data);
                
            },
            error: function(jqXHR, textStatus, XMLHttpRequest, errorThrown) {
                console.log(textStatus);
                console.log(XMLHttpRequest);
                console.log(jqXHR.responseJSON);
            }
        });
    }
    load();
    balanceAll();

    $("form").submit(function (e) {
        e.preventDefault();
        console.log($(this).serialize());
        let title = $('#title').val();
        let typ = $('input[name=typ]:checked').val();
        let amount = $('#amount').val();
        let date = $('#date').val();
        let submit = $('#submit').val();
        let target = "write_entry";
        $.ajax({
            type: "POST",
            url: 'planner.php',
            data: {
                target: target,
                title: title,
                typ: typ,
                amount: amount,
                date: date,
                submit: submit, 
            },
            dataType: "json",
            success: function (data ) {
                // data = JSON.parse(data);
                // location.href = 'planner.php';
                
                console.log();
                let out = `<li> Titel: ${data.title} 
                Typ: ${data.typ}
                Betrag: ${data.amount}
                Datum: ${data.date}
                </li>`
                if(data.typ == 'Einnahme') {
                    $('.income').append(out);
                }else {
                    $('.outcome').html(out);
                }
            },
            error: function (jqXHR, textStatus, XMLHttpRequest, errorThrown) {
                console.log(textStatus);
                console.log(XMLHttpRequest);
                console.log(jqXHR.responseJSON);
                // console.log(JSON.parse(errorThrown));
                // location.href = 'planner.php';
            }
        });
    });
});