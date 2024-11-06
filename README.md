# Gestió d'Asincronia en JavaScript

A l’exercici d’avui, treballareu amb codi asíncron en JavaScript a través d'un exemple amb personatges de Pokémon. L'objectiu és que entengueu les diferents maneres de gestionar l'asincronia: primer amb callbacks, després amb Promises, i finalment amb la sintaxi moderna d'async i await.

## 1. Entendre el Codi amb Callbacks

Primer, analitzeu el codi que trobareu a **ex.js**. Aquest codi simula una funció `findPokemon` que cerca un Pokémon per nom dins d'una llista. Utilitza callbacks per retornar el resultat, amb un callback per a èxit (`onSuccess`) i un altre per a error (`onError`).

**Tasques per aquesta secció:**

- Entendre el funcionament dels callbacks. Específicament, fixeu-vos en com `onSuccess` i `onError` gestionen el resultat de la cerca.
- Executeu aquest codi i observeu com es mostren els resultats dels `console.log` després de 2 segons. Com s’utilitzen els callbacks per determinar si s’ha trobat o no el Pokémon?

## 2. Convertir el Codi a una Promesa

(Creeu un altre fitxer anomenat **ex-promises.js** per a aquesta secció.)

Ara que heu entès com funciona amb callbacks, haureu de modificar la funció `findPokemon` per fer-la servir amb una Promise en lloc de callbacks. Això us permetrà utilitzar `.then` i `.catch` per gestionar l’èxit i l’error.

**Pistes per aquesta conversió:**

- La funció ha de retornar una nova promesa.
- Utilitzeu `resolve` per a casos d’èxit (quan es troba el Pokémon) i `reject` per als errors (quan no es troba).

**Tasques per aquesta secció:**

- Convertiu `findPokemon` perquè funcioni amb una promesa en lloc de callbacks.
- Proveu el codi i assegureu-vos que `.then` es crida si es troba el Pokémon i `.catch` es crida si no es troba.

## 3. Ús d’async i await per Simplificar el Codi

(Creeu un altre fitxer anomenat **ex-async-await.js** per a aquesta secció.)

Finalment, modificareu el codi per utilitzar la sintaxi moderna amb `async` i `await`. Això permet escriure codi més clar i fàcil de llegir per gestionar l'asincronia.

**Tasques per aquesta secció:**

- Convertiu la crida a `findPokemon` per utilitzar `async` i `await`.
- Proveu el vostre codi i verifiqueu que `console.log` mostra el Pokémon trobat o l’error segons correspongui.

## 4. Cerca Múltiple amb Promise.all

(Creeu un altre fitxer anomenat **ex-promise-all.js** per a aquesta secció.)

Ara que ja heu convertit `findPokemon` en una funció que retorna una promesa, explorarem com gestionar múltiples cerques alhora fent servir `Promise.all`. L'objectiu és fer diverses cerques de Pokémon en paral·lel i esperar que totes les cerques es completin.

**Descripció de l’Exercici:**

Imagina que voleu buscar diversos Pokémon a la vegada: Pikachu, Charizard, i Bulbasaur. El vostre objectiu és utilitzar `Promise.all` per:

- Executar les cerques en paral·lel.
- Recollir tots els resultats d’èxit en un array quan totes les cerques es completin correctament.
- Gestionar els errors si algun Pokémon no es troba.

**Tasques per aquesta secció:**

- Feu servir `Promise.all` per cercar els Pokémon Pikachu, Charizard, i Bulbasaur en la llista donada.
- Gestioneu els resultats i errors:
    - Si es troben tots els Pokémon, mostreu el nom i el tipus de cadascun a la consola.
    - Si algun Pokémon no es troba, mostreu un missatge d’error per a la cerca que ha fallat.