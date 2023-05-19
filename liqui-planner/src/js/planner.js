// console.log(document);
$(document).ready(function () {
    load();
    balanceAll();
    $("form").submit(function (e) {
        e.preventDefault();
        console.log($(this).serialize());
        let title = $('#titel').val();
        let typ = $('input[name=typ]:checked').val();
        let amount = $('#betrag').val();
        let date = $('#datum').val();
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
            success: function (data) {
                // data = JSON.parse(data);
                // location.href = 'planner.php';
                
                console.log(data);
                // $('.monatsliste').append()
                /*if(data.typ == 'einnahme') {
                    $('#overview').append('<ul>').append(
                        $('<li>').addClass("einnahme").append(
                            $('<span>').addClass("datum").append(data.date),
                            $('<span>').addClass("titel").append(data.title),
                            $('<span>').addClass("betrag").append(data.amount),
                            $('<button>').addClass("entfernen-button").append(
                                $('<i>').addClass("fas fa-trash"))
                        )
                    );
                }else if (data.typ == 'ausgabe') {
                    $('#overview').append('<ul>').append(
                        $('<li>').addClass("ausgabe").append(
                            $('<span>').addClass("datum").append(data.date),
                            $('<span>').addClass("titel").append(data.title),
                            $('<span>').addClass("betrag").append(data.amount),
                            $('<button>').addClass("entfernen-button").append(
                                $('<i>').addClass("fas fa-trash"))
                        )
                    );
                }
                */
               location.reload();
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

// Bilanz erstellen 
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
            $('#gesamtbilanz').append(
                $('<h1>').val("Gesamtbilanz"),
                $('<div>').addClass('gesamtbilanz-zeile einnahmen').append(
                    $('<span>').val('Einnahmen:'),
                    $('<span>').val('0')
                ),
                $('<div>').addClass('gesamtbilanz-zeile ausgaben').append(
                    $('<span>').val('Ausgaben:'),
                    $('<span>').val('0')
                ),
            $('<div>').addClass('gesamtbilanz-zeile bilanz').append(
                $('<span>').val('Bilanz:'),
                $('<span>').addClass('positiv').val(data)
            )
            );
            
        },
        error: function(jqXHR, textStatus, XMLHttpRequest, errorThrown) {
            console.log(textStatus);
            console.log(XMLHttpRequest);
            console.log(jqXHR.responseJSON);
        }
    });
}

// Laden aller Daten der Einträge 
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

// Monats übersicht
function loadEntrymonth (data) {
    // console.log(data);
    if(data.titletyp == 'Einnahme') {
        $('#overview').append(
            $('<li>').addClass("einnahme").append(
                $('<span>').addClass("datum").text(data.titledate),
                $('<span>').addClass("titel").text(data.title),
                $('<span>').addClass("betrag").text(data.amount),
                $('<span>').attr("hidden", true).val(data.id),
                $('<button>').addClass("entfernen-button").append(
                    $('<i>').addClass("fas fa-trash"))
            )
        );
    }else if (data.titletyp == 'Ausgabe') {
        $('#overview').append('<ul>').append(
            $('<li>').addClass("ausgabe").append(
                $('<span>').addClass("datum").append(data.titledate),
                $('<span>').addClass("titel").append(data.title),
                $('<span>').addClass("betrag").append(data.amount),
                $('<span>').attr("hidden", true).val(data.id),
                $('<button>').addClass("entfernen-button").append(
                    $('<i>').addClass("fas fa-trash"))
            )
        );
    }
}
