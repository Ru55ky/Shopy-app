<template>
    <v-content>
            <v-carousel
                    cycle
                    interval="3000"
            >
                <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"

                >
                </v-carousel-item>
            </v-carousel>


        <v-container class="mt-8 row mx-auto">
            <v-card
                    class="mt-12 ml-auto mr-auto"
                    max-width="400"
                    v-for="preset in presets"
                    :key="preset.title"
                    dark
            >
                <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="preset.src"
                >
                    <v-card-title>{{preset.title}}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">{{preset.subtitle}}</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>{{preset.advantageMain}}</div>

                    <div>{{preset.advantageSecond}}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            color="orange"
                            text
                    >
                        Share
                    </v-btn>

                    <v-btn
                            color="orange"
                            text
                    >
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>

        </v-container>
    </v-content>


</template>

<script>
    export default {
        data(){
            return{
                items: [
                    {title:'Asus', description:'', promo: 'false', id: '', src:'https://dlcdnimgs.asus.com/websites/global/products/dfglq1twmvjbii1t/img/kv/product-kv.png'},
                    {title:'Sapphire', description:'', promo: 'false', id: '', src:'https://www.gigabyte.com/FileUpload/Global/KeyFeature/1307/img/product/08_color.png'},
                    {title: 'MSI', description:'', promo: 'false', id: '', src:'https://storage-asset.msi.com/global/picture/features/VGA/RTX2080/2080-Gaming-x-trio/intro-design-bg.jpg'},
                    {title: 'Ryzen', description: '', promo: '', id: '', src: 'https://i1.wp.com/blog.gamingmonk.com/wp-content/uploads/AMD-ryzen-3000.jpg?resize=1920%2C1080&ssl=1'},
                    {title: 'Sapphire Nitro', description: '', promo: '', id: '', src: 'https://img3.elmir.ua/img/2072903/3000/2000/videokarta_pci-e_radeon_rx_5700_xt_8gb_ddr6_sapphire_nitro+_11293-03-40g.jpg'},
                    {title: 'VEGA', description: '', promo: '', id: '', src: 'https://404store.com/2017/03/28/intel_motherboard-wallpaper-2560x1600.jpg'}
                ],
                presets: [
                    {title: 'Sapphire NITRO+ RX 580 8G G5', src: 'https://cdn.sapphiretech.global/assets/consumer/11265_01_20G_NITRO_RX_580/nitro_rx_580_8gb_picture_gallery_925x490_4.png',
                        subtitle: 'Memory: 8GB GDDR5 8400 MHz Effective', advantageMain: 'Dual-X Cooling', advantageSecond: 'NITRO Glow, Quick Connect'},

                    {title: 'Radeon RX Vega 64 8G', src: 'https://asset.msi.com/resize/image/global/product/product_5_20170725092006_59769cc69384e.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
                        subtitle: 'Memory: 8GB HBM2 1900 MHz Effective', advantageMain: 'NITRO Fan Check', advantageSecond: 'технология AMD Liquid VR'},

                    {title: 'GEFORCE GTX 1660 GAMING X 6G', src: 'https://asset.msi.com/resize/image/global/product/product_8_20190314112204_5c89c8dc6db62.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
                    subtitle: 'Memory: 6GB GDDR5 8002MHz Effective', advantageMain: 'Вентиляторы TORX 3.0\n' +
                            '- Дисперсионные лопасти: ускоренный воздушный поток за счет увеличенного угла изгиба.\n' +
                            '- Традиционные лопасти: стабильный поток воздуха, направленный вниз к массивному радиатору.'},

                    {title: 'GEFORCE RTX 2080 Ti GAMING X TRIO', src: 'https://asset.msi.com/resize/image/global/product/product_1_20180919185540_5ba22b2ce7ec4.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
                        subtitle: 'Memory: 11GB GDDR6 14000MHz Effective', advantageMain: 'Вентиляторы TORX 3.0\n' +
                            '- Дисперсионные лопасти: ускоренный воздушный поток за счет увеличенного угла изгиба.\n' +
                            '- Традиционные лопасти: стабильный поток воздуха, направленный вниз к массивному радиатору.'},
                ]
            }
        }
    }
</script>

<style scoped>
    div{
        color: white;
    }
</style>