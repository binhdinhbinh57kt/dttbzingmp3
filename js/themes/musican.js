const topicMusican = {
    topicMusicancDescriptions: [
        {
            name: 'Jack',
            image: './assets/img/themes/musican/musican__jack.jpg'
        },
        {
            name: 'IU',
            image: './assets/img/themes/musican/musican__iu.jpg'
        },
        {
            name: 'Ji Chang Wook',
            image: './assets/img/themes/musican/musican__ji-chang-wook.jpg'
        },
        {
            name: 'Lisa',
            image: './assets/img/themes/musican/musican__lisa.jpg'
        },
        {
            name: 'Jennie Kim',
            image: './assets/img/themes/musican/musican__jennie.jpg'
        },
        {
            name: 'Jisoo',
            image: './assets/img/themes/musican/musican__jisoo.jpg'
        },
        {
            name: 'Rosé',
            image: './assets/img/themes/musican/musican__rose.jpg'
        },
    ],
    render: function() {
        const htmlTopicMusican = this.topicMusicancDescriptions.map(topicMusicancDescription => {
            return `
            <div class="col c-4 l-2 m-4 choose--item">
                <div class="topic__choose-img ">
                    <img src="${topicMusicancDescription.image}" alt="" class="topic__img">
                    <div class="choose__description">
                        <div class="choose__item choose__apply">Áp dụng</div>
                        <div class="choose__item choose__preview">Xem trước</div>
                    </div>
                </div>
                <div class="topic__choose-name">${topicMusicancDescription.name}</div>
            </div>
            `
        })
        $('.topic__musican').innerHTML = htmlTopicMusican.join('')
    },
    start: function() {
        this.render()
    }
}

export default topicMusican;
