import vegkorma from '../../src/assets/images/vegkorma.png';
import AlmondMilk from '../../src/assets/images/AlmondMilk.png';
import Bread from  '../../src/assets/images/Bread.png';
import ChickenFry from '../../src/assets/images/ChickenFry.png';
import ChickenKebab from '../../src/assets/images/ChickenKebab.png';
import CHickenRoast from '../../src/assets/images/CHickenRoast.png';
import ChickenTaco from '../../src/assets/images/ChickenTaco.png';
import ChickpeasCurry from '../../src/assets/images/Chickpeas.png';
import ChocolateDrink from '../../src/assets/images/ChocolateDrink.png';
import ChocolateMouse from '../../src/assets/images/ChocolateMouse.png';
import curry from '../../src/assets/images/curry.png';
import DalFry from '../../src/assets/images/DalFry.png';
import desserts from '../../src/assets/images/desserts.png';
import EggPlantCurry  from '../../src/assets/images/EggPlantCurry.png';
import EggSalad from '../../src/assets/images/EggSalad.png';
import GranolaOats from '../../src/assets/images/GranolaOats.png';
import Hazelnut from '../../src/assets/images/Hazelnut.png';
import KathiRoll from '../../src/assets/images/KathiRoll.png';
import KiwiStrwaberryJuice from '../../src/assets/images/KiwiStrwaberryJuice.png';
import LemonRoastChicken from '../../src/assets/images/LemonRoastChicken.png';
import nonveg from '../../src/assets/images/nonveg.png';
import OnionGravy from '../../src/assets/images/OnionGravy.png';
import OrangeJuice from '../../src/assets/images/OrangeJuice.png';
import PinaColada from '../../src/assets/images/PinaColada.png';
import Pizza from '../../src/assets/images/Pizza.png';
import PurpleMouse from '../../src/assets/images/PurpleMouse.png';
import RoastedBeans from '../../src/assets/images/RoastedBeans.png';
import Salad from '../../src/assets/images/Salad.png';
import SpinachSalad from '../../src/assets/images/SpinachSalad.png';
import SproutSalad from '../../src/assets/images/SproutSalad.png';
import ThaiCurry from '../../src/assets/images/ThaiCurry.png';
import VanillaIceream from '../../src/assets/images/VanillaIceream.png';
import veg from '../../src/assets/images/veg.png';
import VegCurry from '../../src/assets/images/VegCurry.png';
import VegTikka from '../../src/assets/images/VegTikka.png';


const SHOP_DATA = [
    {
        id: 1,
        title: 'CURRIES',
        routeName: 'curries',
        items: [
          {
            id: 1,
            name: 'Chickpeas Curry',
            imageUrl: ChickpeasCurry,
            price: 50
          },
          {
            id: 2,
            name: 'Veg Curry',
            imageUrl: VegCurry,
            price: 35
          },
          {
            id: 3,
            name: 'EggPlant Curry',
            imageUrl: EggPlantCurry,
            price: 40
          },
          {
            id: 4,
            name: 'Dal Fry',
            imageUrl: DalFry,
            price: 60
          },
        ]
      },
      {
        id: 2,
        title: 'Beverages',
        routeName: 'beverages',
        items: [
          {
            id: 10,
            name: 'Pina Colada',
            imageUrl: PinaColada,
            price: 80
          },
          {
            id: 11,
            name: 'Chocolate Drink',
            imageUrl: ChocolateDrink,
            price: 70
          },
          {
            id: 12,
            name: 'Purple Mouse',
            imageUrl: PurpleMouse,
            price: 50
          },
          {
            id: 13,
            name: 'Orange Juice',
            imageUrl: OrangeJuice,
            price: 60
          },
        ]
      },
      {
        id: 5,
        title: 'Desserts',
        routeName: 'desserts',
        items: [
          {
            id: 30,
            name: 'Vanilla Cake',
            imageUrl: VanillaIceream,
            price: 150
          },
          {
            id: 31,
            name: 'HazelNut Ice-Cream',
            imageUrl: Hazelnut,
            price: 75
          },
          {
            id: 32,
            name: 'Strawberry Ice-Cream',
            imageUrl: desserts,
            price: 65
          },
          {
            id: 33,
            name: 'Chocolate Cream',
            imageUrl: ChocolateMouse,
            price: 50
          },
        ]
      },
      {
        id: 4,
        title: 'Veg',
        routeName: 'veg',
        items: [
          {
            id: 23,
            name: 'Spinach Pizza',
            imageUrl: Pizza,
            price: 150
          },
          {
            id: 24,
            name: 'Sprout Salad',
            imageUrl: SproutSalad,
            price: 85
          },
          {
            id: 25,
            name: 'Spinach Salad',
            imageUrl: SpinachSalad,
            price: 100
          },
          {
            id: 26,
            name: 'Veg Tikka',
            imageUrl: VegTikka,
            price: 80
          },
          ]
      },
     
      {
        id: 3,
        title: 'Chicken',
        routeName: 'Chicken',
        items: [
          {
            id: 18,
            name: 'Chicken Taco',
            imageUrl: ChickenTaco,
            price: 35
          },
          {
            id: 19,
            name: 'Chicken Roast',
            imageUrl: CHickenRoast,
            price: 90
          },
          {
            id: 20,
            name: 'Lemon Roast Chicken',
            imageUrl: LemonRoastChicken,
            price: 110
          },
          {
            id: 21,
            name: 'Chicken Kebab',
            imageUrl: ChickenKebab,
            price: 165
          },
        ]
      },
];

export default SHOP_DATA;