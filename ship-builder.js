const SHIP_STAT_KEYS=["durability","stability","turning","speed","sailResilience","ramStrength","ramDefense","magicStorage"];
const SHIP_STAT_LABELS={durability:"Durability",stability:"Stability",turning:"Turning",speed:"Speed",sailResilience:"Sail Resilience",ramStrength:"Ram Strength",ramDefense:"Ram Defense",ramSpeed:"Ram Speed",magicStorage:"Magic Storage"};
const SHIP_STAT_ICONS={durability:"Defense.webp",stability:"Stability.webp",turning:"Turning_Speed.webp",speed:"shipSpeed.webp",sailResilience:"Sail_Resilience.webp",ramStrength:"Ram_Strength.webp",ramDefense:"Ram_Defense.webp",magicStorage:"Magic_Storage.webp"};
const SHIPS=[
  {id:"sailboat",name:"Sailboat",image:"Sailboat.webp",level:10,quartermasters:1,deckhands:1,attachmentSlots:0,canUseSiegeWeapons:false,canUseRam:false,stats:{durability:1200,stability:30,turning:80,speed:50,sailResilience:65}},
  {id:"caravel",name:"Caravel",image:"Caravel.webp",level:25,quartermasters:1,deckhands:2,attachmentSlots:2,canUseSiegeWeapons:false,canUseRam:true,stats:{durability:2500,stability:45,turning:70,speed:60,sailResilience:65}},
  {id:"ketch",name:"Ketch",image:"Ketch.webp",level:75,quartermasters:2,deckhands:3,attachmentSlots:4,canUseSiegeWeapons:false,canUseRam:false,stats:{durability:4000,stability:50,turning:50,speed:70,sailResilience:65}},
  {id:"brig",name:"Brig",image:"Brigade_V2.webp",level:120,quartermasters:2,deckhands:4,attachmentSlots:4,canUseSiegeWeapons:true,canUseRam:true,stats:{durability:12000,stability:75,turning:50,speed:75,sailResilience:65,ramStrength:1200}}
];
const ROWBOAT_ATTACHMENTS=[
  {name:"Rowboat",level:150,stats:{durability:350,stability:5}}
];
const SHIP_CREWS=[
  {name:"None",stats:{}},{name:"Redwake Warriors/Ulf",stats:{stability:5}},
  {name:"Sailors/John Langley",stats:{sailResilience:10,ramDefense:300}},
  {name:"Ravenna Deserters/Septimus Revora",stats:{durability:300,sailResilience:5}},
  {name:"Skyhall Guards",stats:{ramStrength:800}},
  {name:"Oathkeeper Squires",stats:{durability:800,stability:5,ramDefense:600}},
  {name:"Ghost Sailors",stats:{durability:600,stability:5,sailResilience:10,ramDefense:600}},
  {name:"Brotherhood Knights",stats:{sailResilience:10,durability:400,ramDefense:300}},
  {name:"Knights Proxy Knights",stats:{durability:400,stability:5,ramStrength:300}}
];
const QUARTERMASTERS=[
  {name:"None",stats:{}},
  {name:"Edward Kenton, the Exiled Captain",stats:{durability:300,stability:5,sailResilience:5}},
  {name:"Enizor, the Visionary",stats:{durability:100,stability:5,magicStorage:500}},
  {name:"Esmeralda",stats:{}}
];
const HULLS=[
  ["Wooden Trim",30,{durability:900,stability:3,speed:5}],["Rugged Trim",30,{durability:1350,turning:11}],["Wooden Framing",30,{durability:1800,stability:6,ramDefense:138}],
  ["Reinforced Wooden Framing",50,{durability:1500,stability:3,speed:6}],["Light Rugged Framing",50,{durability:2250,stability:2,turning:12}],["Light Bronze Framing",50,{durability:3000,stability:7,ramDefense:230}],
  ["Wooden Hull",70,{durability:2100,stability:4,speed:7}],["Rugged Framing",70,{durability:3150,stability:2,turning:12}],["Trimmed Wooden Hull",70,{durability:4200,stability:8,ramDefense:322}],
  ["Reinforced Wooden Hull",90,{durability:2700,stability:4,speed:7}],["Light Rugged Hull",90,{durability:4050,stability:2,turning:13}],["Bronze Framing",90,{durability:5400,stability:9,ramDefense:414}],
  ["Ruined Archaic Hull",120,{durability:5400,stability:5,turning:14,speed:2}],["Light Silver Framing",130,{durability:3900,stability:5,speed:8}],["Light Bronze Hull",130,{durability:5850,stability:2,turning:15}],
  ["Silver Framing",130,{durability:7800,stability:11,ramDefense:598}],["Light Iron Framing",170,{durability:5100,stability:6,speed:9}],["Iron Trim",170,{durability:7650,stability:3,turning:15}],
  ["Trimmed Rugged Hull",170,{durability:10200,stability:13,ramDefense:782}]
].map(([name,level,stats])=>({name,level,stats}));
const SAILS=[
  ["Flax Sailcloth",30,{speed:6}],["Wool Sailcloth",30,{ramStrength:60,sailResilience:10}],["Hemp Sailcloth",80,{speed:8}],["Cotton Sailcloth",80,{ramStrength:160,sailResilience:12}],
  ["Archaic Sailcloth",120,{speed:10,ramStrength:60,sailResilience:3}],["Willow Sailcloth",130,{speed:11}],["Reinforced Sailcloth",130,{ramStrength:260,sailResilience:13}],
  ["Lavender Sailcloth",180,{speed:13}],["Bronze Sailcloth",180,{ramStrength:360,sailResilience:14}],["Jacaranda Sailcloth",230,{speed:13}],["Silver Sailcloth",230,{ramStrength:460,sailResilience:14}],
  ["Mahogany Sailcloth",280,{speed:13}],["Golden Sailcloth",280,{ramStrength:560,sailResilience:14}],["Cashmere Sailcloth",350,{speed:13}],["Platinum Sailcloth",350,{ramStrength:700,sailResilience:14}]
].map(([name,level,stats])=>({name,level,stats}));
const CANNONS=[
  {name:"Bronze Cannons",level:80,damage:1.408,range:1,reload:6},
  {name:"Heavy Bronze Cannons",level:80,damage:1.608,range:1.2,reload:7},
  {name:"Bronze Culverins",level:80,damage:1.208,range:1.6,reload:6},
  {name:"Bronze Carronades",level:80,damage:1.908,range:0.8,reload:7},
  {name:"Iron Culverins",level:120,damage:1.412,range:1.6,reload:6},
  {name:"Iron Carronades",level:120,damage:2.112,range:0.8,reload:7},
  {name:"Dragonfire Carronades",level:120,damage:2.012,range:0.7,reload:8}
];
const MAGIC_NAMES=["Arcanium","Acid","Ash","Crystal","Earth","Explosion","Fire","Glass","Ice","Light","Lightning","Magma","Metal","Plasma","Poison","Sand","Shadow","Snow","Water","Wind","Wood"];
const SIEGE_WEAPONS=[
  {name:"Mortars",level:100,damage:1.510,range:1,spread:1,fuseLength:1,reload:10,speed:-3},
  {name:"Heavy Mortars",level:100,damage:1.810,range:0.75,spread:1.5,fuseLength:1,reload:12,speed:-5},
  {name:"Howitzers",level:100,damage:1.410,range:2,spread:0.5,fuseLength:1,reload:10,speed:-3},
  {name:"Coehorns",level:100,damage:1.010,range:0.75,spread:0.5,fuseLength:0.5,reload:5,speed:-1},
  {name:"Ruined Archaic Mortars",level:120,damage:1.212,range:0.75,spread:1.5,fuseLength:1,reload:"1 or 15",speed:-5},
  {name:"Bronze Mortars",level:130,damage:1.663,range:1,spread:1,fuseLength:1,reload:10,speed:-3},
  {name:"Heavy Bronze Mortars",level:130,damage:1.963,range:0.75,spread:1.5,fuseLength:1,reload:12,speed:-5},
  {name:"Bronze Howitzers",level:130,damage:1.563,range:2,spread:0.5,fuseLength:1,reload:10,speed:-3},
  {name:"Bronze Coehorns",level:130,damage:1.163,range:0.75,spread:0.5,fuseLength:0.5,reload:5,speed:-1},
  {name:"Iron Mortars",level:170,damage:1.867,range:1,spread:1,fuseLength:1,reload:10,speed:-3},
  {name:"Heavy Iron Mortars",level:170,damage:2.167,range:0.75,spread:1.5,fuseLength:1,reload:12,speed:-5},
  {name:"Iron Howitzers",level:170,damage:1.767,range:2,spread:0.5,fuseLength:1,reload:10,speed:-3},
  {name:"Iron Coehorns",level:170,damage:1.367,range:0.75,spread:0.5,fuseLength:0.5,reload:5,speed:-1}
];
const DECKHAND_TYPES=[
  {name:"Stability",stats:{stability:8}},
  {name:"Durability",stats:{durability:1560}},
  {name:"Turning Speed",stats:{turning:9}},
  {name:"Speed",stats:{speed:4}},
  {name:"Sail Resilience",stats:{sailResilience:11}},
  {name:"Ram Strength",stats:{ramStrength:1245}},
  {name:"Ram Defense",stats:{ramDefense:390}},
  {name:"Magic Storage",stats:{magicStorage:625}}
];
const COMPONENT_ENCHANTS={
  none:{label:"No enchant",stats:{}},
  reinforced:{label:"Reinforced",stats:{sailResilience:20,speed:8}},
  powerfulHull:{label:"Powerful",stats:{stability:20,ramStrength:900}},
  powerfulRam:{label:"Powerful",stats:{ramStrength:900}},
  armoredHull:{label:"Armored",stats:{durability:3000,ramDefense:900}},
  armoredSail:{label:"Armored",stats:{durability:2400}},
  armoredRam:{label:"Armored",stats:{durability:1200,ramDefense:900}},
  briskHull:{label:"Brisk",stats:{speed:7,turning:15}},
  briskSail:{label:"Brisk",stats:{speed:15}},
  briskRam:{label:"Brisk",stats:{ramSpeed:0.3}},
  warshipHull:{label:"Warship",stats:{durability:4000,stability:20,ramStrength:450,ramDefense:900,speed:-7}},
  warshipSail:{label:"Warship",stats:{durability:-4000,sailResilience:10,speed:25,turning:10}},
  warshipRam:{label:"Warship",stats:{ramStrength:1200,ramDefense:-450}}
};
const CANNON_ENCHANTS={
  none:{label:"No enchant",cannon:{},siege:{}},
  powerful:{label:"Powerful",cannon:{damage:0.3},siege:{damage:0.3}},
  charged:{label:"Charged",cannon:{damage:0.2,range:0.3},siege:{damage:0.1,range:0.2}},
  enhanced:{label:"Enhanced",cannon:{range:0.5},siege:{range:0.5}},
  explosive:{label:"Explosive",cannon:{},siege:{spread:0.4}},
  brisk:{label:"Brisk",cannon:{reload:-2},siege:{reload:-3}},
  warship:{label:"Warship",cannon:{damage:0.45,range:0.5,reload:2},siege:{damage:0.45,spread:0.4,reload:4}}
};
const LESSER_MAGIC_CANNON_DAMAGE={Arcanium:1.31,Acid:1.346,Ash:1.346,Crystal:1.444,Earth:1.51,Explosion:1.412,Fire:1.313,Glass:1.379,Ice:1.477,Light:1.313,Lightning:1.346,Magma:1.379,Metal:1.543,Plasma:1.281,Poison:1.183,Sand:1.477,Shadow:1.444,Snow:1.412,Water:1.379,Wind:1.281,Wood:1.444};
const MAGIC_RANGE={Arcanium:.8,Acid:.8,Ash:.76,Crystal:.72,Earth:.56,Explosion:.68,Fire:.8,Glass:.8,Ice:.68,Light:1.28,Lightning:1.12,Magma:.56,Metal:.52,Plasma:1,Poison:.8,Sand:.76,Shadow:.96,Snow:.88,Water:.8,Wind:1.08,Wood:.64};
const LESSER_MAGIC_MORTAR_DAMAGE={Arcanium:1.765,Acid:1.744,Ash:1.744,Crystal:1.877,Earth:1.965,Explosion:1.833,Fire:1.7,Glass:1.788,Ice:1.921,Light:1.7,Lightning:1.744,Magma:1.788,Metal:2.009,Plasma:1.656,Poison:1.524,Sand:1.921,Shadow:1.877,Snow:1.833,Water:1.788,Wind:1.656,Wood:1.877};
const MAGIC_MORTAR_RANGE={Arcanium:1,Acid:1,Ash:0.95,Crystal:0.9,Earth:0.7,Explosion:0.85,Fire:1,Glass:1.05,Ice:0.85,Light:1.6,Lightning:1.4,Magma:0.7,Metal:0.65,Plasma:1.25,Poison:1,Sand:0.95,Shadow:1.2,Snow:1.1,Water:1,Wind:1.35,Wood:0.8};
const SHIP_PICKER_SORTS={
  "hull-select":[["durability","Durability"],["stability","Stability"],["turning","Turning"],["speed","Speed"],["ramDefense","Ram Defense"]],
  "sail-select":[["speed","Speed"],["sailResilience","Sail Resilience"],["ramStrength","Ram Strength"]],
  "cannon-select":[["damageMultiplier","Damage"],["rangeMultiplier","Range"],["reload","Reload"]],
  "siege-select":[["damageMultiplier","Damage"],["rangeMultiplier","Range"],["spreadMultiplier","Spread"],["reload","Reload"]]
};
const SHIP_PICKER_SORT_STATE={
  "hull-select":{key:"durability",descending:true},
  "sail-select":{key:"speed",descending:true},
  "cannon-select":{key:"damageMultiplier",descending:true},
  "siege-select":{key:"damageMultiplier",descending:true}
};
const SHIP_BUILD_STORAGE_KEY="ao-ship-builder-v1";
const SAVED_SHIP_BUILDS_KEY="ao-ship-builder-presets-v1";
let savedShipBuilds=[];
let shipSaveTimer;
let shipToastTimer;
for(const magic of MAGIC_NAMES){
  CANNONS.push({name:`Lesser ${magic} Cannons`,level:100,damage:LESSER_MAGIC_CANNON_DAMAGE[magic],range:MAGIC_RANGE[magic]||1,reload:5,magicStorage:150});
  SIEGE_WEAPONS.push({name:`Lesser ${magic} Mortars`,level:150,damage:LESSER_MAGIC_MORTAR_DAMAGE[magic],range:MAGIC_MORTAR_RANGE[magic],spread:1,fuseLength:1,reload:10,speed:-3,magicStorage:225});
}
const RAMS=[
  ["Lesser Arcanium Ram",90,{durability:225,ramStrength:1870,ramDefense:103,magicStorage:360,ramSpeed:1.5}],
  ["Hammerhead Ram",120,{durability:600,ramStrength:2086,ramSpeed:1.7}],
  ["Beast Bone Ram",120,{durability:600,ramStrength:2302,ramSpeed:1.7}],
  ["Steel Axe Ram",150,{durability:750,ramStrength:2275,ramSpeed:1.5}],
  ["Steel Battering Ram",150,{durability:375,ramStrength:2950,ramDefense:172,ramSpeed:1.4}],
  ["Steel Blade Ram",150,{durability:750,ramStrength:2275,ramSpeed:1.5}],
  ["Steel Cleaving Ram",150,{durability:375,ramStrength:2950,ramDefense:172,ramSpeed:1.4}],
  ["Steel Reinforced Ram",150,{durability:187,ramStrength:1600,ramDefense:690,ramSpeed:1.6}],
  ["Steel Spiked Ram",150,{durability:375,ramStrength:2275,ramDefense:345,ramSpeed:1.5}]
].map(([name,level,stats])=>({name,level,stats}));

function optionHTML(items,selected){return items.map((item,index)=>`<option value="${index}"${item.name===selected?" selected":""}>${item.name} · Lv ${item.level}+</option>`).join("")}
function formatShipEnchantStats(stats){
  return Object.entries(stats||{}).filter(([,value])=>value!==0).map(([key,value])=>{
    const label=SHIP_STAT_LABELS[key]||({damageBonus:"Damage Bonus",rangeBonus:"Range Bonus",spreadBonus:"Spread Bonus",reloadModifier:"Reload Modifier",damageMultiplier:"Damage",rangeMultiplier:"Range",spreadMultiplier:"Spread",reload:"Reload",ramSpeed:"Ram Speed",spread:"Spread",fuseLength:"Fuse Length"}[key]||key);
    const signedValue=key!=="reload"&&key!=="fuseLength";
    const formatted=key.endsWith("Multiplier")?`x${value}`:key==="stability"||key==="sailResilience"?`${value>0?"+":""}${value}%`:signedValue?`${value>0?"+":""}${value}`:value;
    return `${label} ${formatted}`;
  }).join(" · ")||"No bonus";
}
function formatShipEnchantStatsHTML(stats){
  return Object.entries(stats||{}).filter(([,value])=>value!==0).map(([key,value])=>{
    const icon=SHIP_STAT_ICONS[key]?`<img class="ship-inline-stat-icon" src="assets/${SHIP_STAT_ICONS[key]}" alt="">`:"";
    const label=SHIP_STAT_LABELS[key]||({damageBonus:"Damage Bonus",rangeBonus:"Range Bonus",spreadBonus:"Spread Bonus",reloadModifier:"Reload Modifier",damageMultiplier:"Damage",rangeMultiplier:"Range",spreadMultiplier:"Spread",reload:"Reload",ramSpeed:"Ram Speed",spread:"Spread",fuseLength:"Fuse Length"}[key]||key);
    const signedValue=key!=="reload"&&key!=="fuseLength";
    const formatted=key.endsWith("Multiplier")?`x${value}`:key==="stability"||key==="sailResilience"?`${value>0?"+":""}${value}%`:signedValue?`${value>0?"+":""}${value}`:value;
    return `<span class="ship-inline-stat">${icon}${label} ${formatted}</span>`;
  }).join("")||"<span>No bonus</span>";
}
function adjustReload(reload,modifier){
  if(!modifier)return reload;
  if(typeof reload==="number")return reload+modifier;
  if(typeof reload==="string"&&/^\d+(?: or \d+)+$/.test(reload))return reload.split(" or ").map(value=>Number(value)+modifier).join(" or ");
  return reload;
}
function combineShipStats(...groups){
  return groups.reduce((combined,stats)=>{
    for(const [key,value]of Object.entries(stats||{}))combined[key]=(combined[key]||0)+value;
    return combined;
  },{});
}
function getCannonEnchantPreviewStats(value,selectId){
  const enchant=CANNON_ENCHANTS[value];
  const stats=selectId==="siege-enchant-select"?enchant?.siege||{}:enchant?.cannon||{};
  return {
    ...(stats.damage===undefined?{}:{damageBonus:stats.damage}),
    ...(stats.range===undefined?{}:{rangeBonus:stats.range}),
    ...(stats.spread===undefined?{}:{spreadBonus:stats.spread}),
    ...(stats.reload===undefined?{}:{reloadModifier:stats.reload})
  };
}
function loadStoredShipBuild(){
  try{
    const saved=JSON.parse(localStorage.getItem(SHIP_BUILD_STORAGE_KEY));
    return saved&&typeof saved==="object"?saved:null;
  }catch(error){console.warn("Could not read the saved ship.",error);return null;}
}
function loadSavedShipBuilds(){
  try{
    const saved=JSON.parse(localStorage.getItem(SAVED_SHIP_BUILDS_KEY));
    return Array.isArray(saved)?saved.filter(entry=>entry&&typeof entry.name==="string"&&entry.build&&typeof entry.build==="object"):[];
  }catch(error){console.warn("Could not read saved ships.",error);return [];}
}
function getShipBuildState(){
  return {
    name:document.getElementById("ship-build-name").value,
    ship:document.getElementById("ship-select").value,
    crew:document.getElementById("crew-select").value,
    attachments:[...document.querySelectorAll("[data-rowboat-attachment]")].map(select=>select.value),
    quartermasters:[...document.querySelectorAll("[data-quartermaster]")].map(select=>select.value),
    deckhands:[...document.querySelectorAll("[data-deckhand-type]")].map(select=>select.value),
    magic:document.getElementById("magic-select").value,
    hull:document.getElementById("hull-select").value,
    hullEnchant:document.getElementById("hull-enchant-select").value,
    sail:document.getElementById("sail-select").value,
    sailEnchant:document.getElementById("sail-enchant-select").value,
    cannon:document.getElementById("cannon-select").value,
    cannonEnchant:document.getElementById("cannon-enchant-select").value,
    siege:document.getElementById("siege-select").value,
    siegeEnchant:document.getElementById("siege-enchant-select").value,
    ram:document.getElementById("ram-select").value,
    ramEnchant:document.getElementById("ram-enchant-select").value
  };
}
function persistShipBuild(){
  clearTimeout(shipSaveTimer);
  const status=document.getElementById("ship-save-state");
  if(status)status.textContent="Saving…";
  shipSaveTimer=setTimeout(()=>{
    try{
      localStorage.setItem(SHIP_BUILD_STORAGE_KEY,JSON.stringify(getShipBuildState()));
      if(status)status.textContent="Changes save locally";
    }catch(error){
      if(status)status.textContent="Could not save locally";
      console.error("Could not save the current ship setup.",error);
    }
  },180);
}
function renderSavedShipBuilds(selectedName=""){
  const select=document.getElementById("saved-ship-build-select");
  const sorted=[...savedShipBuilds].sort((a,b)=>a.name.localeCompare(b.name));
  const placeholder=new Option(sorted.length?"Choose a saved ship":"No saved ships","");
  select.replaceChildren(placeholder,...sorted.map(entry=>new Option(entry.name,entry.name)));
  select.value=sorted.some(entry=>entry.name===selectedName)?selectedName:"";
  syncSavedShipBuildButtons();
}
function syncSavedShipBuildButtons(){
  const disabled=!document.getElementById("saved-ship-build-select").value;
  for(const id of ["load-named-ship-build","update-named-ship-build","delete-named-ship-build"])document.getElementById(id).disabled=disabled;
}
function showShipToast(message){
  const toast=document.getElementById("ship-toast");
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(shipToastTimer);
  shipToastTimer=setTimeout(()=>toast.classList.remove("show"),2200);
}
function saveNamedShipBuild(){
  const name=document.getElementById("ship-build-name").value.trim();
  if(!name){
    document.getElementById("ship-build-name").focus();
    showShipToast("Enter a ship name before saving.");
    return;
  }
  const next=[...savedShipBuilds];
  const existingIndex=next.findIndex(entry=>entry.name.toLowerCase()===name.toLowerCase());
  const savedSet={name,build:{...structuredClone(getShipBuildState()),name}};
  if(existingIndex<0)next.push(savedSet);
  else next[existingIndex]=savedSet;
  try{
    localStorage.setItem(SAVED_SHIP_BUILDS_KEY,JSON.stringify(next));
    savedShipBuilds=next;
    renderSavedShipBuilds(name);
    showShipToast(existingIndex<0?"Ship saved.":"Saved ship updated.");
  }catch(error){console.error("Could not save this ship.",error);showShipToast("Could not save this ship locally.");}
}
function updateSavedShipBuild(){
  const selectedName=document.getElementById("saved-ship-build-select").value;
  const selectedIndex=savedShipBuilds.findIndex(entry=>entry.name===selectedName);
  if(selectedIndex<0)return;
  const updated=[...savedShipBuilds];
  const selectedSet=updated[selectedIndex];
  updated[selectedIndex]={...selectedSet,build:{...structuredClone(getShipBuildState()),name:selectedSet.name}};
  try{
    localStorage.setItem(SAVED_SHIP_BUILDS_KEY,JSON.stringify(updated));
    savedShipBuilds=updated;
    renderSavedShipBuilds(selectedSet.name);
    showShipToast("Saved ship updated.");
  }catch(error){console.error("Could not update the saved ship.",error);showShipToast("Could not update this ship locally.");}
}
function deleteSavedShipBuild(){
  const selectedName=document.getElementById("saved-ship-build-select").value;
  const selectedIndex=savedShipBuilds.findIndex(entry=>entry.name===selectedName);
  if(selectedIndex<0)return;
  if(!confirm(`Delete the saved ship "${selectedName}"?`))return;
  const remaining=savedShipBuilds.filter((_,index)=>index!==selectedIndex);
  try{
    localStorage.setItem(SAVED_SHIP_BUILDS_KEY,JSON.stringify(remaining));
    savedShipBuilds=remaining;
    renderSavedShipBuilds();
    showShipToast("Saved ship deleted.");
  }catch(error){console.error("Could not delete the saved ship.",error);showShipToast("Could not delete the saved ship locally.");}
}
function findShip(){return SHIPS.find(s=>s.id===document.getElementById("ship-select").value)||null}
function updateShipWeaponAvailability(){
  const ship=findShip();
  for(const [rowId,selectId,available]of [
    ["siege-part-row","siege-select",Boolean(ship?.canUseSiegeWeapons)],
    ["ram-part-row","ram-select",Boolean(ship?.canUseRam)]
  ]){
    document.getElementById(rowId).hidden=!available;
    if(available)continue;
    document.getElementById(selectId).value="";
    document.getElementById(`${selectId==="siege-select"?"siege":"ram"}-enchant-select`).value="none";
    document.getElementById(selectId)._shipPreviewRefresh?.();
    document.getElementById(`${selectId==="siege-select"?"siege":"ram"}-enchant-select`)._shipPreviewRefresh?.();
  }
}
function calculate(){
  const ship=findShip();
  const hullValue=document.getElementById("hull-select").value;
  const hull=hullValue===""?null:HULLS[Number(hullValue)];
  const sailValue=document.getElementById("sail-select").value;
  const sail=sailValue===""?null:SAILS[Number(sailValue)];
  const ramValue=document.getElementById("ram-select").value;
  const ram=ramValue===""?null:RAMS[Number(ramValue)];
  if(!document.getElementById("ship-select").value){
    document.getElementById("ship-name").textContent="Select a ship";
    document.getElementById("ship-preview").removeAttribute("src");
    document.getElementById("ship-preview").alt="";
    document.getElementById("ship-level-note").textContent="No ship selected";
    document.getElementById("ship-stat-list").innerHTML="";
    document.getElementById("ship-part-details").innerHTML="";
    return;
  }
  const crew=SHIP_CREWS[Number(document.getElementById("crew-select").value)]||SHIP_CREWS[0];
  const cannonValue=document.getElementById("cannon-select").value;
  const cannon=cannonValue===""?null:CANNONS[Number(cannonValue)];
  const cannonEnchant=CANNON_ENCHANTS[document.getElementById("cannon-enchant-select").value]||CANNON_ENCHANTS.none;
  const cannonEnchantStats=cannonEnchant.cannon||{};
  const siegeValue=document.getElementById("siege-select").value;
  const siege=siegeValue===""?null:SIEGE_WEAPONS[Number(siegeValue)];
  const siegeEnchant=CANNON_ENCHANTS[document.getElementById("siege-enchant-select").value]||CANNON_ENCHANTS.none;
  const siegeEnchantStats=siegeEnchant.siege||{};
  const totals={...ship.stats};
  for(const stats of [hull?.stats,sail?.stats,ram?.stats]){
    for(const [key,value]of Object.entries(stats||{})){
      if(key==="ramSpeed")continue;
      totals[key]=(totals[key]||0)+value;
    }
  }
  for(const weapon of [cannon,siege]){
    if(weapon?.magicStorage)totals.magicStorage=(totals.magicStorage||0)+weapon.magicStorage;
  }
  for(const [key,value]of Object.entries(crew.stats))totals[key]=(totals[key]||0)+value;
  const selectedAttachments=[...document.querySelectorAll("[data-rowboat-attachment]")]
    .map(select=>ROWBOAT_ATTACHMENTS.find(entry=>entry.name===select.value))
    .filter(Boolean);
  for(const attachment of selectedAttachments){
    for(const [key,value]of Object.entries(attachment.stats))totals[key]=(totals[key]||0)+value;
  }
  for(const deckhand of document.querySelectorAll("[data-deckhand-type]")){
    if(!deckhand.value)continue;
    const selected=DECKHAND_TYPES.find(entry=>entry.name===deckhand.value);
    if(!selected)continue;
    for(const [key,value]of Object.entries(selected.stats))totals[key]=(totals[key]||0)+value;
  }
  for(const quartermaster of document.querySelectorAll("[data-quartermaster]")){
    const selected=QUARTERMASTERS.find(entry=>entry.name===quartermaster.value);
    for(const [key,value]of Object.entries(selected?.stats||{}))totals[key]=(totals[key]||0)+value;
  }
  const hullEnchant=COMPONENT_ENCHANTS[document.getElementById("hull-enchant-select").value]||COMPONENT_ENCHANTS.none;
  const sailEnchant=COMPONENT_ENCHANTS[document.getElementById("sail-enchant-select").value]||COMPONENT_ENCHANTS.none;
  const ramEnchant=COMPONENT_ENCHANTS[document.getElementById("ram-enchant-select").value]||COMPONENT_ENCHANTS.none;
  for(const [key,value]of Object.entries(hullEnchant.stats||{}))if(key!=="ramSpeed")totals[key]=(totals[key]||0)+value;
  for(const [key,value]of Object.entries(sailEnchant.stats||{}))if(key!=="ramSpeed")totals[key]=(totals[key]||0)+value;
  for(const [key,value]of Object.entries(ramEnchant.stats||{}))if(key!=="ramSpeed")totals[key]=(totals[key]||0)+value;
  document.getElementById("ship-name").textContent=ship.name;
  document.getElementById("ship-preview").src=`assets/${ship.image}`;
  document.getElementById("ship-preview").alt=ship.name;
  document.getElementById("ship-level-note").textContent=`Level ${ship.level}+`;
  document.getElementById("ship-stat-list").innerHTML=SHIP_STAT_KEYS.filter(key=>totals[key]!==undefined).map(key=>{
    const icon=SHIP_STAT_ICONS[key]?`<img src="assets/${SHIP_STAT_ICONS[key]}" alt="${SHIP_STAT_LABELS[key]}">`:"";
    const value=key==="stability"||key==="sailResilience"?`${totals[key]}%`:totals[key];
    return `<div class="ship-stat-row">${icon}<span>${SHIP_STAT_LABELS[key]}</span><b>${value}</b></div>`;
  }).join("");
  const selectedDeckhands=[...document.querySelectorAll("[data-deckhand-type]")]
    .map((select,index)=>({index:index+1,type:DECKHAND_TYPES.find(entry=>entry.name===select.value)}))
    .filter(entry=>entry.type);
  const deckhandStats=selectedDeckhands.reduce((combined,entry)=>{
    for(const [key,value]of Object.entries(entry.type.stats))combined[key]=(combined[key]||0)+value;
    return combined;
  },{});
  const selectedQuartermasters=[...document.querySelectorAll("[data-quartermaster]")]
    .map((select,index)=>({index:index+1,quartermaster:QUARTERMASTERS.find(entry=>entry.name===select.value)||QUARTERMASTERS[0]}))
    .filter(entry=>entry.quartermaster.name!=="None");
  const quartermasterStats=selectedQuartermasters.reduce((combined,entry)=>{
    for(const [key,value]of Object.entries(entry.quartermaster.stats))combined[key]=(combined[key]||0)+value;
    return combined;
  },{});
  const attachmentStats=selectedAttachments.reduce((combined,entry)=>{
    for(const [key,value]of Object.entries(entry.stats))combined[key]=(combined[key]||0)+value;
    return combined;
  },{});
  const attachmentPart=selectedAttachments.length?{
    name:selectedAttachments.map(entry=>entry.name).join(", "),
    level:selectedAttachments[0].level
  }:{name:"None"};
  document.getElementById("ship-part-details").innerHTML=[
    {label:"Hull",part:hull,enchant:hullEnchant,stats:hull?combineShipStats(hull.stats,hullEnchant.stats):{}},
    {label:"Sailcloth",part:sail,enchant:sailEnchant,stats:sail?combineShipStats(sail.stats,sailEnchant.stats):{}},
    {label:"Cannon",part:cannon,enchant:cannonEnchant,stats:cannon?{damageMultiplier:cannon.damage+(cannonEnchantStats.damage||0),rangeMultiplier:cannon.range+(cannonEnchantStats.range||0),reload:cannon.reload+(cannonEnchantStats.reload||0),...(cannon.magicStorage===undefined?{}:{magicStorage:cannon.magicStorage})}:{}},
    ...(ship.canUseSiegeWeapons?[{label:"Siege Weapon",part:siege,enchant:siegeEnchant,stats:siege?{damageMultiplier:siege.damage+(siegeEnchantStats.damage||0),rangeMultiplier:siege.range+(siegeEnchantStats.range||0),spreadMultiplier:siege.spread+(siegeEnchantStats.spread||0),fuseLength:siege.fuseLength,reload:adjustReload(siege.reload,siegeEnchantStats.reload||0),speed:siege.speed,...(siege.magicStorage===undefined?{}:{magicStorage:siege.magicStorage})}:{}}]:[]),
    ...(ship.canUseRam?[{label:"Ram",part:ram,enchant:ramEnchant,stats:ram?combineShipStats(ram.stats,ramEnchant.stats):{}}]:[]),
    {label:"Crew",part:crew,stats:crew.stats},
    {label:"Quartermasters",part:{name:selectedQuartermasters.length?selectedQuartermasters.map(entry=>entry.quartermaster.name).join(", "):"No quartermasters selected"},stats:quartermasterStats},
    {label:"Deckhands",part:{name:selectedDeckhands.length?selectedDeckhands.map(entry=>`${entry.type.name} ${entry.index}`).join(", "):"No deckhands selected"},stats:deckhandStats},
    {label:"Rowboat Attachments",part:attachmentPart,stats:attachmentStats}
  ].map(({label,part,stats,enchant})=>{
    const items=Object.entries(stats||{}).map(([key,value])=>{
      const labelText=SHIP_STAT_LABELS[key]||({damage:"Damage Bonus",range:"Range Bonus",damageMultiplier:"Damage",rangeMultiplier:"Range",spread:"Spread",spreadMultiplier:"Spread",fuseLength:"Fuse Length",reload:"Reload"}[key]||key);
      const icon=SHIP_STAT_ICONS[key]?`<img class="ship-inline-stat-icon" src="assets/${SHIP_STAT_ICONS[key]}" alt="">`:"";
      const formatted=key.endsWith("Multiplier")?`x${value}`:key==="stability"||key==="sailResilience"?value+"%":value;
      return `<span class="ship-part-stat">${icon}${labelText}: <b>${formatted}</b></span>`;
    }).join("");
    const enchantLabel=enchant?.label&&enchant.label!=="No enchant"?` · ${enchant.label}`:"";
    return `<article class="ship-part-card"><span>${label}</span><h3>${part?.name||"None"}</h3><small>Level ${part?.level||ship.level}+${enchantLabel}</small><div>${items||"No stat changes"}</div></article>`;
  }).join("");
}
function getShipOptionStats(selectId,value){
  if(value==="")return {};
  if(selectId==="hull-select"){const item=HULLS[Number(value)];return item?.stats||{};}
  if(selectId==="sail-select"){const item=SAILS[Number(value)];return item?.stats||{};}
  if(selectId==="cannon-select"){const item=CANNONS[Number(value)];return item?{damageMultiplier:item.damage,rangeMultiplier:item.range,reload:item.reload,...(item.magicStorage===undefined?{}:{magicStorage:item.magicStorage})}:{};}
  if(selectId==="siege-select"){const item=SIEGE_WEAPONS[Number(value)];return item?{damageMultiplier:item.damage,rangeMultiplier:item.range,spreadMultiplier:item.spread,fuseLength:item.fuseLength,reload:item.reload,speed:item.speed,...(item.magicStorage===undefined?{}:{magicStorage:item.magicStorage})}:{};}
  if(selectId==="ram-select"){const item=RAMS[Number(value)];return item?.stats||{};}
  if(selectId==="ship-select"){const item=SHIPS.find(entry=>entry.id===value);return item?.stats||{};}
  if(selectId==="crew-select"){const item=SHIP_CREWS[Number(value)];return item?.stats||{};}
  if(selectId==="hull-enchant-select")return COMPONENT_ENCHANTS[value]?.stats||{};
  if(selectId==="sail-enchant-select")return COMPONENT_ENCHANTS[value]?.stats||{};
  if(selectId==="cannon-enchant-select"||selectId==="siege-enchant-select")return getCannonEnchantPreviewStats(value,selectId);
  if(selectId==="ram-enchant-select")return COMPONENT_ENCHANTS[value]?.stats||{};
  return {};
}
function renderShipSearchPicker(selectId){
  const select=document.getElementById(selectId);
  const host=document.querySelector(`[data-ship-picker="${selectId}"]`);
  if(!select||!host)return;
  const label=selectId==="siege-select"?"Siege Weapons":selectId==="siege-enchant-select"?"Siege Weapon Enchant":selectId.replace(/-select$/,"").replace(/(^|-)([a-z])/g,(_,p,c)=>c.toUpperCase()).replace("Hull","Hull Armor").replace("Sail","Sailcloth").replace("Cannon","Cannons").replace("Ram","Ram").replace(/([a-z])([A-Z])/g,"$1 $2");
  const options=[...select.options].filter(option=>option.value!=="");
  const sortOptions=SHIP_PICKER_SORTS[selectId];
  const sortState=SHIP_PICKER_SORT_STATE[selectId];
  const sortControls=sortOptions?`<div class="ship-picker-sort-controls"><select class="ship-picker-sort-key" aria-label="Sort ${label} by">${sortOptions.map(([key,title])=>`<option value="${key}">${title}</option>`).join("")}</select><button class="ship-picker-sort-direction" type="button" aria-label="Toggle sort direction"></button></div>`:"";
  host.innerHTML=`<div class="ship-picker-header"><label class="ship-search-label">${label}<span class="ship-picker-count">${options.length} items</span></label>${sortControls}</div><div class="ship-search-wrap"><input class="ship-search-input" type="search" data-ship-search="${selectId}" placeholder="${select.selectedOptions[0]?.text||`Search ${label.toLowerCase()}...`}" autocomplete="off"><span class="ship-search-icon">⌕</span><div class="ship-picker-results" data-ship-results="${selectId}"></div></div><div class="ship-picker-preview" data-ship-preview="${selectId}"></div>`;
  const input=host.querySelector("input");
  const results=host.querySelector(".ship-picker-results");
  const preview=host.querySelector(".ship-picker-preview");
  const sortKey=host.querySelector(".ship-picker-sort-key");
  const sortDirection=host.querySelector(".ship-picker-sort-direction");
  if(sortKey)sortKey.value=sortState.key;
  const showStats=selectId!=="magic-select"&&selectId!=="ship-select";
  preview.hidden=!showStats;
  const renderResults=()=>{
    const search=input.value.trim().toLowerCase();
    const filtered=options.filter(option=>option.text.toLowerCase().includes(search));
    if(sortState)filtered.sort((left,right)=>{
      const leftValue=Number.parseFloat(getShipOptionStats(selectId,left.value)[sortState.key])||0;
      const rightValue=Number.parseFloat(getShipOptionStats(selectId,right.value)[sortState.key])||0;
      return (rightValue-leftValue)*(sortState.descending?1:-1)||left.text.localeCompare(right.text);
    });
    results.innerHTML=filtered.map(option=>{
      const stats=getShipOptionStats(selectId,option.value);
      const statText=showStats?`<span class="ship-picker-option-stats">${formatShipEnchantStatsHTML(stats)}</span>`:"";
      return `<button type="button" class="ship-picker-option${option.value===select.value?" is-selected":""}" data-ship-value="${selectId}" data-value="${option.value}"><span>${option.text}</span>${statText}</button>`;
    }).join("")||`<div class="ship-picker-empty">No matching items.</div>`;
  };
  if(sortKey)sortKey.addEventListener("change",()=>{sortState.key=sortKey.value;renderResults();});
  if(sortDirection){
    sortDirection.textContent=sortState.descending?"High to low":"Low to high";
    sortDirection.addEventListener("click",()=>{
      sortState.descending=!sortState.descending;
      sortDirection.textContent=sortState.descending?"High to low":"Low to high";
      renderResults();
    });
  }
  input.addEventListener("focus",()=>{results.hidden=false;renderResults();});
  input.addEventListener("input",renderResults);
  results.addEventListener("mousedown",event=>{
    const button=event.target.closest("[data-ship-value]");
    if(!button)return;
    event.preventDefault();
    select.value=button.dataset.value;
    select.dispatchEvent(new Event("change",{bubbles:true}));
    input.value="";
    input.placeholder=button.querySelector(":scope > span")?.textContent||"";
    results.hidden=true;
  });
  document.addEventListener("click",event=>{
    if(!host.contains(event.target))results.hidden=true;
  });
  preview.innerHTML=showStats&&select.value?formatShipEnchantStatsHTML(getShipOptionStats(selectId,select.value)):"";
  select._shipPreviewRefresh=()=>{preview.innerHTML=showStats&&select.value?formatShipEnchantStatsHTML(getShipOptionStats(selectId,select.value)):"";input.placeholder=select.selectedOptions[0]?.text||"";};
  renderResults();
  results.hidden=true;
}
function refreshAllShipPickers(){
  for(const selectId of ["ship-select","crew-select","magic-select","hull-select","sail-select","cannon-select","siege-select","ram-select","hull-enchant-select","sail-enchant-select","cannon-enchant-select","siege-enchant-select","ram-enchant-select"])renderShipSearchPicker(selectId);
}
function renderShipSlotPicker(container,label,options,statsGetter,attributeName,optionFilter){
  const selectIndex=container.querySelectorAll("select").length;
  const selectId=`${attributeName}-${selectIndex}-${Date.now()}`;
  container.innerHTML=`<label>${label}</label><div class="ship-slot-search-picker"><input type="search" class="ship-slot-search" placeholder="Search ${label.toLowerCase()}..." autocomplete="off"><span class="ship-search-icon">⌕</span><div class="ship-slot-results" hidden></div><div class="ship-slot-preview"></div><select hidden ${attributeName}="" id="${selectId}"><option value="">None</option>${options.map(option=>`<option value="${option.value||option.name||option}">${option.label||option.name||option}</option>`).join("")}</select></div>`;
  const select=container.querySelector("select");
  const input=container.querySelector("input");
  const results=container.querySelector(".ship-slot-results");
  const preview=container.querySelector(".ship-slot-preview");
  const renderResults=()=>{
    const search=input.value.toLowerCase();
    const availableOptions=optionFilter?options.filter(option=>optionFilter(option,select)):options;
    results.innerHTML=availableOptions.filter(option=>{
      const labelText=option.label||option.name||option;
      return labelText.toLowerCase().includes(search);
    }).map(option=>{
      const value=option.value||option.name||option;
      const stats=statsGetter(option);
      return `<button type="button" class="ship-slot-option" data-slot-value="${value}"><span>${option.label||option.name||option}</span><span class="ship-picker-option-stats">${formatShipEnchantStatsHTML(stats)}</span></button>`;
    }).join("")||'<div class="ship-picker-empty">No matching choices.</div>';
  };
  input.addEventListener("focus",()=>{results.hidden=false;renderResults();});
  input.addEventListener("input",renderResults);
  results.addEventListener("mousedown",event=>{
    const button=event.target.closest("[data-slot-value]");
    if(!button)return;
    event.preventDefault();
    select.value=button.dataset.slotValue;
    input.value=button.querySelector("span")?.textContent||button.dataset.slotValue;
    preview.innerHTML=formatShipEnchantStatsHTML(statsGetter({name:select.value,value:select.value}));
    results.hidden=true;
    select.dispatchEvent(new Event("change",{bubbles:true}));
  });
  select.addEventListener("change",()=>{calculate();persistShipBuild();});
  container._shipSlotRefresh=renderResults;
  document.addEventListener("click",event=>{if(!container.contains(event.target))results.hidden=true;});
}
function init(){
  for(const [containerId,selectId]of [["ship-picker","ship-select"],["crew-picker","crew-select"],["magic-picker","magic-select"]]){
    document.getElementById(containerId).innerHTML=`<select id="${selectId}" hidden></select><div class="ship-search-picker" data-ship-picker="${selectId}"></div>`;
  }
  for(const [containerId,selectId]of [["hull-picker","hull-select"],["sail-picker","sail-select"],["cannon-picker","cannon-select"],["siege-picker","siege-select"],["ram-picker","ram-select"],["hull-enchant-picker","hull-enchant-select"],["sail-enchant-picker","sail-enchant-select"],["cannon-enchant-picker","cannon-enchant-select"],["siege-enchant-picker","siege-enchant-select"],["ram-enchant-picker","ram-enchant-select"]]){
    document.getElementById(containerId).innerHTML=`<select id="${selectId}" hidden></select><div class="ship-search-picker" data-ship-picker="${selectId}"></div>`;
  }
  document.getElementById("ship-select").innerHTML=`<option value="">Select ship</option>`+SHIPS.map(s=>`<option value="${s.id}">${s.name}</option>`).join("");
  document.getElementById("crew-select").innerHTML=`<option value="">Select crew</option>`+SHIP_CREWS.map((crew,i)=>`<option value="${i}">${crew.name}</option>`).join("");
  document.getElementById("magic-select").innerHTML=`<option value="">No magic selected</option>`+["Arcanium",...MAGIC_NAMES.filter(name=>name!=="Arcanium")].map(name=>`<option value="${name}">${name}</option>`).join("");
  document.getElementById("hull-select").innerHTML=`<option value="">Select hull armor</option>`+HULLS.map((p,i)=>`<option value="${i}"${false?` selected`:``}>${p.name}</option>`).join("");
  document.getElementById("sail-select").innerHTML=`<option value="">Select sailcloth</option>`+SAILS.map((p,i)=>`<option value="${i}">${p.name}</option>`).join("");
  const populateMagicParts=()=>{
    const magic=document.getElementById("magic-select").value;
    const cannonParts=CANNONS.filter(part=>{
      if(!magic)return !/^(Lesser|Dull|Standard) /.test(part.name);
      return part.name.endsWith(` ${magic} Cannons`);
    });
    const cannonSelect=document.getElementById("cannon-select");
    const cannonValue=cannonSelect.value;
    cannonSelect.innerHTML=`<option value="">Select cannon</option>`+cannonParts.map(part=>{
      const index=CANNONS.indexOf(part);
      return `<option value="${index}">${part.name}</option>`;
    }).join("");
    cannonSelect.value="";
    const siegeParts=SIEGE_WEAPONS.filter(part=>{
      if(!magic)return !/^(Lesser|Dull|Standard) /.test(part.name);
      return part.name.endsWith(` ${magic} Mortars`);
    });
    const siegeSelect=document.getElementById("siege-select");
    siegeSelect.innerHTML=`<option value="">Select siege weapon</option>`+siegeParts.map(part=>{
      const index=SIEGE_WEAPONS.indexOf(part);
      return `<option value="${index}">${part.name}</option>`;
    }).join("");
    siegeSelect.value="";
    const ramParts=RAMS.filter(part=>{
      if(!magic)return !/^(Lesser|Dull|Standard) /.test(part.name);
      if(magic==="Arcanium")return part.name==="Lesser Arcanium Ram";
      return part.name.endsWith(` ${magic} Ram`);
    });
    const ramSelect=document.getElementById("ram-select");
    const ramValue=ramSelect.value;
    ramSelect.innerHTML=`<option value="">Select ram</option>`+ramParts.map(part=>{
      const index=RAMS.indexOf(part);
      return `<option value="${index}">${part.name}</option>`;
    }).join("");
    ramSelect.value="";
    renderShipSearchPicker("cannon-select");
    renderShipSearchPicker("siege-select");
    renderShipSearchPicker("ram-select");
  };
  populateMagicParts();
  const populateRowboatAttachments=()=>{
    const ship=findShip();
    const picker=document.getElementById("rowboat-attachment-picker");
    const previousValues=[...picker.querySelectorAll("[data-rowboat-attachment]")].map(select=>select.value);
    const slotCount=ship?.attachmentSlots||0;
    picker.hidden=!slotCount;
    picker.innerHTML=slotCount?`<div class="ship-field"><span>ROWBOAT ATTACHMENTS</span><div class="rowboat-attachment-slots">${Array.from({length:slotCount},(_,index)=>`
      <div class="ship-slot-picker" data-rowboat-attachment-slot="${index}"></div>`).join("")}</div></div>`:"";
    const options=[{name:"None",stats:{}},...ROWBOAT_ATTACHMENTS].map(item=>({value:item.name,label:item.name}));
    picker.querySelectorAll("[data-rowboat-attachment-slot]").forEach((container,index)=>{
      renderShipSlotPicker(container,`ROWBOAT ATTACHMENT ${index+1}`,options,option=>ROWBOAT_ATTACHMENTS.find(entry=>entry.name===option.value)?.stats||{},"data-rowboat-attachment");
      const select=container.querySelector("select");
      select.value=previousValues[index]||"";
      if(select.value){
        const selectedOption=options.find(option=>option.value===select.value);
        container.querySelector(".ship-slot-search").value=selectedOption.label;
        container.querySelector(".ship-slot-preview").innerHTML=formatShipEnchantStatsHTML(ROWBOAT_ATTACHMENTS.find(entry=>entry.name===select.value)?.stats||{});
      }
    });
  };
  const populateDeckhands=()=>{
    const ship=findShip();
    const count=ship?.deckhands||0;
    populateRowboatAttachments();
    document.getElementById("quartermaster-slots").innerHTML=Array.from({length:ship?.quartermasters||0},(_,index)=>`
      <div class="ship-slot-picker" data-quartermaster-slot="${index}"><label>QUARTERMASTER ${index+1}</label></div>`).join("")||( "<span>None available</span>");
    document.querySelectorAll("[data-quartermaster-slot]").forEach((container,index)=>{
      renderShipSlotPicker(container,`QUARTERMASTER ${index+1}`,QUARTERMASTERS.map(q=>({value:q.name,label:q.name})),option=>QUARTERMASTERS.find(q=>q.name===option.value)?.stats||{},"data-quartermaster",(option,select)=>{
        const value=option.value||option.name||option;
        return value==="None"||![...document.querySelectorAll("[data-quartermaster]")].some(other=>other!==select&&other.value===value);
      });
    });
    document.getElementById("deckhand-slots").innerHTML=Array.from({length:count},(_,index)=>`
      <div data-deckhand-slot="${index}"></div>`).join("");
    document.querySelectorAll("[data-deckhand-slot]").forEach((container,index)=>{
      renderShipSlotPicker(container,`DECKHAND ${index+1}`,DECKHAND_TYPES.map(type=>({value:type.name,label:type.name})),option=>DECKHAND_TYPES.find(type=>type.name===option.value)?.stats||{},"data-deckhand-type");
    });
  };
  populateDeckhands();
  const populateEnchants=()=>{
    document.getElementById("hull-enchant-select").innerHTML=[
      ["none","No enchant"],["powerfulHull","Powerful"],["armoredHull","Armored"],["briskHull","Brisk"],["warshipHull","Warship"]
    ].map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
    document.getElementById("sail-enchant-select").innerHTML=[
      ["none","No enchant"],["reinforced","Reinforced"],["armoredSail","Armored"],["briskSail","Brisk"],["warshipSail","Warship"]
    ].map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
    document.getElementById("ram-enchant-select").innerHTML=[
      ["none","No enchant"],["powerfulRam","Powerful"],["armoredRam","Armored"],["briskRam","Brisk"],["warshipRam","Warship"]
    ].map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
    const cannonEnchantOptions=[
      ["none","No enchant"],["powerful","Powerful"],["charged","Charged"],["enhanced","Enhanced"],["brisk","Brisk"],["warship","Warship"]
    ];
    const siegeEnchantOptions=[...cannonEnchantOptions.slice(0,4),["explosive","Explosive"],...cannonEnchantOptions.slice(4)];
    document.getElementById("cannon-enchant-select").innerHTML=cannonEnchantOptions.map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
    document.getElementById("siege-enchant-select").innerHTML=siegeEnchantOptions.map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
  };
  populateEnchants();
  updateShipWeaponAvailability();
  refreshAllShipPickers();
  const reconcileWarshipEnchants=(changedId="")=>{
    const ids=["hull-enchant-select","sail-enchant-select","cannon-enchant-select","siege-enchant-select","ram-enchant-select"];
    const warshipValues={ "hull-enchant-select":"warshipHull","sail-enchant-select":"warshipSail","cannon-enchant-select":"warship","siege-enchant-select":"warship","ram-enchant-select":"warshipRam"};
    const occupied=ids.find(id=>id!==changedId&&document.getElementById(id).value===warshipValues[id]);
    const changed=document.getElementById(changedId);
    if(changed&&warshipValues[changedId]===changed.value&&occupied){
      changed.value="none";
    }
    const warshipUsed=ids.some(id=>document.getElementById(id).value===warshipValues[id]);
    for(const id of ids){
      const select=document.getElementById(id);
      const warshipOption=[...select.options].find(entry=>entry.value===warshipValues[id]);
      if(warshipOption)warshipOption.disabled=warshipUsed&&select.value!==warshipValues[id];
    }
  };
  const restoreShipSlotValues=(selector,values,statsGetter)=>{
    const savedValues=Array.isArray(values)?values:[];
    document.querySelectorAll(selector).forEach((container,index)=>{
      const select=container.querySelector("select");
      const value=typeof savedValues[index]==="string"?savedValues[index]:"";
      select.value=value;
      const selectedOption=[...select.options].find(option=>option.value===select.value);
      container.querySelector(".ship-slot-search").value=select.value?(selectedOption?.textContent||select.value):"";
      container.querySelector(".ship-slot-preview").innerHTML=formatShipEnchantStatsHTML(statsGetter(select.value));
    });
  };
  const applyShipBuildState=state=>{
    const saved=state&&typeof state==="object"?state:{};
    const setValue=(id,value)=>{
      const select=document.getElementById(id);
      const requested=typeof value==="string"||typeof value==="number"?String(value):"";
      select.value=requested;
      if(select.value!==requested)select.value=select.options[0]?.value||"";
    };
    document.getElementById("ship-build-name").value=typeof saved.name==="string"?saved.name:"";
    setValue("ship-select",saved.ship);
    populateDeckhands();
    setValue("magic-select",saved.magic);
    populateMagicParts();
    for(const [id,value]of [
      ["crew-select",saved.crew],["hull-select",saved.hull],["hull-enchant-select",saved.hullEnchant||"none"],
      ["sail-select",saved.sail],["sail-enchant-select",saved.sailEnchant||"none"],
      ["cannon-select",saved.cannon],["cannon-enchant-select",saved.cannonEnchant||"none"],
      ["siege-select",saved.siege],["siege-enchant-select",saved.siegeEnchant||"none"],
      ["ram-select",saved.ram],["ram-enchant-select",saved.ramEnchant||"none"]
    ])setValue(id,value);
    updateShipWeaponAvailability();
    restoreShipSlotValues("[data-rowboat-attachment-slot]",saved.attachments,value=>ROWBOAT_ATTACHMENTS.find(entry=>entry.name===value)?.stats||{});
    const quartermasters=(Array.isArray(saved.quartermasters)?saved.quartermasters:[]).map(value=>typeof value==="string"?value:"");
    const usedQuartermasters=new Set();
    const uniqueQuartermasters=quartermasters.map(value=>{
      if(!value||value==="None")return value;
      if(!QUARTERMASTERS.some(entry=>entry.name===value)||usedQuartermasters.has(value))return "";
      usedQuartermasters.add(value);
      return value;
    });
    restoreShipSlotValues("[data-quartermaster-slot]",uniqueQuartermasters,value=>QUARTERMASTERS.find(entry=>entry.name===value)?.stats||{});
    restoreShipSlotValues("[data-deckhand-slot]",saved.deckhands,value=>DECKHAND_TYPES.find(entry=>entry.name===value)?.stats||{});
    reconcileWarshipEnchants();
    refreshAllShipPickers();
    calculate();
    persistShipBuild();
  };
  for(const id of ["ship-select","crew-select","magic-select","hull-select","sail-select","cannon-select","siege-select","ram-select","hull-enchant-select","sail-enchant-select","cannon-enchant-select","siege-enchant-select","ram-enchant-select"])document.getElementById(id).addEventListener("change",()=>{
    if(id==="ship-select"){
      updateShipWeaponAvailability();
      populateDeckhands();
    }
    if(id==="magic-select")populateMagicParts();
    if(id.endsWith("-enchant-select"))reconcileWarshipEnchants(id);
    document.getElementById(id)._shipPreviewRefresh?.();
    renderShipSearchPicker(id);
    calculate();
    persistShipBuild();
  });
  document.getElementById("quartermaster-slots").addEventListener("change",event=>{
    if(!event.target.matches("[data-quartermaster]"))return;
    document.querySelectorAll("[data-quartermaster-slot]").forEach(container=>container._shipSlotRefresh?.());
  });
  document.getElementById("ship-build-name").addEventListener("input",persistShipBuild);
  document.getElementById("save-named-ship-build").addEventListener("click",saveNamedShipBuild);
  document.getElementById("saved-ship-build-select").addEventListener("change",syncSavedShipBuildButtons);
  document.getElementById("load-named-ship-build").addEventListener("click",()=>{
    const savedSet=savedShipBuilds.find(entry=>entry.name===document.getElementById("saved-ship-build-select").value);
    if(!savedSet)return;
    try{
      applyShipBuildState(savedSet.build);
      renderSavedShipBuilds(savedSet.name);
      showShipToast("Saved ship loaded.");
    }catch(error){console.error("Could not load the saved ship.",error);showShipToast("Could not load the saved ship.");}
  });
  document.getElementById("update-named-ship-build").addEventListener("click",updateSavedShipBuild);
  document.getElementById("delete-named-ship-build").addEventListener("click",deleteSavedShipBuild);
  document.getElementById("clear-ship-build").addEventListener("click",()=>{
    document.getElementById("ship-select").value="";
    document.getElementById("crew-select").value="";
    document.getElementById("magic-select").value="";
    document.getElementById("hull-select").value="";
    document.getElementById("sail-select").value="";
    document.getElementById("cannon-select").value="";
    document.getElementById("siege-select").value="";
    document.getElementById("ram-select").value="";
    for(const id of ["hull-enchant-select","sail-enchant-select","cannon-enchant-select","siege-enchant-select","ram-enchant-select"])document.getElementById(id).value="none";
    populateMagicParts();
    populateDeckhands();
    updateShipWeaponAvailability();
    refreshAllShipPickers();
    calculate();
    persistShipBuild();
  });
  savedShipBuilds=loadSavedShipBuilds();
  renderSavedShipBuilds();
  const storedBuild=loadStoredShipBuild();
  if(storedBuild)applyShipBuildState(storedBuild);
  else{calculate();persistShipBuild();}
}
init();
