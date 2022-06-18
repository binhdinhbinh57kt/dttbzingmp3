const exploreRadio = {
    exploreRadioDescriptions: [
        {
            name: 'Xone Radio',
            number: 476,
            img: './assets/img/explore/explore_radio/explore_radio1.jpg',
        },
        {
            name: 'On Air',
            number: 143,
            img: './assets/img/explore/explore_radio/explore_radio2.jpg',
        },
        {
            name: 'Chạm',
            number: 323,
            img: './assets/img/explore/explore_radio/explore_radio3.jpg',
        },
        {
            name: 'Acoustic',
            number: 685,
            img: './assets/img/explore/explore_radio/explore_radio4.jpg',
        },
        {
            name: 'Rap Việt',
            number: 257,
            img: './assets/img/explore/explore_radio/explore_radio5.jpg',
        },
        {
            name: 'US-UK',
            number: 116,
            img: './assets/img/explore/explore_radio/explore_radio6.jpg',
        },
        {
            name: 'K-POP',
            number: 80,
            img: './assets/img/explore/explore_radio/explore_radio7.jpg',
        },
        {
            name: 'V-POP',
            number: 50,
            img: './assets/img/explore/explore_radio/explore_radio8.jpg',
        },
        {
            name: 'Bolero',
            number: 59,
            img: './assets/img/explore/explore_radio/explore_radio9.jpg',
        },
        {
            name: 'The One Radio',
            number: 44,
            img: './assets/img/explore/explore_radio/explore_radio10.jpg',
        }
    ],
    render: function() {
        const htmlexploreRadios = this.exploreRadioDescriptions.map(exploreRadioDescription => {
            return `
            <div class="col l-1-7 m-2-4 c-3 radio__item">
                <div class="explore__radio-item">
                    <div class="explore__radio-img item__img">
                        <div class="explore__radio-img--img">
                            <img src="${exploreRadioDescription.img}" alt="">
                        </div>
                        <div class="img__actions">
                            <i class="item__img-play fa-solid fa-play explore__radio-play"></i>
                        </div>
                        <svg class="svg explore__radio-img-svg" fill="transparent" viewBox="0 0 100 100">
                            <circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)" cx="50" cy="50" r="48.75" stroke-width="2.5"></circle>
                            <circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50" r="48.75" stroke-width="2.5" stroke-dasharray="306.3052837250048" stroke-dashoffset="104.35368415575385" style="transition: stroke-dashoffset 850ms ease-in-out 0s;"></circle>
                        </svg>
                        <div class="explore__radio-live">Live</div>
                    </div>
                    <div class="explore__radio-content">
                        <div class="explore__radio-name">${exploreRadioDescription.name}</div>
                        <div class="explore__radio-amount">${exploreRadioDescription.number} đang nghe</div>
                    </div>
                </div>
            </div>
            `
        })
        $('.explore__radio').innerHTML = htmlexploreRadios.join('')
    },
    start: function() {
        this.render()
    }
}
exploreRadio.start()