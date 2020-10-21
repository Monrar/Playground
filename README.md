# Playground

Dies ist eine rudimentäre erste Version, welche nicht perfekt ist. 

Zukünftige Updates beinhalten:
- Support für Windows
- Support für weitere Emulatoren
- Code optimierungen wie beispielsweise das Auslagern von Konfigurationen in ein eigenes File
Derzeit funktioniert die Anwendung nur auf Unix mit dem Emulator "VisualBoyAdvance"

## Benötigt 
 - node.js
 - express.js
 - xdotool
 - VisualBoyAdvance
 
 ## Installation:
  - node.js installieren `apt install nodejs`
  - repository klonen
  - express.js installieren
  - node_modules im erstellten ordner intallieren: `npm install`
  - xdotools installieren `apt-get install xdotool`
  - VisualBoyAdvance installieren `apt-get install visualboyadvance`
  
  ## Starten
  - gewünschte Gameboy/Gameboy Color/Gameboy Advance rom herunterladen
  - Emulator starten: `VisualBoyAdvance [Romname]`
  - Server starten: `npm start`
  
  
