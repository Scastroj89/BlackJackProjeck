let deck         = [];
const tipos      = ['C', 'D', 'H', 'S']
const especiales = ['J', 'Q', 'K', 'A']

const crearDeck = () => {
    deck=[];

    for( let i = 2; i <= 10; i++){
        for( let tipo of tipos){
            deck.push( i + tipo )
        }
    }
    for (let esp of especiales){
        for( let tipo of tipos){
            deck.push( esp + tipo )
        }
    }

    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

const pedirCarta = () => {
    if (deck.length === 0){
        alert("Ya no hay más cartas");
        throw "No hay cartas";
    }
    let carta = deck.pop();
    console.log(carta);
    return carta;
}
pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN( valor ) ? (valor === 'A') ? 11 : 10 : valor*1)
    
}

const pedir = () => {
    const valor = valorCarta(pedirCarta());
    console.log({valor});
}
