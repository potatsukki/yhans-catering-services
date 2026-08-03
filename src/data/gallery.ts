import type { ImageAsset } from '../types/content';
import logoUrl from '../assets/brand/yhans-logo.png';
import marianneChefUrl from '../assets/images/about/marianne-natanawan-chef.jpg';
import cateringCrewUrl from '../assets/images/about/yhans-catering-crew.jpg';
import buffetHeroUrl from '../assets/images/hero-buffet.webp';
import receptionTableUrl from '../assets/images/service-areas-birthday-setup.webp';
import whyChooseEventUrl from '../assets/images/why-choose-blue-event.webp';
import fullCateringUrl from '../assets/images/full-catering-team.webp';
import grazingTableCompleteUrl from '../assets/images/grazing-table-complete-spread.webp';
import grazingTableUrl from '../assets/images/grazing-table-spread.webp';
import grazingPackageAUrl from '../assets/images/grazing-package-a.png';
import grazingPackageBUrl from '../assets/images/grazing-package-b.png';
import grazingPackageCUrl from '../assets/images/grazing-package-c.png';
import popularGrazingTableUrl from '../assets/images/popular-grazing-table.webp';
import foodTraysUrl from '../assets/images/food-tray-seafood.webp';
import foodTraysFeatureUrl from '../assets/images/food-trays-feature.webp';
import packedMealsUrl from '../assets/images/packed-meal-box.webp';
import packedMealsGroupOrderUrl from '../assets/images/packed-meals-group-order.webp';
import porkMenudoUrl from '../assets/images/pork-menudo-chafing-dish.png';
import beefCalderetaUrl from '../assets/images/beef-caldereta-tray.webp';
import regularPackageThreeUrl from '../assets/images/regular-package-three-lumpia.png';
import beefWithMushroomsUrl from '../assets/images/beef-with-mushrooms.webp';
import beefWithMushroomsTrayUrl from '../assets/images/beef-with-mushrooms-tray.webp';
import beefKareKareTrayUrl from '../assets/images/beef-kare-kare-tray.webp';
import roastBeefTrayUrl from '../assets/images/roast-beef-tray.webp';
import menudoTrayUrl from '../assets/images/menudo-tray.webp';
import porkHamonadoTrayUrl from '../assets/images/pork-hamonado-tray.webp';
import lumpiangShanghaiTrayUrl from '../assets/images/lumpiang-shanghai-tray.webp';
import porkSisigTrayUrl from '../assets/images/pork-sisig-tray.webp';
import chickenCordonBleuTrayUrl from '../assets/images/chicken-cordon-bleu-tray.webp';
import buffaloChickenWingsTrayUrl from '../assets/images/buffalo-chicken-wings-tray.webp';
import chickenPocheroTrayUrl from '../assets/images/chicken-pochero-tray.webp';
import chopSueyTrayUrl from '../assets/images/chop-suey-tray.webp';
import mixedVegetablesTrayUrl from '../assets/images/mixed-vegetables-tray.webp';
import lumpiangHubadTrayUrl from '../assets/images/lumpiang-hubad-tray.webp';
import spaghettiTrayUrl from '../assets/images/spaghetti-tray.webp';
import carbonaraTrayUrl from '../assets/images/carbonara-tray.webp';
import trufflePastaTrayUrl from '../assets/images/truffle-pasta-tray.webp';
import bakedMacaroniTrayUrl from '../assets/images/baked-macaroni-tray.webp';
import chickenPestoPastaTrayUrl from '../assets/images/chicken-pesto-pasta-tray.webp';
import pancitCantonTrayUrl from '../assets/images/pancit-canton-tray.webp';
import pancitSotanghonTrayUrl from '../assets/images/pancit-sotanghon-tray.webp';
import saltedEggShrimpTrayUrl from '../assets/images/salted-egg-shrimp-tray.webp';
import crabsInCajunSauceTrayUrl from '../assets/images/crabs-in-cajun-sauce-tray.webp';
import cheesyBakedShrimpTrayUrl from '../assets/images/cheesy-baked-shrimp-tray.webp';
import steamedLapuLapuTrayUrl from '../assets/images/steamed-lapu-lapu-tray.webp';
import beefCalderetaMenuUrl from '../assets/images/beef-caldereta-menu.webp';
import beefKareKareMenuUrl from '../assets/images/beef-kare-kare-menu.webp';
import roastBeefMenuUrl from '../assets/images/roast-beef-menu.webp';
import porkMenudoMenuUrl from '../assets/images/pork-menudo-menu.webp';
import porkCalderetaMenuUrl from '../assets/images/pork-caldereta-menu.webp';
import porkHamonadoMenuUrl from '../assets/images/pork-hamonado-menu.webp';
import lumpiangShanghaiMenuUrl from '../assets/images/lumpiang-shanghai-menu.webp';
import porkSisigMenuUrl from '../assets/images/pork-sisig-menu.webp';
import chickenCordonBleuMenuUrl from '../assets/images/chicken-cordon-bleu-menu.webp';
import buffaloChickenWingsMenuUrl from '../assets/images/buffalo-chicken-wings-menu.webp';
import chickenHamonadoMenuUrl from '../assets/images/chicken-hamonado-menu.webp';
import chickenPocheroMenuUrl from '../assets/images/chicken-pochero-menu.webp';
import chopSueyMenuUrl from '../assets/images/chop-suey-menu.webp';
import mixedVegetablesMenuUrl from '../assets/images/mixed-vegetables-menu.webp';
import chickenPestoPastaMenuUrl from '../assets/images/chicken-pesto-pasta-menu.webp';
import lumpiangHubadMenuUrl from '../assets/images/lumpiang-hubad-menu.webp';
import vegetableSaladMenuUrl from '../assets/images/vegetable-salad-menu.webp';
import spaghettiMenuUrl from '../assets/images/spaghetti-menu.webp';
import trufflePastaMenuUrl from '../assets/images/truffle-pasta-menu.webp';
import carbonaraMenuUrl from '../assets/images/carbonara-menu.webp';
import bakedMacaroniMenuUrl from '../assets/images/baked-macaroni-menu.webp';
import pancitCantonMenuUrl from '../assets/images/pancit-canton-menu.webp';
import mangoTapiocaMenuUrl from '../assets/images/mango-tapioca-menu.webp';
import sampleBuffetUrl from '../assets/images/recent-event-christmas-dinner.webp';
import sampleGrazingTableUrl from '../assets/images/recent-event-blue-celebration.webp';
import sampleReceptionUrl from '../assets/images/recent-event-evening-buffet.webp';
import breakfastPackUrl from '../assets/images/placeholders/meals/breakfast-pack.webp';
import groupMealPackUrl from '../assets/images/placeholders/meals/group-meal-pack.webp';
import imageFallbackUrl from '../assets/images/placeholders/shared/image-fallback.webp';

export type GalleryKey =
  | 'logo'
  | 'marianneChef'
  | 'cateringCrew'
  | 'buffetHero'
  | 'receptionTable'
  | 'whyChooseEvent'
  | 'fullCatering'
  | 'grazingTableComplete'
  | 'grazingTable'
  | 'grazingPackageA'
  | 'grazingPackageB'
  | 'grazingPackageC'
  | 'popularGrazingTable'
  | 'foodTrays'
  | 'foodTraysFeature'
  | 'packedMeals'
  | 'packedMealsGroupOrder'
  | 'porkMenudo'
  | 'beefCaldereta'
  | 'regularPackageThree'
  | 'beefWithMushrooms'
  | 'beefWithMushroomsTray'
  | 'beefKareKareTray'
  | 'roastBeefTray'
  | 'menudoTray'
  | 'porkHamonadoTray'
  | 'lumpiangShanghaiTray'
  | 'porkSisigTray'
  | 'chickenCordonBleuTray'
  | 'buffaloChickenWingsTray'
  | 'chickenPocheroTray'
  | 'chopSueyTray'
  | 'mixedVegetablesTray'
  | 'lumpiangHubadTray'
  | 'spaghettiTray'
  | 'carbonaraTray'
  | 'trufflePastaTray'
  | 'bakedMacaroniTray'
  | 'chickenPestoPastaTray'
  | 'pancitCantonTray'
  | 'pancitSotanghonTray'
  | 'saltedEggShrimpTray'
  | 'crabsInCajunSauceTray'
  | 'cheesyBakedShrimpTray'
  | 'steamedLapuLapuTray'
  | 'beefCalderetaMenu'
  | 'beefKareKareMenu'
  | 'roastBeefMenu'
  | 'porkMenudoMenu'
  | 'porkCalderetaMenu'
  | 'porkHamonadoMenu'
  | 'lumpiangShanghaiMenu'
  | 'porkSisigMenu'
  | 'chickenCordonBleuMenu'
  | 'buffaloChickenWingsMenu'
  | 'chickenHamonadoMenu'
  | 'chickenPocheroMenu'
  | 'chopSueyMenu'
  | 'mixedVegetablesMenu'
  | 'chickenPestoPastaMenu'
  | 'lumpiangHubadMenu'
  | 'vegetableSaladMenu'
  | 'spaghettiMenu'
  | 'trufflePastaMenu'
  | 'carbonaraMenu'
  | 'bakedMacaroniMenu'
  | 'pancitCantonMenu'
  | 'mangoTapiocaMenu'
  | 'sampleBuffet'
  | 'sampleGrazingTable'
  | 'sampleReception'
  | 'breakfastPack'
  | 'groupMealPack'
  | 'imageFallback';

export const GALLERY: Record<GalleryKey, ImageAsset> = {
  logo: {
    src: logoUrl,
    alt: "Yhan's Catering Services logo",
    width: 2172,
    height: 724,
  },
  marianneChef: {
    src: marianneChefUrl,
    alt: 'Chef Marianne P. Natanawan in chef uniform in a commercial kitchen',
    width: 549,
    height: 960,
  },
  cateringCrew: {
    src: cateringCrewUrl,
    alt: "Yhan's Catering Services crew standing behind a catered buffet",
    width: 2048,
    height: 1536,
  },
  buffetHero: {
    src: buffetHeroUrl,
    alt: 'Buffet setup with gold chafing dishes and floral decor',
    width: 1916,
    height: 821,
  },
  receptionTable: {
    src: receptionTableUrl,
    alt: 'Birthday celebration setup with colorful balloons and table decor',
    width: 1448,
    height: 1086,
  },
  whyChooseEvent: {
    src: whyChooseEventUrl,
    alt: 'Blue-clothed banquet tables prepared for an event',
    width: 1448,
    height: 1086,
  },
  fullCatering: {
    src: fullCateringUrl,
    alt: "Yhan's Catering Services team standing behind a buffet setup",
    width: 1536,
    height: 1024,
  },
  grazingTableComplete: {
    src: grazingTableCompleteUrl,
    alt: 'Complete grazing table setup with assorted sweet and savory food',
    width: 1672,
    height: 941,
  },
  grazingTable: {
    src: grazingTableUrl,
    alt: 'Grazing table with charcuterie, desserts, and fruit displays',
    width: 1448,
    height: 1086,
  },
  grazingPackageA: {
    src: grazingPackageAUrl,
    alt: 'Birthday grazing table with pastries, fruit, and desserts',
    width: 1448,
    height: 1086,
  },
  grazingPackageB: {
    src: grazingPackageBUrl,
    alt: 'Blue birthday grazing table with cakes, pastries, and fruit',
    width: 1448,
    height: 1086,
  },
  grazingPackageC: {
    src: grazingPackageCUrl,
    alt: 'Grazing table with desserts, spring rolls, and fruit',
    width: 1448,
    height: 1086,
  },
  popularGrazingTable: {
    src: popularGrazingTableUrl,
    alt: 'Overhead grazing table with charcuterie, desserts, and canapes',
    width: 1448,
    height: 1086,
  },
  foodTrays: {
    src: foodTraysUrl,
    alt: 'Food trays with seafood, vegetables, and steamed fish',
    width: 1448,
    height: 1086,
  },
  foodTraysFeature: {
    src: foodTraysFeatureUrl,
    alt: 'Food trays with chicken wings, shrimp, and baked pasta dishes',
    width: 1448,
    height: 1086,
  },
  packedMeals: {
    src: packedMealsUrl,
    alt: 'Packed meal box with fried chicken, rice, vegetables, and a gift-wrapped apple',
    width: 1448,
    height: 1086,
  },
  porkMenudo: {
    src: porkMenudoUrl,
    alt: 'Pork menudo served in a gold chafing dish',
    width: 1448,
    height: 1086,
  },
  beefCaldereta: {
    src: beefCalderetaUrl,
    alt: 'Beef caldereta with potatoes and peppers in a serving tray',
    width: 1448,
    height: 1086,
  },
  regularPackageThree: {
    src: regularPackageThreeUrl,
    alt: 'Lumpiang Shanghai arranged in a serving tray',
    width: 1448,
    height: 1086,
  },
  packedMealsGroupOrder: {
    src: packedMealsGroupOrderUrl,
    alt: 'Prepared packed meals with fried chicken, rice, vegetables, and individually wrapped fruit arranged for a group order.',
    width: 1448,
    height: 1086,
  },
  beefWithMushrooms: {
    src: beefWithMushroomsUrl,
    alt: 'Beef with mushrooms in a creamy sauce, served in a chafing dish',
    width: 1600,
    height: 1200,
  },
  beefWithMushroomsTray: {
    src: beefWithMushroomsTrayUrl,
    alt: 'Beef with mushrooms in a creamy sauce served in a food tray',
    width: 1448,
    height: 1086,
  },
  beefKareKareTray: {
    src: beefKareKareTrayUrl,
    alt: 'Beef kare-kare with eggplant and vegetables served in a food tray',
    width: 1448,
    height: 1086,
  },
  roastBeefTray: {
    src: roastBeefTrayUrl,
    alt: 'Roast beef with mashed potatoes and vegetables served in a food tray',
    width: 1448,
    height: 1086,
  },
  menudoTray: {
    src: menudoTrayUrl,
    alt: 'Menudo with vegetables served in a food tray',
    width: 1448,
    height: 1086,
  },
  porkHamonadoTray: {
    src: porkHamonadoTrayUrl,
    alt: 'Pork Hamonado with pineapple served in a food tray',
    width: 1448,
    height: 1086,
  },
  lumpiangShanghaiTray: {
    src: lumpiangShanghaiTrayUrl,
    alt: 'Lumpiang Shanghai served in a food tray with lettuce',
    width: 1448,
    height: 1086,
  },
  porkSisigTray: {
    src: porkSisigTrayUrl,
    alt: 'Pork Sisig with peppers served in a food tray',
    width: 1448,
    height: 1086,
  },
  chickenCordonBleuTray: {
    src: chickenCordonBleuTrayUrl,
    alt: 'Chicken Cordon Bleu slices served in a food tray',
    width: 1448,
    height: 1086,
  },
  buffaloChickenWingsTray: {
    src: buffaloChickenWingsTrayUrl,
    alt: 'Buffalo chicken wings served in a food tray',
    width: 1448,
    height: 1086,
  },
  chickenPocheroTray: {
    src: chickenPocheroTrayUrl,
    alt: 'Chicken Pochero with vegetables served in a food tray',
    width: 1448,
    height: 1086,
  },
  chopSueyTray: {
    src: chopSueyTrayUrl,
    alt: 'Chop Suey with quail eggs and vegetables served in a food tray',
    width: 1448,
    height: 1086,
  },
  mixedVegetablesTray: {
    src: mixedVegetablesTrayUrl,
    alt: 'Mixed vegetables baked with cheese in a food tray',
    width: 1448,
    height: 1086,
  },
  lumpiangHubadTray: {
    src: lumpiangHubadTrayUrl,
    alt: 'Lumpiang Hubad with vegetables and sauce served in a food tray',
    width: 1448,
    height: 1086,
  },
  spaghettiTray: {
    src: spaghettiTrayUrl,
    alt: 'Spaghetti with tomato sauce, cheese, and sausage served in a food tray',
    width: 1448,
    height: 1086,
  },
  carbonaraTray: {
    src: carbonaraTrayUrl,
    alt: 'Creamy carbonara pasta with sausage served in a food tray',
    width: 1448,
    height: 1086,
  },
  trufflePastaTray: {
    src: trufflePastaTrayUrl,
    alt: 'Creamy mushroom truffle pasta served in a food tray',
    width: 1448,
    height: 1086,
  },
  bakedMacaroniTray: {
    src: bakedMacaroniTrayUrl,
    alt: 'Baked macaroni served in a food tray',
    width: 1448,
    height: 1086,
  },
  chickenPestoPastaTray: {
    src: chickenPestoPastaTrayUrl,
    alt: 'Chicken pesto pasta served in a food tray',
    width: 1448,
    height: 1086,
  },
  pancitCantonTray: {
    src: pancitCantonTrayUrl,
    alt: 'Pancit Canton served in a food tray',
    width: 1448,
    height: 1086,
  },
  pancitSotanghonTray: {
    src: pancitSotanghonTrayUrl,
    alt: 'Pancit Sotanghon served in a food tray',
    width: 1448,
    height: 1086,
  },
  saltedEggShrimpTray: {
    src: saltedEggShrimpTrayUrl,
    alt: 'Salted egg shrimp served in a food tray',
    width: 1448,
    height: 1086,
  },
  crabsInCajunSauceTray: {
    src: crabsInCajunSauceTrayUrl,
    alt: 'Crabs in Cajun sauce served in a food tray',
    width: 1448,
    height: 1086,
  },
  cheesyBakedShrimpTray: {
    src: cheesyBakedShrimpTrayUrl,
    alt: 'Cheesy baked shrimp served in a food tray',
    width: 1448,
    height: 1086,
  },
  steamedLapuLapuTray: {
    src: steamedLapuLapuTrayUrl,
    alt: 'Steamed Lapu-Lapu served in a food tray',
    width: 1448,
    height: 1086,
  },
  beefCalderetaMenu: {
    src: beefCalderetaMenuUrl,
    alt: 'Beef caldereta with potatoes, carrots, and bell peppers in a chafing dish',
    width: 1448,
    height: 1086,
  },
  beefKareKareMenu: {
    src: beefKareKareMenuUrl,
    alt: 'Beef kare-kare with vegetables and peanut sauce in a chafing dish',
    width: 1448,
    height: 1086,
  },
  roastBeefMenu: {
    src: roastBeefMenuUrl,
    alt: 'Roast beef with mashed potatoes and green beans in a chafing dish',
    width: 1448,
    height: 1086,
  },
  porkMenudoMenu: {
    src: porkMenudoMenuUrl,
    alt: 'Pork menudo served in a gold chafing dish',
    width: 1448,
    height: 1086,
  },
  porkCalderetaMenu: {
    src: porkCalderetaMenuUrl,
    alt: 'Pork caldereta with potatoes, carrots, and bell peppers in a chafing dish',
    width: 1448,
    height: 1086,
  },
  porkHamonadoMenu: {
    src: porkHamonadoMenuUrl,
    alt: 'Pork hamonado with pineapple in a chafing dish',
    width: 1448,
    height: 1086,
  },
  lumpiangShanghaiMenu: {
    src: lumpiangShanghaiMenuUrl,
    alt: 'Crispy lumpiang Shanghai arranged in a chafing dish',
    width: 1448,
    height: 1086,
  },
  porkSisigMenu: {
    src: porkSisigMenuUrl,
    alt: 'Pork sisig with onions and green peppers in a chafing dish',
    width: 1448,
    height: 1086,
  },
  chickenCordonBleuMenu: {
    src: chickenCordonBleuMenuUrl,
    alt: 'Chicken cordon bleu slices arranged in a chafing dish',
    width: 1448,
    height: 1086,
  },
  buffaloChickenWingsMenu: {
    src: buffaloChickenWingsMenuUrl,
    alt: 'Buffalo chicken wings with sesame seeds in a chafing dish',
    width: 1448,
    height: 1086,
  },
  chickenHamonadoMenu: {
    src: chickenHamonadoMenuUrl,
    alt: 'Chicken hamonado with pineapple and potatoes in a chafing dish',
    width: 1448,
    height: 1086,
  },
  chickenPocheroMenu: {
    src: chickenPocheroMenuUrl,
    alt: 'Chicken pochero with vegetables and potatoes in a chafing dish',
    width: 1448,
    height: 1086,
  },
  chopSueyMenu: {
    src: chopSueyMenuUrl,
    alt: 'Chop suey with mixed vegetables and quail eggs in a chafing dish',
    width: 1448,
    height: 1086,
  },
  mixedVegetablesMenu: {
    src: mixedVegetablesMenuUrl,
    alt: 'Mixed vegetables with cheese and carrots in a chafing dish',
    width: 1448,
    height: 1086,
  },
  chickenPestoPastaMenu: {
    src: chickenPestoPastaMenuUrl,
    alt: 'Chicken pesto pasta with tomatoes and parmesan in a chafing dish',
    width: 1448,
    height: 1086,
  },
  lumpiangHubadMenu: {
    src: lumpiangHubadMenuUrl,
    alt: 'Lumpiang hubad with vegetables and sweet sauce in a chafing dish',
    width: 1448,
    height: 1086,
  },
  vegetableSaladMenu: {
    src: vegetableSaladMenuUrl,
    alt: 'Fresh garden salad with lettuce, cucumber, and tomatoes in a chafing dish',
    width: 1448,
    height: 1086,
  },
  spaghettiMenu: {
    src: spaghettiMenuUrl,
    alt: 'Spaghetti with tomato sauce and cheese in a chafing dish',
    width: 1448,
    height: 1086,
  },
  trufflePastaMenu: {
    src: trufflePastaMenuUrl,
    alt: 'Creamy chicken and mushroom pasta in a chafing dish',
    width: 1448,
    height: 1086,
  },
  carbonaraMenu: {
    src: carbonaraMenuUrl,
    alt: 'Creamy carbonara pasta with bacon in a chafing dish',
    width: 1448,
    height: 1086,
  },
  bakedMacaroniMenu: {
    src: bakedMacaroniMenuUrl,
    alt: 'Baked macaroni with cheese and bacon in a chafing dish',
    width: 1448,
    height: 1086,
  },
  pancitCantonMenu: {
    src: pancitCantonMenuUrl,
    alt: 'Pancit Canton with noodles, chicken, beef, and vegetables in a chafing dish',
    width: 1448,
    height: 1086,
  },
  mangoTapiocaMenu: {
    src: mangoTapiocaMenuUrl,
    alt: 'Mango tapioca dessert cups with mango chunks',
    width: 1448,
    height: 1086,
  },
  sampleBuffet: {
    src: sampleBuffetUrl,
    alt: 'Christmas dinner tables with red linens and festive tree decor',
    width: 1448,
    height: 1086,
  },
  sampleGrazingTable: {
    src: sampleGrazingTableUrl,
    alt: 'Blue-and-yellow decorated celebration venue',
    width: 1448,
    height: 1086,
  },
  sampleReception: {
    src: sampleReceptionUrl,
    alt: 'Evening buffet setup with chafing dishes and string lights',
    width: 1448,
    height: 1086,
  },
  breakfastPack: {
    src: breakfastPackUrl,
    alt: 'Sample breakfast food pack',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  groupMealPack: {
    src: groupMealPackUrl,
    alt: 'Sample group meal pack',
    width: 1200,
    height: 900,
    isPlaceholder: true,
  },
  imageFallback: {
    src: imageFallbackUrl,
    alt: '',
    width: 1200,
    height: 800,
    isPlaceholder: true,
  },
};
