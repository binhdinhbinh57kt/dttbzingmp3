const zingChartVN = {
    zingChartVNDescriptions: [
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
        const htmlzingChartVNs = this.zingChartVNDescriptions.map(zingChartVNDescription => {
            return `
        <div class="week__item">
            <div class="week__item-description">
                <div class="week__item-number">
                    <div class="week__item-number--serial">
                        <i class="${zingChartVNDescription.number}"></i>
                    </div>
                    <div class="week__item-number--bonus">
                        <i class="fa-solid fa-sort-up"></i>
                        <span>${zingChartVNDescription.numberbonus}</span>
                    </div>
                </div>
                <div class="week__item-img">
                    <img src="${zingChartVNDescription.img}" alt="">
                    <div class="week__img-action">
                        <i class="week__action-play fa-solid fa-play"></i>
                    </div>
                </div>
                <div class="week__item-name">
                    <div class="week__item-namesong">
                        ${zingChartVNDescription.namesong}
                    </div>
                    <div class="week__item-nameauthor">
                        ${zingChartVNDescription.nameauthor}
                    </div>
                </div>
            </div>
            <div class="week__item-time">${zingChartVNDescription.time}</div>
        </div>
           `
        })
        $('.week__item-list--VN').innerHTML = htmlzingChartVNs.join('')

        
    },
    start: function() {
        this.render()
    }
}
export default zingChartVN;