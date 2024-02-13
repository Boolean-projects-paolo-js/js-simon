
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
  const countDownDate = new Date("Apr 28, 2024 9:30:00").getTime();

  console.log(today);
  console.log(countDownDate);

  const countDown = countDownDate - today;
  console.log(countDown);


  //rendere leggibile la data
  const year = Math.floor(countDown / (68 * 30 * 60 * 60 * 24));
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((countDown % (1000 * 60)) / 1000);

  console.log (year, days, hours, mins, secs);

  //display sul DOM

  document.getElementById("countdown").innerHTML = year + "y " + days + "d " + hours + "h "+ mins + "m " + secs + "s ";

}, 1000);
