export interface ProductType {
    id: string
    title: string
    description: string;
    price: string
    ingredients: string[]
    nutritionalInforamtion: string
    howToPrepare: string[]
    dietaryInforamation: string,
    storageInformation: string,
    extra: string,
    image: any,
}
export const PRODUCT_DATA = [{
    id: '0',
    title: 'Efo Riro',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '3.99',
    ingredients: ['vegetable', 'bell pepper', 'tomatoes', 'salt', 'palm oil', 'assorted meats'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/efo-riro.png')
},
{
    id: '1',
    title: 'African Donut Mix (puff puff)',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '5.99',
    ingredients: ['flour', 'sugar', 'pepper', 'yeast', 'groudnut oil'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/african-donut.png')

},
{
    id: '2',
    title: 'Chicken stew',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['chicken', 'bell pepper', 'tomatoes', 'salt', 'groundnut oil'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/chicken-stew.png')

},
{
    id: '3',
    title: 'Asaro (Yam Porridge)',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['yam', 'bell pepper', 'salt', 'palm oil', 'vegetable', 'assorted meat'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/asaro.png')

},
{
    id: '4',
    title: 'Moi Moi',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['beans', 'bell pepper', 'chilli peper', 'groudnut oil', 'egg', 'assorted meat', 'fish'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/moi-moi.png')

},
{
    id: '5',
    title: 'Moi Moi',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['beans', 'bell pepper', 'chilli peper', 'groudnut oil', 'egg', 'assorted meat', 'fish'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/moi-moi.png')

},
{
    id: '6',
    title: 'Moi Moi',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['beans', 'bell pepper', 'chilli peper', 'groudnut oil', 'egg', 'assorted meat', 'fish'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    storageInformation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    extra: '',
    image: require('@app/assets/product-image/moi-moi.png')

},
{
    id: '7',
    title: 'Moi Moi',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['beans', 'bell pepper', 'chilli peper', 'groudnut oil', 'egg', 'assorted meat', 'fish'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    storageInformation: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.',
    extra: '',
    image: require('@app/assets/product-image/moi-moi.png')

},
{
    id: '8',
    title: 'Moi Moi',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['beans', 'bell pepper', 'chilli peper', 'groudnut oil', 'egg', 'assorted meat', 'fish'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/moi-moi.png')

},
{
    id: '9',
    title: 'Moi Moi',
    description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o',
    price: '10',
    ingredients: ['beans', 'bell pepper', 'chilli peper', 'groudnut oil', 'egg', 'assorted meat', 'fish'],
    nutritionalInforamtion: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum. ',
    howToPrepare: ['dice the vegetable and grind the pepper', ' pour the grounded pepper into the hot boiling palm oil', 'wait for 15 minute and add the vegetable'],
    dietaryInforamation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    storageInformation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem quo qui repellat amet culpa ipsam voluptate adipisci animi voluptatum.",
    extra: '',
    image: require('@app/assets/product-image/moi-moi.png')

}
]