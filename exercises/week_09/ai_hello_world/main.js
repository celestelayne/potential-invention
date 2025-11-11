const hiddenCourtyardsNY = [
  {
    name: "Patchin Place Garden",
    neighborhood: "Greenwich Village",
    feature: "small brick plaza with planter beds and bench seating",
    mood: "quiet, literary"
  },
  {
    name: "St. Luke in the Fields Courtyard",
    neighborhood: "West Village",
    feature: "manicured garden with stone paths and seasonal blooms",
    mood: "serene, contemplative"
  },
  {
    name: "Tudor City Greens",
    neighborhood: "Tudor City / Midtown East",
    feature: "sun-drenched terraces and mature London plane trees",
    mood: "sunlit, calm"
  },
  {
    name: "The Cloisters Inner Garden",
    neighborhood: "Fort Tryon / Washington Heights",
    feature: "medieval-inspired plantings and stone fountains",
    mood: "historic, peaceful"
  },
  {
    name: "DUMBO Vaulted Courtyard",
    neighborhood: "DUMBO (Brooklyn)",
    feature: "industrial brick walls, string lights, cobbles",
    mood: "industrial-chic, intimate"
  },
  {
    name: "Westbeth Courtyard",
    neighborhood: "West Village",
    feature: "community garden tucked behind artists' studios",
    mood: "creative, tucked-away"
  },
  {
    name: "Mercer Courtyard",
    neighborhood: "SoHo",
    feature: "hidden cobbled courtyard with wrought-iron details",
    mood: "romantic, secretive"
  },
  {
    name: "Grace Court Alley Garden",
    neighborhood: "Brooklyn Heights (adjacent)",
    feature: "ivy-covered walls and a small stone fountain",
    mood: "mossy, reflective"
  },
  {
    name: "St. Paul's Chapel Garden",
    neighborhood: "Financial District / Tribeca border",
    feature: "historic churchyard with mature elms and benches",
    mood: "solemn, restorative"
  },
  {
    name: "The Puck Building Courtyard",
    neighborhood: "SoHo / Nolita",
    feature: "arched brick passage and tucked-away seating",
    mood: "sheltered, cozy"
  },
  {
    name: "Cooper Square Pocket Garden",
    neighborhood: "East Village",
    feature: "small planted pocket with pedestrian benches",
    mood: "urban-respite, friendly"
  },
  {
    name: "Columbus Circle Inner Garden",
    neighborhood: "Upper West Side / Midtown",
    feature: "geometric plantings and shaded seating areas",
    mood: "polished, contained"
  }
];
// select the ul element to append list items
let list = document.querySelector('.spaceList');

function listOfSpaces(space){
    let listItem = document.createElement('li');
    listItem.textContent = space.name;
    list.appendChild(listItem);
}

hiddenCourtyardsNY.forEach(listOfSpaces)

console.log("Hidden Courtyards in New York City:", hiddenCourtyardsNY);