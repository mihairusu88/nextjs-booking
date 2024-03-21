import { ServiceCategory } from '@/app/lib/constants/service';

// export const servicePersons = [
//   {
//     id: 1,
//     name: 'Kylee Danford',
//     category: ServiceCategory.cleaning,
//     price: 25,
//     reviews: 8289,
//     rating: 4.8,
//     imageUrl:
//       'https://media.istockphoto.com/id/1295913680/ro/fotografie/femeie-care-face-cur%C4%83%C8%9Benie-%C3%AEn-cas%C4%83.jpg?s=612x612&w=0&k=20&c=Xo6_DIpGN8JKCaL3Gy5oStm-qaOnFfJSBHxW0l1f6fE=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: 'Sofia, Bulgaria, BG, 1000 Street 5, 5th floor',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Alfonzo Schuessler',
//     category: ServiceCategory.cleaning,
//     price: 20,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1204681930/ro/fotografie/omul-ceruire-parchet-la-domiciliu-focalizare-selectiv%C4%83-pe-m%C3%A2n%C4%83-cu-p%C3%A2nz%C4%83-m%C4%83nu%C8%99i-de.jpg?s=612x612&w=0&k=20&c=NAUTZAr6nluAP_RiHaJpQkSZ4U5YxacxtMeSi2cqOkE=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '255 Grand Park, Brooklyn, New York, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Sanjuanita Ordonez',
//     category: ServiceCategory.cleaning,
//     price: 22,
//     reviews: 7938,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/1132394797/ro/fotografie/%C3%AEncrez%C4%83tor-supervizor-de-sex-feminin-din-america-latin%C4%83-la-o-sp%C4%83l%C4%83torie-cu-bra%C8%9Bele.jpg?s=612x612&w=0&k=20&c=XsCtIX3SmHiQYVDyV140IpnXlk0x_IGXVL2-WE0VZUw=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: 'Street N 5, Mexico, DF',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: 'Freida Varnes',
//     category: ServiceCategory.cleaning,
//     price: 24,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1417833200/ro/fotografie/cur%C4%83%C8%9B%C4%83tori-profesioni%C8%99ti-ferici%C8%9Bi-care-cur%C4%83%C8%9B%C4%83-o-baie-%C3%AEntr-un-apartament.jpg?s=612x612&w=0&k=20&c=_h5fGO-ohdX-AKJm5bPwj4Cef28wjkCRxZinXORX_ic=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: 'Street 17, 75008, Paris, France',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: 'Wade Warren',
//     category: ServiceCategory.repairing,
//     price: 24,
//     reviews: 5287,
//     rating: 4.6,
//     imageUrl:
//       'https://media.istockphoto.com/id/467923700/ro/fotografie/mecanic-folosind-tableta-pe-masina.jpg?s=612x612&w=0&k=20&c=Z0mBty8J5itvQNhK7UIKKpBSSzzaLdTjXvZHM5gVIWU=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '171 West 42nd Street, New York, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: 'John William',
//     category: ServiceCategory.repairing,
//     price: 22,
//     reviews: 7938,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/833171812/ro/fotografie/a%C8%99tept%C4%83m-cu-ner%C4%83bdare-s%C4%83-v%C4%83-servim.jpg?s=612x612&w=0&k=20&c=jygFzTUn_kcxxw7fIzxMrtekFuExRS0GrXEuQRAMjHc=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '200 W 34th, New York, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: 'Rodolfo Goode',
//     category: ServiceCategory.repairing,
//     price: 23,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1345670579/ro/fotografie/instalator-fericit-sau-electrician-care-ajunge-acas%C4%83-dup%C4%83-un-apel-la-cas%C4%83.jpg?s=612x612&w=0&k=20&c=l_mzHb9Lcf7QJvBgEjF4vmdvwdh8NhQIDMNmk_rVmdQ=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '201 W 5th Street, Barcelona, Spain',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: 'Clinton Mcclure',
//     category: ServiceCategory.repairing,
//     price: 23,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1309805594/ro/video/portretul-unui-electrician-z%C3%A2mbitor-care-renoveaz%C4%83-casa.jpg?s=640x640&k=20&c=03vMzDW_vwmabSXwogp0A9jY80irIpOErhj8xh9Ctr4=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '18 New Street 3, London, UK',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: 'Brooklyn Simmons',
//     category: ServiceCategory.painting,
//     price: 22,
//     reviews: 4572,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/494161354/ro/fotografie/reparatii-masculine-in-interior.jpg?s=612x612&w=0&k=20&c=ftdcuA-7DFJfOHlaHLWA7URRgUPUXQ212-rl61dXhp0=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '10 W 34th St, New York, NY, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: 'Marci Senter',
//     category: ServiceCategory.painting,
//     price: 22,
//     reviews: 7938,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/1309113563/ro/fotografie/pictor-de-cas%C4%83.jpg?s=612x612&w=0&k=20&c=LE3B_E2J53m2VnZMBW-jQ1v20W-4BHc2g4GVY_FDuLY=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '10018, 5th Avenue, New York City, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: 'Rayford Chenail',
//     category: ServiceCategory.painting,
//     price: 23,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1493170748/ro/video/lucr%C4%83tor-%C3%AEn-construc%C8%9Bii-care-mut%C4%83-rola-de-vopsea-pe-perete-%C3%AEn-noul-birou.jpg?s=640x640&k=20&c=HPZcWG-QGSIUB0VlA9w4ewOBp0nlblOHZ1VPaEQPkwY=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '75008, Champs-Élysées, Paris, France',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 12,
//     name: 'Cameron Williamson',
//     category: ServiceCategory.appliance,
//     price: 26,
//     reviews: 6273,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1136599956/ro/fotografie/portretul-coaforului-z%C3%A2mbitor-%C3%AEn-salonul-de-%C3%AEnfrumuse%C8%9Bare-femeie-frumoasa-in-%C8%99or%C8%9B-negru.jpg?s=612x612&w=0&k=20&c=_eJZMcQt1amb3bBqqgFJW5az39wGee2zoRJI7ysl-gA=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: 'W1D 1AU, Oxford Street, London, United Kingdom',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 13,
//     name: 'Thad Eddings',
//     category: ServiceCategory.appliance,
//     price: 22,
//     reviews: 7938,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/928076872/ro/fotografie/tehnician-de-fixare-frigider.jpg?s=612x612&w=0&k=20&c=nJgGeZCi8Su78NUskrw39uq8UVhQBRNMHQtlu52FHdA=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '94103, Market Street, San Francisco, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 14,
//     name: 'Janetta Rotolo',
//     category: ServiceCategory.appliance,
//     price: 23,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1396404107/ro/fotografie/vizita-personalului-medical-%C3%AEn-uniform%C4%83-la-pacient-la-domiciliu.jpg?s=612x612&w=0&k=20&c=QbCIXBfTWdBYIQTACz9s7YkgJq9nBz0Q20G1XaTOOhw=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '10178, Alexanderplatz, Berlin, Germany',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 15,
//     name: 'Geoffrey Matt',
//     category: ServiceCategory.appliance,
//     price: 24,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1169452224/ro/fotografie/serviciul-de-instalare-fix-reparatii-intretinerea-unui-aer-conditionat-unitate.jpg?s=612x612&w=0&k=20&c=kdo-GBJc5RLVQqwfO6bfzi0w9Sm_2yia-bQxILzIHK4=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '2000, Champs de Mars, Paris, France',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 16,
//     name: 'Theresa Webb',
//     category: ServiceCategory.plumbing,
//     price: 27,
//     reviews: 4263,
//     rating: 4.5,
//     imageUrl:
//       'https://media.istockphoto.com/id/530423761/ro/fotografie/femeie-instalator-de-lucru-pe-centrala-termica-cazan.jpg?s=612x612&w=0&k=20&c=BWUyupRz4rMS5lhd2XNRCt14s2KExyoUhevRX5xZzmA=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '30303, Peachtree Street, Atlanta, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 17,
//     name: 'Daryl Nehls',
//     category: ServiceCategory.plumbing,
//     price: 23,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/511317032/ro/fotografie/tehnician-mecanic-pe-un-garaj.jpg?s=612x612&w=0&k=20&c=3kxR0p9U9v-WtvRiLlfUqRjEh4X4O80G13eQfdeseiw=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: 'EC1A 1BB, Fleet Street, London, United Kingdom',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 18,
//     name: 'Merril Kervin',
//     category: ServiceCategory.plumbing,
//     price: 22,
//     reviews: 7938,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/1395783965/ro/fotografie/tehnician-instalatii-sanitare-verifica-instalarea-apei-cu-gest-ok-notepad.jpg?s=612x612&w=0&k=20&c=Aw36f9xpuaMPtta-sY2j5I3Tj1tOe3UqEFSA5UwryXc=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '90210, Rodeo Drive, Beverly Hills, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 19,
//     name: 'Elmer Laverty',
//     category: ServiceCategory.plumbing,
//     price: 24,
//     reviews: 6182,
//     rating: 4.9,
//     imageUrl:
//       'https://media.istockphoto.com/id/1049769132/ro/fotografie/z%C3%A2mbind-instalator-frumos-%C3%AEn-picioare-cu-bra%C8%9Bele-%C3%AEncruci%C8%99ate-%C8%99i-se-uit%C4%83-la-aparatul-de.jpg?s=612x612&w=0&k=20&c=-CoRJ_7QEcVpCYMwlduyYdDrnIISLyEO9_G2io8CMVM=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '1010, Kärntner Straße, Vienna, Austria',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 20,
//     name: 'Courtney Henry',
//     category: ServiceCategory.shifting,
//     price: 32,
//     reviews: 5521,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/1179848892/ro/fotografie/constructor-handyman-cu-instrumente-de-construc%C8%9Bie-renovarea-casei-de-fundal.jpg?s=612x612&w=0&k=20&c=zPOWDEKGugOO2aw5hk-b98F7jdLy_JV1mv00oHu-mIg=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '10013, Broadway, New York City, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 21,
//     name: 'Francene Vandyne',
//     category: ServiceCategory.shifting,
//     price: 22,
//     reviews: 7932,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/1298255432/ro/fotografie/happy-de-sex-feminin-%C3%AEn-coverall-%C8%99i-hardhat-holding-chei-%C8%99i-figura-casa-de-h%C3%A2rtie.jpg?s=612x612&w=0&k=20&c=CfVrsVSp1Jds0_9vF88Xlmpvlvmf--HqMeN9az-NrZQ=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '80331, Marienplatz, Munich, Germany',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 22,
//     name: 'Florencio Donance',
//     category: ServiceCategory.shifting,
//     price: 23,
//     reviews: 6128,
//     rating: 4.8,
//     imageUrl:
//       'https://media.istockphoto.com/id/1427196190/ro/fotografie/mutarea-lucr%C4%83torilor-de-servicii-%C3%AEn-aer-liber-cutii-de-desc%C4%83rcare-%C8%99i-lista-de-verificare.jpg?s=612x612&w=0&k=20&c=NyYa70kZcX42Ap395UbVnibgnzwJ_jrNayYfO7JNxD0=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: 'SW1A 1AA, Buckingham Palace Road, London, United Kingdom',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
//   {
//     id: 23,
//     name: 'Jamuel Eusebio',
//     category: ServiceCategory.shifting,
//     price: 22,
//     reviews: 7938,
//     rating: 4.7,
//     imageUrl:
//       'https://media.istockphoto.com/id/1205920897/ro/fotografie/asiatice-frumos-figura-expert-%C3%AEn-repararea-acas%C4%83-repararea-diferitelor-p%C4%83r%C8%9Bi-ale-casei.jpg?s=612x612&w=0&k=20&c=0RayGPuN6IjF1aHAqavq5xIn5wIX_aeCPV26wcIiNqY=',
//     about:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     location: '94110, Valencia Street, San Francisco, USA',
//     photos: [
//       {
//         id: 1,
//         url: 'https://media.istockphoto.com/id/1146743127/photo/cleaning-bucket.jpg?s=612x612&w=0&k=20&c=rbxFoAVuax-z4qE0_1araB0pQIc5lcZwZn150YGVl6g=',
//       },
//       {
//         id: 2,
//         url: 'https://media.istockphoto.com/id/949220048/photo/woman-cleaning-computer-in-office.jpg?s=612x612&w=0&k=20&c=0-iP9v2XY9qw3xwEaa4zaYZm8u1IpLGN_YHvyCnKg9o=',
//       },
//       {
//         id: 3,
//         url: 'https://media.istockphoto.com/id/1297677804/photo/housemaid-cleans-the-table-mop-and-blue-bucket-with-the-detergents-in-the-background.jpg?s=612x612&w=0&k=20&c=RF_e5FgbMRzTRXYJtDMvKa0IsAmbsGkVYST7HkpFL4M=',
//       },
//       {
//         id: 4,
//         url: 'https://media.istockphoto.com/id/863454098/photo/woman-cleaning-with-a-spray-detergent.jpg?s=612x612&w=0&k=20&c=YhdRnyLeJIX54ri_wBAThx_D3NQlB1_bpWKE0F2nAiw=',
//       },
//       {
//         id: 5,
//         url: 'https://media.istockphoto.com/id/1215470244/photo/close-up-of-female-hand-using-wet-wipe-and-hand-sanitizer-spray-to-clean-stainless-steel.jpg?s=612x612&w=0&k=20&c=Obwgrr39b9Ohk-rBXpszwSNqa4sRe1xDacSNdZOdv9A=',
//       },
//       {
//         id: 6,
//         url: 'https://media.istockphoto.com/id/820793132/photo/dishwashing.jpg?s=612x612&w=0&k=20&c=JcMVYy1wRHcX5TZRMo9cIeMUSGgRacE03bmxFQUO1fE=',
//       },

//       {
//         id: 7,
//         url: 'https://media.istockphoto.com/id/683342444/photo/cleaning-sink-with-sponge.jpg?s=612x612&w=0&k=20&c=pVsj2G8cAd0Bqtdoi9R_YX55mx4eA9dQrB6E2FNDbVg=',
//       },
//       {
//         id: 8,
//         url: 'https://media.istockphoto.com/id/517797998/photo/woman-cleaning-oven.jpg?s=612x612&w=0&k=20&c=-E4bhQEBhZ9JtuJyasoDP5iEkKuLs-fCqBcKxWj_HLM=',
//       },
//       {
//         id: 9,
//         url: 'https://media.istockphoto.com/id/635801162/photo/woman-cleaning-kitchen-cabinets-with-sponge-and-spray-cleaner.jpg?s=612x612&w=0&k=20&c=K8QsFJ084bDRxBt8gYEjeQRjpTxY75z-8YsSJ-8-EnI=',
//       },
//       {
//         id: 10,
//         url: 'https://media.istockphoto.com/id/182222167/photo/cleaning-oven.jpg?s=612x612&w=0&k=20&c=Od0Nhlj1QzwqWT3hM0amJUK8ldCbPCksZE4u6nsnuSM=',
//       },
//       {
//         id: 11,
//         url: 'https://media.istockphoto.com/id/939464554/photo/woman-cleaning-bathroom-at-home.jpg?s=612x612&w=0&k=20&c=vCpyMcwbo0VP-oYN4J_bIPnIy4-m6NYGRzwGKMgZ0vQ=',
//       },
//       {
//         id: 12,
//         url: 'https://media.istockphoto.com/id/1257163740/photo/the-girl-in-rubber-gloves-scans-the-detergent-on-the-furniture-without-a-face.jpg?s=612x612&w=0&k=20&c=FZyzdawtrOu5rJ-vJdzgwcoYlfjy3NyuwatAlzLslJM=',
//       },
//     ],
//   },
// ];

// export const services = [
//   {
//     id: 1,
//     title: 'Cleaning',
//     type: ServiceCategory.cleaning,
//   },
//   {
//     id: 2,
//     title: 'Repairing',
//     type: ServiceCategory.repairing,
//   },
//   {
//     id: 3,
//     title: 'Painting',
//     type: ServiceCategory.painting,
//   },
//   {
//     id: 4,
//     title: 'Plumbing',
//     type: ServiceCategory.plumbing,
//   },
//   {
//     id: 5,
//     title: 'Appliance',
//     type: ServiceCategory.appliance,
//   },
//   {
//     id: 6,
//     title: 'Shifting',
//     type: ServiceCategory.shifting,
//   },
// ];

// export const reviews = [
//   {
//     id: 1,
//     rating: 4.6,
//     person: 'Lauralee Quintero',
//     message:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     imageUrl:
//       'https://media.istockphoto.com/id/876629044/photo/smiling-woman-posing-in-glasses.jpg?s=612x612&w=0&k=20&c=iddV_Pv5wNp8JbFXA6H6dDOgFnGxVzMrtfwrQCcHJNY=',
//     date: new Date('2024-01-12'),
//   },
//   {
//     id: 2,
//     rating: 4.1,
//     person: 'Clinton Mcclure',
//     message:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     imageUrl:
//       'https://media.istockphoto.com/id/1284027512/photo/smiling-man-with-arms-crossed-wearing-eyeglasses.jpg?s=612x612&w=0&k=20&c=En3cSGBp-kLfqusxS3yp_eg4Tu3MKw0UuL06eUmM0-I=',
//     date: new Date('2024-02-03'),
//   },
//   {
//     id: 3,
//     rating: 3.6,
//     person: 'Marci Senter',
//     message:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     imageUrl:
//       'https://media.istockphoto.com/id/1189198083/photo/smiling-attractive-young-lady-looking-talking-to-camera-at-home.jpg?s=612x612&w=0&k=20&c=rQv-HePZ9th7bvdpIkK4Sxk3p_Q9LwNId5P2GiqJGc4=',
//     date: new Date('2024-02-14'),
//   },
// ];

export const stars = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 4,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 2,
  },
  {
    id: 5,
    value: 1,
  },
];

export const cleaningServices = [
  {
    id: 1,
    title: 'Living Room',
  },
  {
    id: 2,
    title: 'Terrace',
  },
  {
    id: 3,
    title: 'Bedroom',
  },
  {
    id: 4,
    title: 'Bathroom',
  },
  {
    id: 5,
    title: 'Kitchen',
  },
  {
    id: 6,
    title: 'Dining Room',
  },
  {
    id: 7,
    title: 'Garage',
  },
];

export const startTime = [
  { id: 1, value: '09:00 AM' },
  { id: 2, value: '10:00 AM' },
  { id: 3, value: '11:00 AM' },
  { id: 4, value: '12:00 AM' },
  { id: 5, value: '13:00 PM' },
  { id: 6, value: '14:00 PM' },
  { id: 7, value: '15:00 PM' },
  { id: 8, value: '16:00 PM' },
  { id: 9, value: '17:00 PM' },
];
