/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* Stringa aggiunge un commento visbile sul log da browser
Numerico assegna ad una variabile un valore numerico, utilizzati ad esempio per eseguire addizioni sottrazioni ecc..
Boolean assegna ad una variabile true e false, spesso utilizzato per confrontare l'uguaglianza tra due variabili
Null  è una keyword utilizzata per indicare l'assenza voluta di un oggetto, in ambito numerico è diverso dal valore 0 in quanto indica appunta l'assenza di identificazione
In ambito di logica booleana indica una condizione "false"
Undfined si usa per indicare l'assenza di un valore definito o non assegnato ad una variabile, usare una varabile che non è stata definita dentro una funzione darà un avviso 'undefined'

Symbol
Object che può contenere Object, Array, una data
Bigint
*/

/*stringa*/
let stringa = "esempio"

/*numerico*/
numerico = 9

/*Boolean */
let h = true
let p = false

/* Null*/
let cricetoSuRuota = null

/*undefined*/

let maurizioCostanzo = undefined

console.log("esempi", numerico, stringa, h, p, cricetoSuRuota, maurizioCostanzo)



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/




/* SCRIVI QUI LA TUA RISPOSTA */

let firstName = "Sebastiano" 
console.log ("Esercizio 2", firstName)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let z = 12
let y = 20
let somma = z + y
console.log ("Esercizio 3", somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log("Esercizio 4", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

firstName = "Castorina"
console.log ("cognome", firstName)

const ciao = "Ciaone"
console.log ("costante", ciao)
/*ciao = "Buongiorno" Uncaught TypeError: Assignment to constant variable.
    at D1.js:63:6 (elimina questo commento come dimostrazione dell'errre) */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = 4 - x
console.log ("sottrazione", sottrazione)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"
console.log("nome1 e nome2", name1, name2)
console.log("Sono diversi?", name1 !== name2)

/*extra*/

name2= name2.toLowerCase()
console.log("sono entrambi minuscoli?", name1===name2)
