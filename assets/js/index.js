
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    //Assegno ad una variabile i valori inseriti dall'utente
    const name = document.getElementById("name").value;
    const kmTrip = document.getElementById("kmTrip").value;
    const userAge = document.getElementById("userAge").value;

    // Controllo degli input dell'utente
    if (!kmTrip) {
        alert("Distanza non valida!");
        return;
    }

    if(!userAge) {
        alert("Inserisci una fascia d'eta' per continuare");
        return;
    }

    // Calcolo del prezzo senza sconto
    let ticketcost = kmTrip * 0.1976;

    // Dichiarazione variabile dello sconto
    let sale;

    // Calcolo dello sconto se disponibile
    if (userAge == "teen") {
        console.log("teen")
        sale = ticketcost * 17.65 / 100;
        ticketcost -= sale;
    } else if (userAge == "elder") {
        console.log("elder")
        sale = ticketcost * 53.27 / 100;
        ticketcost -= sale;
    }
    
    // Creazione Document Fragment
    const fragment = document.createDocumentFragment();

    // Creazione di .ticket
    let ticket = document.createElement("div");
    ticket.className = "ticket";

    // Creazione .ticket > .ticketName
    const ticketName = document.createElement("div");
    ticketName.className = "ticketName";

    const ticketNameTitle = document.createElement("h3");
    ticketNameTitle.textContent = "Nome Passeggero";
    ticketName.append(ticketNameTitle);

    const nameWrapper = document.createElement("p");
    nameWrapper.textContent = name == "" ? "Sconosciuto" : name;
    ticketName.append(nameWrapper);

    // Inserisco .ticketname come figlio di .ticket
    ticket.append(ticketName);

    // Creazione .ticket > .ticketInfo
    const ticketInfo = document.createElement("div");
    ticketInfo.className = "ticketInfo";

    // Creazione .ticket > .ticketInfo > .ticketType
    const ticketType = document.createElement("div");
    ticketType.className = "ticketType info";

    const ticketTypeTitle = document.createElement("h4");
    ticketTypeTitle.textContent = "Offerta";
    ticketType.append(ticketTypeTitle);

    const ticketTypeParagraph = document.createElement("p");
    ticketTypeParagraph.textContent = kmTrip < 150 ? "Biglietto Standard" : "Biglietto Premium";
    ticketTypeParagraph.textContent == "Biglietto Premium" ? ticketNameTitle.className = "gold": 0;
    ticketType.append(ticketTypeParagraph);

    ticketInfo.append(ticketType);

    // Creazione .ticket > .ticketInfo > .wagon
    const wagon = document.createElement("div");
    wagon.className = "wagon info";

    const wagonTitle = document.createElement("h4");
    wagonTitle.textContent = "Carrozza";
    wagon.append(wagonTitle);

    const wagonParagraph = document.createElement("p");
    wagonParagraph.textContent = Math.floor(Math.random() * 10);
    wagon.append(wagonParagraph);

    ticketInfo.append(wagon);

    // Creazione .ticket > .ticketInfo > .trainNumber
    const trainNumber = document.createElement("div");
    trainNumber.className = "trainNumber info";

    const trainNumberTitle = document.createElement("h4");
    trainNumberTitle.textContent = "Numero Treno";
    trainNumber.append(trainNumberTitle);

    const trainNumberParagraph = document.createElement("p");
    trainNumberParagraph.textContent = (Math.random() * (99999 - 90000) + 90000).toPrecision(5);
    trainNumber.append(trainNumberParagraph);

    ticketInfo.append(trainNumber);

    // Creazione .ticket > .ticketInfo > .ticketPrice
    const ticketPrice = document.createElement("div");
    ticketPrice.className = "ticketPrice info";

    const ticketPriceTitle = document.createElement("h4");
    ticketPriceTitle.textContent = "Costo Biglietto";
    ticketPrice.append(ticketPriceTitle);

    const ticketPriceParagraph = document.createElement("p");
    ticketPriceParagraph.textContent = ticketcost.toFixed(2) + "€";
    ticketPrice.append(ticketPriceParagraph);

    ticketInfo.append(ticketPrice);

    // Inserisco .ticketInfo come figlio di .ticket
    ticket.append(ticketInfo);

    // Inserimento del ticket nel fragment
    fragment.append(ticket);

    // Inserisco l'elemento di output in una variabile
    const element = document.getElementById("output");

    // element.innerHTML = "";
    element.append(fragment);
});