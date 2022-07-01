const zingChartKPOP = {
    zingChartKPOPDescriptions: [
        {
            number: 'fa-solid fa-1',
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg',
            numberbonus: 35
        },
        {
            number: 'fa-solid fa-2',
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg',
            numberbonus: 35
        },
        {
            number: 'fa-solid fa-3',
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg',
            numberbonus: 35
        },
        {
            number: 'fa-solid fa-4',
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg',
            numberbonus: 35
        },
        {
            number: 'fa-solid fa-5',
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg',
            numberbonus: 35
        }
    ],
    render: function() {
        const htmlzingChartKPOPs = this.zingChartKPOPDescriptions.map(zingChartKPOPDescription => {
            return `
        <div class="week__item">
            <div class="week__item-description">
                <div class="week__item-number">
                    <div class="week__item-number--serial">
                        <i class="${zingChartKPOPDescription.number}"></i>
                    </div>
                    <div class="week__item-number--bonus">
                        <i class="fa-solid fa-sort-up"></i>
                        <span>${zingChartKPOPDescription.numberbonus}</span>
                    </div>
                </div>
                <div class="week__item-img">
                    <img src="${zingChartKPOPDescription.img}" alt="">
                    <div class="week__img-action">
                        <i class="week__action-play fa-solid fa-play"></i>
                    </div>
                </div>
                <div class="week__item-name">
                    <div class="week__item-namesong">
                        ${zingChartKPOPDescription.namesong}
                    </div>
                    <div class="week__item-nameauthor">
                        ${zingChartKPOPDescription.nameauthor}
                    </div>
                </div>
            </div>
            <div class="week__item-time">${zingChartKPOPDescription.time}</div>
        </div>
           `
        })
        $('.week__item-list--KPOP').innerHTML = htmlzingChartKPOPs.join('')

        
    },
    start: function() {
        this.render()
    }
}
export default zingChartKPOP;