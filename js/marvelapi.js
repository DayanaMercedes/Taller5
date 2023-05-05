function MarvelAPI() {

    console.log("Buscar");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + 
    ts +"&apikey=" + apikey + "&hash=" + hash;

    console.log(url);

    var grid= document.getElementById("Marvel");
    
    fetch(url)
    .then(response => response.json())
    .then(json=> {

        for (item of json.data.results){
            
            var div = document.createElement("div");

            var option = document.createElement("label");
            option.innerText = item.name;

            var imagen = document.createElement("img");
            imagen.src = item.thumbnail.path + "." + item.thumbnail.extension;

            var description = document.createElement('p');
            description.innerHTML = item.description;
            
            var enlaceSeries = document.createElement("a");
            enlaceSeries.innerText = "Ver Serie";
            enlaceSeries.href="#"

            var enlaceComics = document.createElement("a");
            enlaceComics.innerText = "Ver Comic";
            enlaceComics.href="#"

            var enlaceEventos = document.createElement("a");
            enlaceEventos.innerText = "Ver Evento";
            enlaceEventos.href="#"


            var enlaceStories = document.createElement("a");

            enlaceStories.innerText = "Ver Comic";
            enlaceStories.href="#"

            grid.appendChild(div);
            div.appendChild(imagen);
            div.appendChild(option);
            div.appendChild(description);
            div.appendChild(enlaceSeries);
            div.appendChild(enlaceComics);
            div.appendChild(enlaceEventos);
            div.appendChild(enlaceStories);



        }
        
    });        
    
}
