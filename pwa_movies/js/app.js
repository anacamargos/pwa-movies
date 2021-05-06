// Carregamento de conteúdo
var ajax = new XMLHttpRequest();
ajax.open("GET", "./dados.json", true);
ajax.send();

ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var data = ajax.responseText;
        var data_json = JSON.parse(data);
        var content = document.getElementById("content");

        if (data_json.length == 0) {
            content.innerHTML = '<div class="col-12"><div class="alert alert-warning" role="alert">Não existem filmes cadastrados.</div></div>';
        } else {
            var html_content = "";
            for (var i = 0; i < data_json.length; i++) {
                html_content += '<div class="col-12"><h2>'+data_json[i].categoria+'</h2></div>';

                for (var j = 0; j < data_json[i].itens.length; j++) {
                    let currentItem = data_json[i].itens[j]
                    html_content += card_item(currentItem.nome, currentItem.imagem, currentItem.descricao, currentItem.link)
                }

            }
            content.innerHTML = html_content;
        }
    }
}

// Template do card do filme
var card_item = function (nome, imagem, descricao, link) {
    return '<div class="col-12 col-md-6">'+
                '<div class="card shadow bg-white rounded">'+
                    '<img src="'+imagem+'" class="card-img-top" alt="...">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+nome+'</h5>'+
                        '<p class="card-text">'+descricao+'</p>'+
                        '<a href="'+link+'" class="btn btn-primary">Saiba mais</a>'+
                    '</div>'+
                '</div>'+
        '</div>'
}