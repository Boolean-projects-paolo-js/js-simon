
/*Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
Buon divertimento!*/


const x = setInterval(function() {

  //definire data iniziale e finale
  const today = new Date().getTime();
  const countDownDate = new Date("Jan 1, 2800 9:30:00").getTime();

  console.log(today);
  console.log(countDownDate);

  const countDown = countDownDate - today;
  console.log(countDown);


  // Calcolo del tempo rimanente in anni, mesi, settimane, giorni, ore, minuti e secondi
  const years = Math.floor(countDown / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((countDown % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((countDown % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((countDown % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((countDown % (1000 * 60)) / 1000);

  // Aggiornamento del DOM
  document.getElementById("countdown").innerHTML = years + "y " + months + "m " + weeks + "w " + days + "d " + hours + "h " + mins + "m " + secs + "s ";

}, 1000);
