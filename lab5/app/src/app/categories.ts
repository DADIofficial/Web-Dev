import { Product } from "./products";

export interface Categories{
    name:string;
    products: Product[];
    show_products: boolean;
}


export const categories = [
    {
        name: "Игровые Кресло",
        show_products:false,
        products: [{
            id: 1,
            name: 'DXRacer GC-P132-N-F2-158, черный',
            price: 199 ,
            description: 'назначение: игровое кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья подлокотников, цвет: черный, страна: Китайи',
            rating:'6 by 10',
            link: 'https://www.technodom.kz/p/nausniki-vstavnye-apple-bluetooth-airpods-with-charging-case-145672?recommended_by=dynamic&recommended_code=z9wxnh4hkr',
            image:'https://resources.cdn-kaspi.kz/img/m/p/hd3/h8b/83818599251998.png?format=gallery-medium',
            category: "Игровые Кресло"
          },
          {
            id: 2,
            name: 'Игровое кресло Defender Watcher, белый',
            price: 209,
            description: 'назначение: игровое кресло, тип базы: крестовина с колесами, материал обивки: искусственная кожа, регулировка: высота сиденья, цвет: белый, страна: Китай',
            image: "https://resources.cdn-kaspi.kz/img/m/p/h9d/hbc/85091352150046.png?format=gallery-medium",
            rating: "9 by 10",
            link: "https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000",
            category: "Игровые Кресло"
          },
          {
            id: 3,
            name: 'Компьютерное DXRacer GC/G001/NW, черный, белый',
            price: 219,
            description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный-белый, страна: США',
            image: "https://resources.cdn-kaspi.kz/img/m/p/h5f/h58/83818597220382.jpg?format=gallery-medium",
            rating: "9 by 10",
            link: "https://kaspi.kz/shop/p/komp-juternoe-dxracer-gc-g001-nw-chernyi-belyi-104570633/?c=750000000",
            category: "Игровые Кресло"
          },
          
          {
            id: 4,
            name: 'Игровое DXRacer AIR-R1S-WQ.G-B4, серый',
            price: 229,
            description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: серый, страна: Китай',
            image: "https://resources.cdn-kaspi.kz/img/m/p/hee/h21/64386267119646.jpg?format=gallery-medium",
            rating: "8 by 10",
            link: "https://kaspi.kz/shop/p/igrovoe-dxracer-air-r1s-wq-g-b4-seryi-106771161/?c=750000000",
            category: "Игровые Кресло"
          },
          {
            id: 5,
            name: 'Игровое кресло Defender Watcher 64334, черный',
            price: 89,
            description: 'назначение: компьютерное кресло, тип базы: крестовина с колесами, материал обивки: экокожа, регулировка: высота сиденья, цвет: черный, страна: Китай',
            image: "https://resources.cdn-kaspi.kz/img/m/p/h6b/h46/79378713772062.jpg?format=gallery-medium",
            rating: "2 by 10",
            link: "https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-64334-chernyi-109574945/?c=750000000",
            category: "Игровые Кресло"
          }]
    },
       
    {
        name: "Системные блоки",
        show_products:false,
        products: [
            {
                id: 1,
                name: 'Системный блок KompTrust Comfort Game RTX черный',
                price: 1200 ,
                description: 'установленная ОС: Win 11 Pron процессор: Intel Core I5 - 10400F размер оперативной памяти: 32.0 Гб объем SSD: 1000.0 Гб видеопроцессор: NVIDIA GeForce RTX 2060 SUPER форм-фактор корпуса: Micro-Tower',
                rating:'1 by 10',
                link: 'https://kaspi.kz/shop/p/komptrust-comfort-game-rtx-chernyi-111077990/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbS-rlpFo_aCeQAm_Sb8Wwt7ep2zr0D7V6ml1xM9NHc5z7VEpA_MzhoCZT0QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/he3/he1/81461966143518.jpg?format=gallery-medium',
                category: "Системные блоки"
              },
              {
                id: 2,
                name: 'Системный блок PIXEL 13 черный',
                price: 1290 ,
                description: 'установленная ОС: Win 11 Pron процессор: Intel Core I5 - 10400F размер оперативной памяти: 16.0 Гб объем SSD: 500.0 Гб видеопроцессор: NVIDIA GeForce RTX 3060 форм-фактор корпуса: Micro-Tower',
                rating:'7 by 10',
                link: 'https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbS-rlpFo_aCeQAm_Sb8Wwt7ep2zr0D7V6ml1xM9NHc5z7VEpA_MzhoCZT0QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium',
                category: "Системные блоки"
              },
              {
                id: 3,
                name: 'Системный блок Empire Computers Gaming PRO 70 черный',
                price: 1190 ,
                description: 'установленная ОС: Win 11 Pron процессор: Intel Core I5 - 10400F размер оперативной памяти: 16.0 Гб объем SSD: 500.0 Гб видеопроцессор: NVIDIA GeForce RTX 3060 форм-фактор корпуса: Micro-Tower',
                rating:'8 by 10',
                link: 'https://kaspi.kz/shop/p/empire-computers-gaming-pro-70-chernyi-108560461/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbS-rlpFo_aCeQAm_Sb8Wwt7ep2zr0D7V6ml1xM9NHc5z7VEpA_MzhoCZT0QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h97/h81/68183487119390.jpg?format=gallery-medium',
                category: "Системные блоки"
              },
              {
                id: 4,
                name: 'Системный блок KompTrust Pro game белый',
                price: 1100 ,
                description: 'установленная ОС: Win 11 Pron процессор: Intel Core I5 - 10400F размер оперативной памяти: 32.0 Гб объем SSD: 512.0 Гб видеопроцессор: NVIDIA GeForce GTX 1660 Super форм-фактор корпуса: Micro-Tower',
                rating:'7 by 10',
                link: 'https://kaspi.kz/shop/p/komptrust-pro-game-belyi-110770955/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbS-rlpFo_aCeQAm_Sb8Wwt7ep2zr0D7V6ml1xM9NHc5z7VEpA_MzhoCZT0QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/ha3/h34/81178097844254.jpg?format=gallery-medium',
                category: "Системные блоки"
              },
              {
                id: 5,
                name: 'Системный блок KompTrust Pro game белый',
                price: 1300 ,
                description: 'установленная ОС: Win 10 Pron процессор: Intel Core I5 - 10400F размер оперативной памяти: 32.0 Гб объем SSD: 1000.0 Гб видеопроцессор: NVIDIA GeForce RTX 2060 Super форм-фактор корпуса: Midi-Tower',
                rating:'9 by 10',
                link: 'https://kaspi.kz/shop/p/komptrust-pro-game-belyi-110770955/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbS-rlpFo_aCeQAm_Sb8Wwt7ep2zr0D7V6ml1xM9NHc5z7VEpA_MzhoCZT0QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h4b/hf5/81988895801374.png?format=gallery-medium',
                category: "Системные блоки"
              }
        ]
    },
    {
        name: "Мониторы",
        show_products:false,
        products: [
            {
                id: 1,
                name: 'Монитор Sanc M2442PH серый',
                price: 140 ,
                description: 'диагональ: 23.8 дюйм разрешение: 1920x1080 тип ЖК-матрицы: IPS яркость: 300.0 кд/м2 время отклика: 1.0 мс макс. частота обновления кадров: 165.0 Гц входы: HDMI, DisplayPort',
                rating:'4 by 10',
                link: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_monitors_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNXSJ_gR1DEpaDVSrt2KPKhWoL9h68orxzTpEGjCch0LPcghA8EC_uRoCD88QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h24/h7a/67278437548062.jpg?format=gallery-medium',
                category: "Мониторы"
              },
              {
                id: 2,
                name: 'Монитор Sanc M2736PB черный',
                price: 149 ,
                description: 'диагональ: 27 дюйм разрешение: 1920x1080 тип ЖК-матрицы: IPS яркость: 200.0 кд/м2 время отклика: 5.0 мс макс. частота обновления кадров: 165.0 Гц входы: HDMI, DisplayPort',
                rating:'6 by 10',
                link: 'https://kaspi.kz/shop/p/sanc-m2736pb-chernyi-101738150/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_monitors_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNXSJ_gR1DEpaDVSrt2KPKhWoL9h68orxzTpEGjCch0LPcghA8EC_uRoCD88QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h48/h43/64310085910558.jpg?format=gallery-medium',
                category: "Мониторы"
              },
              {
                id: 3,
                name: 'Монитор Sanc M2736PB черныМонитор Xiaomi Mi Curved Gaming XMMNTWQ34 черный',
                price: 139 ,
                description: 'диагональ: 34 дюйм разрешение: 3440x1440 тип ЖК-матрицы: TFT *VA яркость: 300.0 кд/м2 время отклика: 4.0 мс макс. частота обновления кадров: 144.0 Гц входы: HDMI, DisplayPort',
                rating:'3 by 10',
                link: 'https://kaspi.kz/shop/p/xiaomi-mi-curved-gaming-xmmntwq34-chernyi-100129635/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_monitors_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNXSJ_gR1DEpaDVSrt2KPKhWoL9h68orxzTpEGjCch0LPcghA8EC_uRoCD88QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/he5/h32/63858015436830.jpg?format=gallery-medium',
                category: "Мониторы"
              },
              {
                id: 4,
                name: 'Монитор Sanc M2736PB черныМонитор Xiaomi Mi Curved Gaming XMMNTWQ34 черный',
                price: 159,
                description: 'диагональ: 27 дюйм разрешение: 1920x1080 тип ЖК-матрицы: IPS яркость: 300.0 кд/м2 время отклика: 4.0 мс макс. частота обновления кадров: 144.0 Гц входы: HDMI, DisplayPort',
                rating:'8 by 10',
                link: 'https://kaspi.kz/shop/p/xtreon-xt2753ph-chernyi-113129325/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_monitors_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNXSJ_gR1DEpaDVSrt2KPKhWoL9h68orxzTpEGjCch0LPcghA8EC_uRoCD88QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hec/h7b/84251897298974.png?format=gallery-medium',
                category: "Мониторы"
              },
              {
                id: 5,
                name: 'Монитор Sanc M2742PH черный',
                price: 169,
                description: 'диагональ: 27 дюйм разрешение: 1920x1080 тип ЖК-матрицы: IPS яркость: 300.0 кд/м2 время отклика: 1.0 мс макс. частота обновления кадров: 144.0 Гц входы: HDMI, DisplayPort',
                rating:'9 by 10',
                link: 'https://kaspi.kz/shop/p/sanc-m2742ph-chernyi-105749898/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_monitors_desktop&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNXSJ_gR1DEpaDVSrt2KPKhWoL9h68orxzTpEGjCch0LPcghA8EC_uRoCD88QAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h0d/h1b/64524046237726.jpg?format=gallery-medium',
                category: "Мониторы"
              }
        ]

    },
    {
        name: "Игровые Клавиатуры",
        show_products: false,
        products:[
            {
                id: 1,
                name: 'Клавиатура T-WOLF TF-800 черный',
                price: 19,
                description: 'дизайн: игровая тип: оптическая назначение: для настольного компьютера тип подключения: проводная',
                rating:'2 by 10',
                link: 'https://kaspi.kz/shop/p/t-wolf-tf-800-chernyi-106467552/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNak-GCk-hxyTRV0Vd3_6PSZ7BL2Db6_1FuaD936B2ecbyOMyjp8-NBoC7nkQAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h91/h11/64472173477918.jpg?format=gallery-medium',
                category: "Игровые Клавиатуры"
              },
              {
                id: 2,
                name: 'Клавиатура Havit KB488L черный',
                price: 9,
                description: 'дизайн: игровая тип: мембранная назначение: для настольного компьютера тип подключения: проводная',
                rating:'4 by 10',
                link: 'https://kaspi.kz/shop/p/havit-kb488l-chernyi-112595678/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNak-GCk-hxyTRV0Vd3_6PSZ7BL2Db6_1FuaD936B2ecbyOMyjp8-NBoC7nkQAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hc4/hf7/82868793475102.jpg?format=gallery-medium',
                category: "Игровые Клавиатуры"
              },
              {
                id: 3,
                name: 'Клавиатура Ajazz AK820 фиолетовый',
                price: 40,
                description: 'дизайн: игровая тип: механическая назначение: для настольного компьютера тип подключения: проводная тип механических клавиш: GX Blue',
                rating:'7 by 10',
                link: 'https://kaspi.kz/shop/p/ajazz-ak820-fioletovyi-114228954/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNak-GCk-hxyTRV0Vd3_6PSZ7BL2Db6_1FuaD936B2ecbyOMyjp8-NBoC7nkQAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hab/h6c/84416275054622.jpg?format=gallery-medium',
                category: "Игровые Клавиатуры"
              },
              {
                id: 4,
                name: 'Клавиатура Bloody S98 Naraka черный',
                price: 46,
                description: 'дизайн: игровая тип: механическая назначение: для настольного компьютера тип подключения: проводная',
                rating:'8 by 10',
                link: 'https://kaspi.kz/shop/p/bloody-s98-naraka-chernyi-110530402/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNak-GCk-hxyTRV0Vd3_6PSZ7BL2Db6_1FuaD936B2ecbyOMyjp8-NBoC7nkQAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h20/hfd/80915964264478.jpg?format=gallery-medium',
                category: "Игровые Клавиатуры"
              },
              {
                id: 5,
                name: 'Клавиатура Ajazz K870t Red Switches белый',
                price: 19,
                description: 'дизайн: игровая тип: механическая назначение: для настольного компьютера тип подключения: проводная тип механических клавиш: GX Red',
                rating:'10 by 10',
                link: 'https://kaspi.kz/shop/p/ajazz-k870t-red-switches-belyi-101748621/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNak-GCk-hxyTRV0Vd3_6PSZ7BL2Db6_1FuaD936B2ecbyOMyjp8-NBoC7nkQAvD_BwE',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h63/h1d/83100945612830.jpg?format=gallery-medium',
                category: "Игровые Клавиатуры"
              },

        ]
    }
];