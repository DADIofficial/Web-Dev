export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'DXRacer GC-P132-N-F2-158, черный',
    price: 199,
    description: 'назначение: игровое кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья подлокотников, цвет: черный, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h8b/83818599251998.png?format=gallery-medium",
    rating: "6 by 10",  
    url: "https://kaspi.kz/shop/p/dxracer-gc-p132-n-f2-158-chernyi-110285543/?c=750000000"
  },
  {
    id: 2,
    name: 'Игровое кресло Defender Watcher, белый',
    price: 209,
    description: 'назначение: игровое кресло, тип базы: крестовина с колесами, материал обивки: искусственная кожа, регулировка: высота сиденья, цвет: белый, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/hbc/85091352150046.png?format=gallery-medium",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000"
  },
  {
    id: 3,
    name: 'Компьютерное DXRacer GC/G001/NW, черный, белый',
    price: 219,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-белый, страна: США',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h5f/h58/83818597220382.jpg?format=gallery-medium",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/komp-juternoe-dxracer-gc-g001-nw-chernyi-belyi-104570633/?c=750000000"
  },
  {
    id: 4,
    name: 'Игровое DXRacer AIR-R1S-WQ.G-B4, серый',
    price: 229,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: серый, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hee/h21/64386267119646.jpg?format=gallery-medium",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-dxracer-air-r1s-wq-g-b4-seryi-106771161/?c=750000000"
  },
  {
    id: 5,
    name: 'Игровое кресло Defender Watcher 64334, черный',
    price: 89,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h6b/h46/79378713772062.jpg?format=gallery-medium",
    rating: "2 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-64334-chernyi-109574945/?c=750000000"
  },
  {
    id: 6,
    name: 'Игровое кресло Havit GC933, черный, красный',
    price: 59,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-красный, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha2/hcb/79798800908318.jpg?format=gallery-medium",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-kreslo-havit-gc933-chernyi-krasnyi-109754036/?c=750000000"
  },
  {
    id: 7,
    name: 'Игровое кресло Xtreme Xtreon Recliner XTREME 8125, черный',
    price: 89,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-синий, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h82/h43/84486996099102.png?format=gallery-medium",
    rating: "2 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-kreslo-xtreme-xtreon-recliner-xtreme-8125-chernyi-110165188/?c=750000000"
  },
  {
    id: 8,
    name: 'Игровое Canyon Deimos CND-SGCH4, черный, оранжевый',
    price: 109,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-оранжевый, страна: Беларусь',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hee/hc9/63780635213854.jpg?format=gallery-medium",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-canyon-deimos-cnd-sgch4-chernyi-oranzhevyi-17800395/?c=750000000"
  },
  {
    id: 9,
    name: 'Игровое кресло Baumatic Bauma, красный',
    price: 39,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-красный, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h50/hed/64346177896478.jpg?format=gallery-medium",
    rating: "4 by 10",
    url: "https://kaspi.kz/shop/p/igrovoe-kreslo-baumatic-bauma-krasnyi-106883141/?c=750000000"
  },
  {
    id: 10,
    name: 'Компьютерное, игровое, эргономичное кресло Snakebyte, серый',
    price: 39,
    description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-красный, страна: Китай',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h8a/h14/81771482578974.png?format=gallery-medium",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/komp-juternoe-igrovoe-ergonomichnoe-kreslo-snakebyte-seryi-111212394/?c=750000000"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/