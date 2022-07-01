const zingChartTop = {
    zingChartTopDescriptions: [
        {
            number: 1,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 2,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 3,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 4,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 5,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 6,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 7,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 8,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 9,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 10,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 11,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 12,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        {
            number: 13,
            namesong: 'Cứ Chill Thôi',
            nameauthor: 'Chillies, Suni Hạ Linh, Rhymastic',
            time: '05:11',
            img: './assets/img/song/song_list/song_item1.jpg'
        },
        
    ],
    render: function() {
        const htmlzingChartTops = this.zingChartTopDescriptions.map(zingChartTopDescription => {
            return `
                <div class="zingchart__item">
                    <div class="zingchart__item-description">
                        <div class="zingchart__item-serial">
                            <div class="zingchart__item-number">
                                ${zingChartTopDescription.number}    
                            </div>
                            <div class="zingchart__item-minus">
                                <i class="ti-minus"></i>
                            </div>
                        </div>
                        <div class="zingchart__item-img">
                            <img src=" ${zingChartTopDescription.img} " alt="" class="zingchart__song-img">
                            <div class="zingchart__item-play">
                                <i class="zingchart__item--play--icon fa-solid fa-play"></i>
                            </div>
                            <div class="zingchart__item-playing">
                                <img src="./assets/img/song/musicplaying.gif" alt="" class="zingchart__song-playing">
                            </div>
                        </div>
                        <div class="zingchart__item-name">
                            <div class="zingchart__item-namemv">
                                ${zingChartTopDescription.namesong} 
                            </div>
                            <div class="zingchart__item-nameauthor">
                            ${zingChartTopDescription.nameauthor} 
                            </div>
                        </div>
                    </div>
                    <div class="zingchart__item-bonus hide-on-mobile">
                        <div class="zingchart__item-time">${zingChartTopDescription.time} </div>
                        <div class="zingchart__item-actions home__song-actions">
                            <div class="song__action-item app__lyric">
                                <i class="app__lyric-icon fa-solid fa-microphone"></i>
                                <div class="song__action-item--des">Phát cùng lời bài hát</div>
                            </div>
                            <div class="song__action-item app__heart">
                                <div class="app__heart-des app__heart--notaction">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="app__heart-des app__heart--action">
                                    <i class="main__heart-action fa-solid fa-heart"></i>
                                </div> 
                            </div>
                            <div class="song__action-item app__more">
                                <i class="app__more-icon fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                </div>
           `
        })
        $('.zingchart__list').innerHTML = htmlzingChartTops.join('')

        
    },
    start: function() {
        this.render()
    }
}

export default zingChartTop;
