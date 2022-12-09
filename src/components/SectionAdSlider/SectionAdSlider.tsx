import React from "react";
import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css";
import Card from "../Ads/Card";
import Skeleton from "@mui/material/Skeleton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1279 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1279, min: 767 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  }
};
const Ads = [
{
  "identifier": "3004938",
  "title": "آپارتمان 47 متری تک واحدی ظفر با پارکینگ",
  "totalPrice": 3100000000,
  "unitPrice": 65000000,
  "location": {
      "locationName": "تهران ، منطقه 3 ، حسن اباد - زرگنده",
      "longitude": 51.4313793182373,
      "latitude": 35.7706287284756,
      "targetGlobalLocation": {
          "id": 246690,
          "type": "REGION"
      }
  },
  "images": [
          "https://cdn.kilid.com/default-small.png",
          "https://cdn.kilid.com/default-large.png"
  ],
  "type": {
      "landuseType": "مسکونی",
      "propertyType": "آپارتمان/برج"
  },
  "age": 9,
  "floorArea": 47.0,
  "floorAreaUnit": "m2",
  "numOfBeds": 1,
  "numberOfParking": 1,
  "features": {
      "parking": false,
      "lobby": false,
      "warehouse": true,
      "sports_hall": false,
      "guard": false,
      "elevator": true,
      "balcony": false,
      "swimming_pool": false,
      "sauna": false,
      "air_conditioning": true,
      "conference_hall": false,
      "roof_garden": false,
      "remote_door": true,
      "jacuzzi": false,
      "central_antenna": false
  },
  "description": "** آپارتمان دنج و نقلی مناسب و قیمت مناسب\n ** سالن نور گیری از جنوب و کف سرامیک \n** اتاق نور گیری از پاسیو با کمد دیواری کافی\n ** اشپز خانه کابینت او دی اف نور ازپاسیو \n** سرویس ایرانی \nکارگذار شما \nآرام\n املاک ملک چی \nپاسخ دهی 24ساعته",
  "seoDescription": "این آگهی فروش/پیش فروش در تهران ، منطقه 3 ، حسن اباد - زرگنده واقع شده است. آپارتمان/برج مسکونی با متراژ 47 متر، 9 سال ساخت ‌ و 1 اتاق خواب دارد. ‌قیمت این آگهی ‌3100000000 تومان می باشد. \nبا توجه به گزینه انتخابی شما، تعدادی ملک پیشنهادی دیگر در سامانه کیلید وجود دارد که پیشنهاد می‏شود آنها را نیز بررسی کنید. این خانه‌ها در لوکیشن نزدیک این آگهی قرار دارند و از نظر متراژ، تعداد اتاق‌ خواب‌ها و امکانات با آنچه انتخاب کرده‌اید، تشابه زیادی دارند.",
  "bread_crumbs": [
      "خانه",
      "خرید",
      "تهران",
      "منطقه 3",
      "حسن اباد - زرگنده"
  ],
  "contact": {
      "type": "AGENCY",
      "fullName": "خانم آرام",
      "callNumber": "09044162569",
      "departmentName": "ملک چی",
      "departmentLogoUrl": "https://cdn.kilid.com/photos/large/logo_2039406e-fca6-4df8-b04c-72cc77a96780.webp",
      "departmentId": 1005377,
      "whatsappAvailibility": true
  },
  "graph": {
      "content": [
          {
              "date": "2021-09-23",
              "periodSymbol": "مهر - 1400",
              "value": 7747488179.6192
          },
          {
              "date": "2021-10-23",
              "periodSymbol": "آبان - 1400",
              "value": 7716680622.08438
          },
          {
              "date": "2021-11-22",
              "periodSymbol": "آذر - 1400",
              "value": 7866591821.89276
          },
          {
              "date": "2021-12-22",
              "periodSymbol": "دی - 1400",
              "value": 8125702853.09702
          },
          {
              "date": "2022-01-21",
              "periodSymbol": "بهمن - 1400",
              "value": 8162532649.79833
          },
          {
              "date": "2022-02-20",
              "periodSymbol": "اسفند - 1400",
              "value": 8405137329.53983
          },
          {
              "date": "2022-03-21",
              "periodSymbol": "فروردین - 1401",
              "value": 7636895624.81863
          },
          {
              "date": "2022-04-21",
              "periodSymbol": "اردیبهشت - 1401",
              "value": 8574624030.53609
          },
          {
              "date": "2022-05-22",
              "periodSymbol": "خرداد - 1401",
              "value": 9087739440.46083
          },
          {
              "date": "2022-06-22",
              "periodSymbol": "تیر - 1401",
              "value": 9355529201.77014
          },
          {
              "date": "2022-07-23",
              "periodSymbol": "مرداد - 1401",
              "value": 9817165428.07036
          },
          {
              "date": "2022-08-23",
              "periodSymbol": "شهریور - 1401",
              "value": 9672928286.57732
          }
      ]
  }
},
{
  "identifier": "3003756",
  "title": "آپارتمان 223متری 4خواب شریعتی 2پارکینگ قیمت مناسب ",
  "totalPrice": 14495000000,
  "unitPrice": 65000000,
  "location": {
      "locationName": "تهران ، منطقه 3 ، شریعتی - ظفر",
      "longitude": 51.4450907707214,
      "latitude": 35.7619755009012,
      "targetGlobalLocation": {
          "id": 246690,
          "type": "REGION"
      }
  },
  "images": [
      "https://cdn.kilid.com/photos/large/listing_3f9ad267-c76e-4f12-9333-2ca5b52a9b78.jpg",
      "https://cdn.kilid.com/photos/large/listing_ec4c2181-dd64-4a5c-bd66-6069900d2e81.jpg",
      "https://cdn.kilid.com/photos/large/listing_15a4e204-8b59-404d-83c1-4e5b901837b8.jpg",
      "https://cdn.kilid.com/photos/large/listing_4d464b30-fa45-406d-914d-5b3049d09f0a.jpg",
      "https://cdn.kilid.com/photos/large/listing_9cfe2861-75ef-4af4-9fc9-bf90afe09806.jpg",
      "https://cdn.kilid.com/photos/large/listing_7e156168-053e-4305-8362-9350ca997b3c.jpg",
      "https://cdn.kilid.com/photos/large/listing_151f0573-4f14-45b8-9a27-54cf7855dbdc.jpg",
      "https://cdn.kilid.com/photos/large/listing_e3793f6a-a687-4aff-a4f8-e92d8a2ae0b1.jpg",
      "https://cdn.kilid.com/photos/large/listing_cbdf1f99-ffa7-45e8-8732-7c7a3fe94778.jpg",
      "https://cdn.kilid.com/photos/large/listing_fe2d0fa4-f131-4bb3-a422-e4562ce9be81.jpg",
  ],
  "type": {
      "landuseType": "مسکونی",
      "propertyType": "آپارتمان/برج"
  },
  "age": 12,
  "floorArea": 223.0,
  "floorAreaUnit": "m2",
  "numOfBeds": 4,
  "numberOfParking": 2,
  "features": {
      "parking": false,
      "lobby": false,
      "warehouse": true,
      "sports_hall": false,
      "guard": false,
      "elevator": true,
      "balcony": true,
      "swimming_pool": false,
      "sauna": false,
      "air_conditioning": true,
      "conference_hall": false,
      "roof_garden": false,
      "remote_door": true,
      "jacuzzi": false,
      "central_antenna": false
  },
  "description": "** آپارتمانی در خیابانی دنج گذر عریض و دسترسی عالی به شریعتی و پاسداران\n ** سالن دریای نور سنگ پوش شده و قابل چیدمان چند دست مبل\n ** اشپزخانه بزرگ و دلباز دورتادور کابینت پر نور\n ** تی وی روم\n ** 4 خواب با کمد دیواری های عمیق و مکفی با نور فراوان \n** واحدی با ارتفاع قابل توجه\n ** دارای 2 پارکینگ \nکارگذار شما \nآرام",
  "seoDescription": "این آگهی فروش/پیش فروش در تهران ، منطقه 3 ، شریعتی - ظفر واقع شده است. آپارتمان/برج مسکونی با متراژ 223 متر، 12 سال ساخت ‌ و 4 اتاق خواب دارد. ‌قیمت این آگهی ‌14495000000 تومان می باشد. \nبا توجه به گزینه انتخابی شما، تعدادی ملک پیشنهادی دیگر در سامانه کیلید وجود دارد که پیشنهاد می‏شود آنها را نیز بررسی کنید. این خانه‌ها در لوکیشن نزدیک این آگهی قرار دارند و از نظر متراژ، تعداد اتاق‌ خواب‌ها و امکانات با آنچه انتخاب کرده‌اید، تشابه زیادی دارند.",
  "bread_crumbs": [
      "خانه",
      "خرید",
      "تهران",
      "منطقه 3",
      "شریعتی - ظفر"
  ],
  "contact": {
      "type": "AGENCY",
      "fullName": "خانم آرام",
      "callNumber": "09044162569",
      "departmentName": "ملک چی",
      "departmentLogoUrl": "https://cdn.kilid.com/photos/large/logo_2039406e-fca6-4df8-b04c-72cc77a96780.webp",
      "departmentId": 1005377,
      "whatsappAvailibility": true
  },
  "graph": {
      "content": [
          {
              "date": "2021-09-23",
              "periodSymbol": "مهر - 1400",
              "value": 7747488179.6192
          },
          {
              "date": "2021-10-23",
              "periodSymbol": "آبان - 1400",
              "value": 7716680622.08438
          },
          {
              "date": "2021-11-22",
              "periodSymbol": "آذر - 1400",
              "value": 7866591821.89276
          },
          {
              "date": "2021-12-22",
              "periodSymbol": "دی - 1400",
              "value": 8125702853.09702
          },
          {
              "date": "2022-01-21",
              "periodSymbol": "بهمن - 1400",
              "value": 8162532649.79833
          },
          {
              "date": "2022-02-20",
              "periodSymbol": "اسفند - 1400",
              "value": 8405137329.53983
          },
          {
              "date": "2022-03-21",
              "periodSymbol": "فروردین - 1401",
              "value": 7636895624.81863
          },
          {
              "date": "2022-04-21",
              "periodSymbol": "اردیبهشت - 1401",
              "value": 8574624030.53609
          },
          {
              "date": "2022-05-22",
              "periodSymbol": "خرداد - 1401",
              "value": 9087739440.46083
          },
          {
              "date": "2022-06-22",
              "periodSymbol": "تیر - 1401",
              "value": 9355529201.77014
          },
          {
              "date": "2022-07-23",
              "periodSymbol": "مرداد - 1401",
              "value": 9817165428.07036
          },
          {
              "date": "2022-08-23",
              "periodSymbol": "شهریور - 1401",
              "value": 9672928286.57732
          }
      ]
  }
},
{
  "identifier": "3003454",
  "title": "آپارتمان 134متری 2خواب میرداماد شمس تبریزی دارای 3پارکینگ سندی ",
  "totalPrice": 15400000000,
  "unitPrice": 115000000,
  "location": {
      "locationName": "تهران ، منطقه 3 ، بلوار میرداماد",
      "longitude": 51.4323663711548,
      "latitude": 35.7645698268877,
      "targetGlobalLocation": {
          "id": 246690,
          "type": "REGION"
      }
  },
  "images": [
        "https://cdn.kilid.com/photos/large/listing_50c9be53-ec88-4696-9777-eaf24a577d0e.jpg",
        "https://cdn.kilid.com/photos/large/listing_726c8492-759c-47b6-92c0-06621c34574d.jpg",
        "https://cdn.kilid.com/photos/large/listing_f4f47a2f-d182-4027-b9c0-24cfde921a07.jpg",
        "https://cdn.kilid.com/photos/large/listing_27a93e12-ba02-445e-822b-e955215e6c08.jpg",
        "https://cdn.kilid.com/photos/large/listing_74dcc2b2-42de-4e5b-a648-cd98cc5e9fd4.jpg",
        "https://cdn.kilid.com/photos/large/listing_09ff1a31-417b-4cad-b963-4bfc5eede87a.jpg",
        "https://cdn.kilid.com/photos/large/listing_aa4c6564-39d3-4277-8706-5dbebd7db86e.jpg",
        "https://cdn.kilid.com/photos/small/listing_31e7d93f-dde6-408e-b360-390c0fe11035.jpg",
        "https://cdn.kilid.com/photos/large/listing_31e7d93f-dde6-408e-b360-390c0fe11035.jpg"
  ],
  "type": {
      "landuseType": "مسکونی",
      "propertyType": "آپارتمان/برج"
  },
  "age": null,
  "floorArea": 134.0,
  "floorAreaUnit": "m2",
  "numOfBeds": 2,
  "numberOfParking": 3,
  "features": {
      "parking": false,
      "lobby": true,
      "warehouse": true,
      "sports_hall": false,
      "guard": true,
      "elevator": true,
      "balcony": false,
      "swimming_pool": false,
      "sauna": false,
      "air_conditioning": true,
      "conference_hall": false,
      "roof_garden": false,
      "remote_door": true,
      "jacuzzi": false,
      "central_antenna": false,
      "null": true
  },
  "description": ": ** آپارتمان پر نور و خوش نقشه و فول مهندسی شده کامل با پلن تفکیکی \n** گذر عریض و دسترسی بالا به دستگردی و میرداماد و شریعتی و مدرس\n ** فول امکانات با متریال به روز\n ** ورودی به حیاط مشجر و بعد لابی مجلل \n** سالنی پر نور و نورگیری از حیاط مشجر کف سنگ 70*70 \n** آشپز خانه ای سرتاسر کابینت های ممبران و نورگیری از دو جهت\n ** 2 اتاق خواب پوشیده از سرامیک با نور فراوان و کمد دیواری های به شدت کاربردی \n**تی وی روم دنج \n** مجهز به داکت اسپیلیت \n** سیستم امنیتی هشدار حریق و درب اتوماتیک \n**سرایدار مقیم و 24ساعته \n** سند شخصی و تک برگ آماده انتقال \nکارگذار شما \nآرام \nاملاک ملک چی \n\n\nپاسخ گویی همه ساعته",
  "seoDescription": "این آگهی فروش/پیش فروش در تهران ، منطقه 3 ، بلوار میرداماد واقع شده است. آپارتمان/برج مسکونی با متراژ 134 متر،  و 2 اتاق خواب دارد. ‌قیمت این آگهی ‌15400000000 تومان می باشد. \nبا توجه به گزینه انتخابی شما، تعدادی ملک پیشنهادی دیگر در سامانه کیلید وجود دارد که پیشنهاد می‏شود آنها را نیز بررسی کنید. این خانه‌ها در لوکیشن نزدیک این آگهی قرار دارند و از نظر متراژ، تعداد اتاق‌ خواب‌ها و امکانات با آنچه انتخاب کرده‌اید، تشابه زیادی دارند.",
  "bread_crumbs": [
      "خانه",
      "خرید",
      "تهران",
      "منطقه 3",
      "بلوار میرداماد"
  ],
  "contact": {
      "type": "AGENCY",
      "fullName": "خانم آرام",
      "callNumber": "09044162569",
      "departmentName": "ملک چی",
      "departmentLogoUrl": "https://cdn.kilid.com/photos/large/logo_2039406e-fca6-4df8-b04c-72cc77a96780.webp",
      "departmentId": 1005377,
      "whatsappAvailibility": true
  },
  "graph": {
      "content": [
          {
              "date": "2021-09-23",
              "periodSymbol": "مهر - 1400",
              "value": 7747488179.6192
          },
          {
              "date": "2021-10-23",
              "periodSymbol": "آبان - 1400",
              "value": 7716680622.08438
          },
          {
              "date": "2021-11-22",
              "periodSymbol": "آذر - 1400",
              "value": 7866591821.89276
          },
          {
              "date": "2021-12-22",
              "periodSymbol": "دی - 1400",
              "value": 8125702853.09702
          },
          {
              "date": "2022-01-21",
              "periodSymbol": "بهمن - 1400",
              "value": 8162532649.79833
          },
          {
              "date": "2022-02-20",
              "periodSymbol": "اسفند - 1400",
              "value": 8405137329.53983
          },
          {
              "date": "2022-03-21",
              "periodSymbol": "فروردین - 1401",
              "value": 7636895624.81863
          },
          {
              "date": "2022-04-21",
              "periodSymbol": "اردیبهشت - 1401",
              "value": 8574624030.53609
          },
          {
              "date": "2022-05-22",
              "periodSymbol": "خرداد - 1401",
              "value": 9087739440.46083
          },
          {
              "date": "2022-06-22",
              "periodSymbol": "تیر - 1401",
              "value": 9355529201.77014
          },
          {
              "date": "2022-07-23",
              "periodSymbol": "مرداد - 1401",
              "value": 9817165428.07036
          },
          {
              "date": "2022-08-23",
              "periodSymbol": "شهریور - 1401",
              "value": 9672928286.57732
          }
      ]
  }
},
{
  "identifier": "2921758",
  "title": "109 متر / کم واحد / طبقات بالا / روبه آفتاب / شمس آباد",
  "totalPrice": 6950000000,
  "unitPrice": null,
  "location": {
      "locationName": "تهران ، منطقه 4 ، شمس اباد - مجیدیه",
      "longitude": 51.4794675891958,
      "latitude": 35.751506481458,
      "targetGlobalLocation": {
          "id": 246685,
          "type": "REGION"
      }
  },
  "images": [
        "https://cdn.kilid.com/photos/small/listing_d410ac62-22c2-42c7-989d-fd54010a97ab.jpg",
        "https://cdn.kilid.com/photos/large/listing_d410ac62-22c2-42c7-989d-fd54010a97ab.jpg"
  ],
  "type": {
      "landuseType": "مسکونی",
      "propertyType": "آپارتمان/برج"
  },
  "age": 5,
  "floorArea": 109.0,
  "floorAreaUnit": "m2",
  "numOfBeds": 2,
  "numberOfParking": 1,
  "features": {
      "parking": false,
      "lobby": false,
      "warehouse": true,
      "sports_hall": false,
      "guard": false,
      "elevator": true,
      "balcony": true,
      "swimming_pool": false,
      "sauna": false,
      "air_conditioning": false,
      "conference_hall": false,
      "roof_garden": false,
      "remote_door": true,
      "jacuzzi": false,
      "central_antenna": false
  },
  "description": "**فروش آپارتمان مسکونی هروی شمس آباد** \n\n⭕ نقشه و پلان فوق العاده بینظیر و خاص \n\n⭕ بدون کوچکترین پرتی و فضای ازدست رفته \n\n⭕ همنشین با آفتاب دلچسب جنوب \n\n⭕ سالن لاکچری با فضای کاملا باز \n\n⭕ آشپزخانه رویایی \n\n⭕ بالکن کاربردی\n\n⭕ متریال مرغوب\n\n⭕ بازسازی شده\n\n⭕ لوکیشن نایاب \n\n⭕ دسترسی عالی \n\n⭕ فرعی مشجر\n\n⭕ مختص خاص پسندان \n\n✅اعتماد شما , اعتبار ماست \n\nمشاورامورملکی شما \nشایان \n\nبزرگ املاک نگین",
  "seoDescription": "این آگهی فروش/پیش فروش در تهران ، منطقه 4 ، شمس اباد - مجیدیه واقع شده است. آپارتمان/برج مسکونی با متراژ 109 متر، 5 سال ساخت ‌ و 2 اتاق خواب دارد. ‌قیمت این آگهی ‌6950000000 تومان می باشد. \nبا توجه به گزینه انتخابی شما، تعدادی ملک پیشنهادی دیگر در سامانه کیلید وجود دارد که پیشنهاد می‏شود آنها را نیز بررسی کنید. این خانه‌ها در لوکیشن نزدیک این آگهی قرار دارند و از نظر متراژ، تعداد اتاق‌ خواب‌ها و امکانات با آنچه انتخاب کرده‌اید، تشابه زیادی دارند.",
  "bread_crumbs": [
      "خانه",
      "خرید",
      "تهران",
      "منطقه 4",
      "شمس اباد - مجیدیه"
  ],
  "contact": {
      "type": "AGENCY",
      "fullName": "آقای شایان",
      "callNumber": "09124240970",
      "departmentName": "بزرگ املاک نگین دولت",
      "departmentLogoUrl": "https://cdn.kilid.com/photos/large/logo_c1e4d396-b668-4cc7-bbf2-260443cdcc13.webp",
      "departmentId": 1000510,
      "whatsappAvailibility": true
  },
  "graph": {
      "content": [
          {
              "date": "2021-09-23",
              "periodSymbol": "مهر - 1400",
              "value": 7747488179.6192
          },
          {
              "date": "2021-10-23",
              "periodSymbol": "آبان - 1400",
              "value": 7716680622.08438
          },
          {
              "date": "2021-11-22",
              "periodSymbol": "آذر - 1400",
              "value": 7866591821.89276
          },
          {
              "date": "2021-12-22",
              "periodSymbol": "دی - 1400",
              "value": 8125702853.09702
          },
          {
              "date": "2022-01-21",
              "periodSymbol": "بهمن - 1400",
              "value": 8162532649.79833
          },
          {
              "date": "2022-02-20",
              "periodSymbol": "اسفند - 1400",
              "value": 8405137329.53983
          },
          {
              "date": "2022-03-21",
              "periodSymbol": "فروردین - 1401",
              "value": 7636895624.81863
          },
          {
              "date": "2022-04-21",
              "periodSymbol": "اردیبهشت - 1401",
              "value": 8574624030.53609
          },
          {
              "date": "2022-05-22",
              "periodSymbol": "خرداد - 1401",
              "value": 9087739440.46083
          },
          {
              "date": "2022-06-22",
              "periodSymbol": "تیر - 1401",
              "value": 9355529201.77014
          },
          {
              "date": "2022-07-23",
              "periodSymbol": "مرداد - 1401",
              "value": 9817165428.07036
          },
          {
              "date": "2022-08-23",
              "periodSymbol": "شهریور - 1401",
              "value": 9672928286.57732
          }
      ]
  }
},
{
  "identifier": "2904292",
  "title": "93 متر / فول / کم واحد / دوجهت نور / شمس آباد مجیدیه",
  "totalPrice": 5600000000,
  "unitPrice": null,
  "location": {
      "locationName": "تهران ، منطقه 4 ، شمس اباد - مجیدیه",
      "longitude": 51.4780483373428,
      "latitude": 35.7470334593479,
      "targetGlobalLocation": {
          "id": 246685,
          "type": "REGION"
      }
  },
  "images": [
        "https://cdn.kilid.com/photos/small/listing_c3cfca9e-6083-4ba1-b5fb-8c6956ea62ef.jpg",
        "https://cdn.kilid.com/photos/large/listing_c3cfca9e-6083-4ba1-b5fb-8c6956ea62ef.jpg"
  ],
  "type": {
      "landuseType": "مسکونی",
      "propertyType": "آپارتمان/برج"
  },
  "age": 6,
  "floorArea": 94.0,
  "floorAreaUnit": "m2",
  "numOfBeds": 2,
  "numberOfParking": 1,
  "features": {
      "parking": false,
      "lobby": false,
      "warehouse": true,
      "sports_hall": false,
      "guard": false,
      "elevator": true,
      "balcony": true,
      "swimming_pool": false,
      "sauna": false,
      "air_conditioning": false,
      "conference_hall": false,
      "roof_garden": false,
      "remote_door": true,
      "jacuzzi": false,
      "central_antenna": false
  },
  "description": "فروش آپارتمان مسکونی در شمس آباد شهید کرد\n\n\nنقشه فوق العاده \n\nسالن پذیرایی بزرگ \n\nدو جهت نور\n\nبدون پرتی \n\nطبقات بالا\n\nکم واحد\n\nفول امکانات \n\nدسترسی عالی\n\nلوکیشن ناب\n\nساختمان مهندسی ساز و باصلابت\n\nتکرارنشدنی و بینظیر\n\nبرای کسب اطلاعات بیشتر و معرفی فایل های مشابه تماس بگیرید \n\nمشاورامورملکی شما    شایان \n \nبزرگ املاک نگین دولت",
  "seoDescription": "این آگهی فروش/پیش فروش در تهران ، منطقه 4 ، شمس اباد - مجیدیه واقع شده است. آپارتمان/برج مسکونی با متراژ 94 متر، 6 سال ساخت ‌ و 2 اتاق خواب دارد. ‌قیمت این آگهی ‌5600000000 تومان می باشد. \nبا توجه به گزینه انتخابی شما، تعدادی ملک پیشنهادی دیگر در سامانه کیلید وجود دارد که پیشنهاد می‏شود آنها را نیز بررسی کنید. این خانه‌ها در لوکیشن نزدیک این آگهی قرار دارند و از نظر متراژ، تعداد اتاق‌ خواب‌ها و امکانات با آنچه انتخاب کرده‌اید، تشابه زیادی دارند.",
  "bread_crumbs": [
      "خانه",
      "خرید",
      "تهران",
      "منطقه 4",
      "شمس اباد - مجیدیه"
  ],
  "contact": {
      "type": "AGENCY",
      "fullName": "آقای شایان",
      "callNumber": "09124240970",
      "departmentName": "بزرگ املاک نگین دولت",
      "departmentLogoUrl": "https://cdn.kilid.com/photos/large/logo_c1e4d396-b668-4cc7-bbf2-260443cdcc13.webp",
      "departmentId": 1000510,
      "whatsappAvailibility": true
  },
  "graph": {
      "content": [
          {
              "date": "2021-09-23",
              "periodSymbol": "مهر - 1400",
              "value": 7747488179.6192
          },
          {
              "date": "2021-10-23",
              "periodSymbol": "آبان - 1400",
              "value": 7716680622.08438
          },
          {
              "date": "2021-11-22",
              "periodSymbol": "آذر - 1400",
              "value": 7866591821.89276
          },
          {
              "date": "2021-12-22",
              "periodSymbol": "دی - 1400",
              "value": 8125702853.09702
          },
          {
              "date": "2022-01-21",
              "periodSymbol": "بهمن - 1400",
              "value": 8162532649.79833
          },
          {
              "date": "2022-02-20",
              "periodSymbol": "اسفند - 1400",
              "value": 8405137329.53983
          },
          {
              "date": "2022-03-21",
              "periodSymbol": "فروردین - 1401",
              "value": 7636895624.81863
          },
          {
              "date": "2022-04-21",
              "periodSymbol": "اردیبهشت - 1401",
              "value": 8574624030.53609
          },
          {
              "date": "2022-05-22",
              "periodSymbol": "خرداد - 1401",
              "value": 9087739440.46083
          },
          {
              "date": "2022-06-22",
              "periodSymbol": "تیر - 1401",
              "value": 9355529201.77014
          },
          {
              "date": "2022-07-23",
              "periodSymbol": "مرداد - 1401",
              "value": 9817165428.07036
          },
          {
              "date": "2022-08-23",
              "periodSymbol": "شهریور - 1401",
              "value": 9672928286.57732
          }
      ]
  }
},
{
  "identifier": "2962809",
  "title": "63 متر / طبقات بالا / 5 ساله / شمس آباد ",
  "totalPrice": 3650000000,
  "unitPrice": null,
  "location": {
      "locationName": "تهران ، منطقه 4 ، شمس اباد - مجیدیه",
      "longitude": 51.4760280168604,
      "latitude": 35.748709703622,
      "targetGlobalLocation": {
          "id": 246685,
          "type": "REGION"
      }
  },
  "images": [
        "https://cdn.kilid.com/photos/small/listing_20ff75ce-8852-4daf-a1f9-3587912131d6.jpg",
        "https://cdn.kilid.com/photos/large/listing_20ff75ce-8852-4daf-a1f9-3587912131d6.jpg"
  ],
  "type": {
      "landuseType": "مسکونی",
      "propertyType": "آپارتمان/برج"
  },
  "age": 5,
  "floorArea": 63.0,
  "floorAreaUnit": "m2",
  "numOfBeds": 1,
  "numberOfParking": 1,
  "features": {
      "parking": false,
      "lobby": false,
      "warehouse": false,
      "sports_hall": false,
      "guard": false,
      "elevator": true,
      "balcony": false,
      "swimming_pool": false,
      "sauna": false,
      "air_conditioning": true,
      "conference_hall": false,
      "roof_garden": false,
      "remote_door": true,
      "jacuzzi": false,
      "central_antenna": false
  },
  "description": "*** فروش آپارتمان مسکونی در شمس آباد ***\n\n⭕ نقشه فوق العاده \n\n⭕ بدون پرتی \n\n⭕ بهترین استفاده از فضا و ابعاد \n\n⭕ طبقات بالا\n\n⭕ ساختمانی کم تردد\n\n⭕ نما و مشاعات تمیز\n\n⭕ پارکینگ , آسانسور \n\n⭕ سرایداری مقیم \n\n⭕ دسترسی عالی \n\nبرای کسب اطلاعات بیشتر و معرفی فایل های مشابه تماس بگیرید \n\nمشاور امور ملکی شما \n\nبزرگ املاک نگین",
  "seoDescription": "این آگهی فروش/پیش فروش در تهران ، منطقه 4 ، شمس اباد - مجیدیه واقع شده است. آپارتمان/برج مسکونی با متراژ 63 متر، 5 سال ساخت ‌ و 1 اتاق خواب دارد. ‌قیمت این آگهی ‌3650000000 تومان می باشد. \nبا توجه به گزینه انتخابی شما، تعدادی ملک پیشنهادی دیگر در سامانه کیلید وجود دارد که پیشنهاد می‏شود آنها را نیز بررسی کنید. این خانه‌ها در لوکیشن نزدیک این آگهی قرار دارند و از نظر متراژ، تعداد اتاق‌ خواب‌ها و امکانات با آنچه انتخاب کرده‌اید، تشابه زیادی دارند.",
  "bread_crumbs": [
      "خانه",
      "خرید",
      "تهران",
      "منطقه 4",
      "شمس اباد - مجیدیه"
  ],
  "contact": {
      "type": "AGENCY",
      "fullName": "آقای شایان",
      "callNumber": "09124240970",
      "departmentName": "بزرگ املاک نگین دولت",
      "departmentLogoUrl": "https://cdn.kilid.com/photos/large/logo_c1e4d396-b668-4cc7-bbf2-260443cdcc13.webp",
      "departmentId": 1000510,
      "whatsappAvailibility": true
  },
  "graph": {
      "content": [
          {
              "date": "2021-09-23",
              "periodSymbol": "مهر - 1400",
              "value": 7747488179.6192
          },
          {
              "date": "2021-10-23",
              "periodSymbol": "آبان - 1400",
              "value": 7716680622.08438
          },
          {
              "date": "2021-11-22",
              "periodSymbol": "آذر - 1400",
              "value": 7866591821.89276
          },
          {
              "date": "2021-12-22",
              "periodSymbol": "دی - 1400",
              "value": 8125702853.09702
          },
          {
              "date": "2022-01-21",
              "periodSymbol": "بهمن - 1400",
              "value": 8162532649.79833
          },
          {
              "date": "2022-02-20",
              "periodSymbol": "اسفند - 1400",
              "value": 8405137329.53983
          },
          {
              "date": "2022-03-21",
              "periodSymbol": "فروردین - 1401",
              "value": 7636895624.81863
          },
          {
              "date": "2022-04-21",
              "periodSymbol": "اردیبهشت - 1401",
              "value": 8574624030.53609
          },
          {
              "date": "2022-05-22",
              "periodSymbol": "خرداد - 1401",
              "value": 9087739440.46083
          },
          {
              "date": "2022-06-22",
              "periodSymbol": "تیر - 1401",
              "value": 9355529201.77014
          },
          {
              "date": "2022-07-23",
              "periodSymbol": "مرداد - 1401",
              "value": 9817165428.07036
          },
          {
              "date": "2022-08-23",
              "periodSymbol": "شهریور - 1401",
              "value": 9672928286.57732
          }
      ]
  }
},
];
const SectionAdSlider:React.FC = () => {
  const themeClass = "bg-white"
  return (
    <div
      className={`${themeClass} flex flex-col items-center py-[50px] px-total`}
    >
      <h4 className="text-[18px] text-red">پیشنهادهای ویژه</h4>
      <h2 className="sm:text-[24px] smmin:text-[32px] font-bold">
        آگهی‌های جدید
      </h2>
      <h6 className="w-[70px] border-b-red border-b-solid border-b-[3px] mb-[15px]"></h6>
      {/* <p className="w-[50%] text-darkGray text-center text-[14px] mb-[20px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p> */}
      <div className="overflow-hidden w-[100%]">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          arrows={false}
        >
          {(Ads.length === 0 ? Array.from(new Array(8)) : Ads).map(
            (item : any, index : number) => {
              return (
                <>
                  {item ? (
                    <Card key={index} item={item} />
                  ) : (
                    <div key={index} className="ml-[5px]">
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={"200px"}
                      />
                      <div className="mt-[10px]">
                        <Skeleton
                          variant="rectangular"
                          width={`50%`}
                          height="15px"
                        />
                      </div>
                      <div className="mt-[5px]">
                        <Skeleton
                          variant="rectangular"
                          width={`80%`}
                          height="15px"
                        />
                      </div>
                      <div className="mt-[5px] mb-[30px]">
                        <Skeleton
                          variant="rectangular"
                          width={`30%`}
                          height="15px"
                        />
                      </div>
                    </div>
                  )}
                </>
              );
            }
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default SectionAdSlider;
