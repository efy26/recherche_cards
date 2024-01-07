

const cartes = [
    {
        pays: "Cameroun",
        description: " : Le Cameroun est un pays du golfe de Guinée, sur la façade occidentale de l'Afrique. Il possède 590 km de côtes très découpées le long de l'océan Atlantique.",
        Image: "img/cameroun.jpeg"
    },
    {
        pays: "Canada",
        description: " : Le Canada est un pays nord-américain situé entre les États-Unis au sud et le cercle polaire au nord. Les principales villes sont Toronto, Vancouver, centre du cinéma de la côte ouest, Montréal et Québec, toutes deux francophones, et Ottawa, la capitale. Le Canada compte, parmi ses vastes étendues sauvages, le parc national de Banff avec ses nombreux lacs situé dans les montagnes Rocheuses.",
        Image: "img/canada2003-map.jpg"
    },
    {
        pays: "France",
        description: " : La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée.",
        Image: "img/carte-de-france.jpg"
    },
    {
        pays: "Maroc",
        description: " : Le Maroc, pays d'Afrique du Nord sur le littoral de l'Atlantique et de la Méditerranée, se distingue par ses influences berbères, arabes et européennes. La médina de Marrakech, quartier médiéval aux allures de labyrinthe, est un lieu animé, avec sa place Jemaa el-Fna et ses souks (marchés) vendant des céramiques, des bijoux et des lanternes en métal.",
        Image: "img/carte-du-maroc.webp"
    },
    {
        pays: "Égypte",
        description: " : L'Égypte est un pont entre l'Afrique du Nord-Est et le Moyen-Orient et son histoire remonte à l'époque des pharaons. Des monuments millénaires bordent les berges de la fertile vallée du Nil, notamment le sphinx et les pyramides colossales de Gizeh.",
        Image: "img/carte-egypte.webp"
    },
    {
        pays: "Russie",
        description: " : La Russie est un pays d'Europe orientale et d'Asie septentrionale qui a remplacé au début des années 1990 la République socialiste fédérative de Russie, elle-même partie de l'ancienne Union soviétique. Le russe est la langue officielle.",
        Image: "img/carte-russie.jpg"
    },
    {
        pays: "La République centrafricaine",
        description: " : La République centrafricaine est un pays d'Afrique centrale divisé en 16 préfectures. Le français et le sango sont les langues officielles, mais on y parle aussi le sara et le peul. La population est de confession animiste, catholique, protestante ou musulmane.",
        Image: "img/rca.jpeg"
    },
    {
        pays: "Rdc",
        description: " : La république démocratique du Congo, aussi appelée plus simplement RDC, Congo, RD Congo ou de manière informelle Congo-Kinshasa, est un pays d'Afrique centrale. C'est le troisième pays le plus peuplé d'Afrique, ainsi que le pays francophone le plus peuplé.",
        Image: "img/rdc.webp"
    },
    {
        pays: "Afrique du Sud",
        description: " : L'Afrique du Sud est un pays situé à l'extrémité australe du continent africain et composé de différents écosystèmes. À l'intérieur des terres, le parc national Kruger abrite du gros gibier et propose des safaris.",
        Image: "img/rsa.jpeg"
    },
    {
        pays: "Usa",
        description: " : Les États-Unis sont un pays constitué de 50 états et couvrant une vaste portion de l'Amérique du Nord, avec l'Alaska au nord-ouest et Hawaï étendant la présence du pays dans l'océan Pacifique. Les principales villes de la côte atlantique sont New York, centre international financier et culturel, et Washington, la capitale. Dans la région du Midwest, la métropole de Chicago est connue pour son architecture influente et sur la côte ouest, le quartier d'Hollywood à Los Angeles est célèbre pour ses studios de cinéma.",
        Image: "img/usa.jpeg"
    }
]
window.onload = () => {
    afficherCartes()
    
    
    
}


const afficherCartes = () => {
    let recherche = document.querySelector(".recherche input")
    for (let i = 0; i < cartes.length; i++) {
        
        let balise_div_carte = document.createElement("div")
        balise_div_carte.className = "carte"

        const balise_img_carte = document.createElement("img")
        balise_img_carte.src = `${cartes[i].Image}`

        const balise_div_dscpt_carte = document.createElement("div")
        balise_div_dscpt_carte.className = "dscpt_carte"

        const balise_p = document.createElement("p")
        const balise_strong = document.createElement("strong")
        balise_strong.innerHTML = `${cartes[i].pays}`
        const balise_span = document.createElement("span")
        balise_span.textContent = `${cartes[i].description}`

        balise_p.appendChild(balise_strong)
        balise_p.appendChild(balise_span)
        
        balise_div_dscpt_carte.appendChild(balise_p)

        balise_div_carte.appendChild(balise_img_carte)
        balise_div_carte.appendChild(balise_div_dscpt_carte)

        document.querySelector(".main .container").appendChild(balise_div_carte)

        // let rslt = document.querySelector(".main .container").length


        // ---------- REcherche ---------
        
        

            

        
        recherche.addEventListener("keydown", (e) => {
            let input_value = e.target.value.toUpperCase()
            let balise_strong_value = balise_strong.innerHTML.toUpperCase()
            if ( balise_strong_value.includes(input_value) == false) {
                balise_div_carte.style = "display: none;"
                // document.querySelector(".nav .container").innerHTML = `
                // <p>Il y a <strong>${[0]}</strong> <span>résultat</span></p>
                // `
            }else {
                document.querySelector(".nav .container").innerHTML = `
                <p>Il y a <strong>${ cartes.length}</strong> <span>résultat (s)</span></p>
                `

                balise_div_carte.style = "display: grid;"
                console.log(balise_div_carte.length);



                
                }

        })
        
        
            
            
            
            
            

       



    }
}




    
    



    
    