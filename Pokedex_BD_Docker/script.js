const colores = {
    electric: '#FFE533',
    normal: '#C8C8C8',
    fire: '#CD1414',
    water: '#1F6CF3',
    ice: '#1FD2F3',
    rock: '#ABABAB',
    flying: '#B4FFFA',
    grass: '#64FF3F',
    psychic: '#D1C200',
    ghost: '#C800D1',
    bug: '#5EE644',
    poison: '#7144E6',
    ground: '#B37B7B',
    dragon: '#FF762D',
    steel: '#797979',
    fighting: '#FFA780',
    dark: '#373737',
    fairy: '#FF84F4',
    default: '#FFFFFF',
};

let documentFragment = document.createDocumentFragment();

const mostrarFav = () => {
    fetch("http://localhost/WebService/")
        .then(data => data.json())
        .then(response => {
            const contenedor = document.getElementById("container_saved");
            for(pokemon of response){
                const cont = document.createElement("DIV");
                cont.classList.add("flex-item");
                let pokeFav = `
                <h2>${pokemon.nombre}</h2>
                <h3>No. ${pokemon.id}</h3>
                <img src="${pokemon.sprite}">
                <br>
                <b>HP: ${pokemon.hp}</b>
                <br>
                <b>ATTACK: ${pokemon.attack}</b>
                <br>
                <b>DEFENSE: ${pokemon.defense}</b>
                <br>
                <b>SPECIAL ATTACK: ${pokemon.special_attack}</b>
                <br>
                <b>SPECIAL DEFFENSE: ${pokemon.special_defense}</b>
                <br>
                <b>SPEED: ${pokemon.speed}</b>
                <br>
                <b class="cont_fav_tipos" style="background-color:${colores[(pokemon.tipo1).toLowerCase()]};">${pokemon.tipo1}</b>
                <b class="cont_fav_tipos" style="background-color:${colores[(pokemon.tipo2).toLowerCase()]};">${pokemon.tipo2}</b>
                `;
                cont.innerHTML = pokeFav;
                documentFragment.appendChild(cont);
            }
            contenedor.appendChild(documentFragment);
        });
}


const buscarPokemon = () => {
    const value = Math.floor(Math.random() * 1000) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
        .then(data => data.json())
        .then(response => {
            actualizarDatos(response);
            defNombre(response);
            defNumPokemon(response);
            defSprite(response);
            defDescription(response);
            defStats(response);
            defTipos(response);
            defHabilidad(response);
        })
}

const actualizarDatos = (data) => {
    let submit = document.querySelectorAll('input[type="text"]');
    submit[0].value = data.id;
    submit[1].value = (data.name).toUpperCase();
    submit[2].value = data.sprites.front_default;
    submit[3].value = data.stats[0].base_stat;
    submit[4].value = data.stats[1].base_stat;
    submit[5].value = data.stats[2].base_stat;
    submit[6].value = data.stats[3].base_stat;
    submit[7].value = data.stats[4].base_stat;
    submit[8].value = data.stats[5].base_stat;
    submit[9].value = (data.types[0].type.name).toUpperCase();
    try{
        submit[10].value = (data.types[1].type.name).toUpperCase();
    }catch(e){
        submit[10].value = " ";
    }
}

const defNombre = (data) => {
    const contenedor_nombre = document.getElementById("name");
    contenedor_nombre.innerHTML = (data.name).toUpperCase();
}

const defNumPokemon = (data) => {
    const contenedor_num = document.getElementById("id");
    contenedor_num.innerHTML = `No. ${data.id}`;
}

const defSprite = (data) => {
    const contenedor_sprite = document.getElementById("sprite");
    contenedor_sprite.setAttribute("src",data.sprites.front_default);
}

const defHabilidad = (data) => {
    const contenedores = document.querySelectorAll(".habilidad");
    contenedores[0].innerHTML = (data.abilities[0].ability.name).toUpperCase();
    contenedores[1].innerHTML = (data.abilities[1].ability.name).toUpperCase();
}

const defTipos = (data) =>{
    const texto_tipo1 = document.getElementById("tipo1");
    const texto_tipo2 = document.getElementById("tipo2");
    const contenedores = document.querySelectorAll(".caja_tipos");
    const tipo1 = data.types[0].type.name;
    texto_tipo1.innerHTML = (tipo1).toUpperCase();
    contenedores[0].style.background = `linear-gradient(70deg, ${colores[tipo1]}, white)`;
    try{
        const tipo2 = data.types[1].type.name;
        texto_tipo2.innerHTML = (tipo2).toUpperCase();
        contenedores[1].style.background = `linear-gradient(70deg, ${colores[tipo2]}, white)`;
    }catch(e){
        texto_tipo2.innerHTML = " ";
        contenedores[1].style.background = `linear-gradient(70deg, silver, white)`;
    }
}

const defStats = (data) =>{
    const contenedor_hp = document.getElementById("hp");
    const contenedor_attack = document.getElementById("attack");
    const contenedor_defense = document.getElementById("defense");
    const contenedor_special_attack = document.getElementById("special-attack");
    const contenedor_special_defense = document.getElementById("special-defense");
    const contenedor_speed = document.getElementById("speed");

    contenedor_hp.innerHTML = `hp................... ${data.stats[0].base_stat}`;
    contenedor_attack.innerHTML = `attack............... ${data.stats[1].base_stat}`;
    contenedor_defense.innerHTML = `defense.............. ${data.stats[2].base_stat}`;
    contenedor_special_attack.innerHTML = `special-attack....... ${data.stats[3].base_stat}`;
    contenedor_special_defense.innerHTML = `special-defense...... ${data.stats[4].base_stat}`;
    contenedor_speed.innerHTML = `speed................ ${data.stats[5].base_stat}`;
}

const defDescription = (data) => {
    fetch(data.species.url)
        .then(data => data.json())
        .then(response => {
            const contenedor_descripcion = document.getElementById("descripcion");
            const entradas = response.flavor_text_entries;
            try{
            for(let i = 0;i<51;i++){
                if(entradas[i].language.name === "es"){
                    contenedor_descripcion.innerHTML = entradas[i].flavor_text;
                }
            }
        }catch(e){
        }
        });
}