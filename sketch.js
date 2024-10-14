// Variabili globali per la dimensione dei rettangoli e moltiplicatori per larghezza e altezza
size = 30;
molt_larghezza = 4;
molt_altezza = 4;

function setup() {
  // Crea un'area di disegno di 700x700 pixel
  createCanvas(700, 700);
  
  // Imposta la modalità degli angoli in gradi (anziché radianti)
  angleMode(DEGREES);
  
  // Imposta lo spessore del bordo dei rettangoli
  strokeWeight(3);

  // Per rimuovere il bordo dei rettangoli, puoi attivare questa linea
  // noStroke();

  // Imposta il background iniziale
  updateBackground();

  // Imposta un intervallo per aggiornare l'immagine ogni 3 secondi
  setInterval(updateBackground, 3000);
}

// Funzione per aggiornare il background e disegnare i rettangoli
function updateBackground() {
  // Genera casualmente valori di colore iniziali per il rosso, verde e blu
  startR = random(165);
  startG = random(165);
  startB = random(165);
  
  // Imposta il colore di sfondo con una variante più chiara dei colori iniziali
  background(startR + 45, startG + 45, startB + 45);

  // Ciclo per creare i rettangoli orizzontalmente
  for (let x = width; x > -size * molt_larghezza; x -= size) {
    // Ciclo per creare i rettangoli verticalmente
    for (let y = height; y > -size * molt_altezza; y -= size) {
      
      // Riempie i rettangoli con colori casuali, basati sui colori iniziali
      fill(
        random(startR, startR + 90), // Variabilità per il rosso
        random(startG, startG + 90), // Variabilità per il verde
        random(startB, startB + 90)  // Variabilità per il blu
      );
      
      // Salva lo stato di trasformazione corrente (prima della traslazione e rotazione)
      push();
      
      // Trasla il sistema di coordinate per posizionare il centro del rettangolo
      translate(x + size / 2, y + size / 2);
      
      // Disegna un rettangolo con larghezza e altezza casuali, in base alla dimensione e ai moltiplicatori
      rect(
        0,
        0,
        size * floor(random(1, molt_larghezza)),   // Larghezza casuale tra 1 e il moltiplicatore di larghezza
        size * floor(random(1, molt_altezza))   // Altezza casuale tra 1 e il moltiplicatore di altezza
      );
      
      // Ripristina lo stato di trasformazione salvato precedentemente
      pop();
    }
  }
}

// Funzione che permette di salvare l'immagine premendo il tasto 's'
function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg"); // Salva il canvas come immagine con il nome 'myCanvas.jpg'
  }
}
