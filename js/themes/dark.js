const topicDark = {
    topicDarkcDescriptions: [
        {
            name: 'Tối',
            image: './assets/img/themes/dark/dark__black.jpg'
        },
        {
            name: 'Tím',
            image: './assets/img/themes/dark/dark__purple.jpg'
        },
        {
            name: 'Xanh Đậm',
            image: './assets/img/themes/dark/dark__blue.jpg'
        },
        {
            name: 'Xanh Biển',
            image: './assets/img/themes/dark/dark__blue-light.jpg'
        },
        {
            name: 'Xanh Lá',
            image: './assets/img/themes/dark/dark__green.jpg'
        },
        {
            name: 'Nâu',
            image: './assets/img/themes/dark/dark__brown.jpg'
        },
        {
            name: 'Hồng',
            image: './assets/img/themes/dark/darl__pink.jpg'
        },
        {
            name: 'Đỏ',
            image: './assets/img/themes/dark/dark__red.jpg'
        },
    ],
    render: function() {
        const htmlTopicDark = this.topicDarkcDescriptions.map(topicDarkcDescription => {
            return `
            <div class="col c-4 l-2 m-4 choose--item">
                <div class="topic__choose-img ">
                    <img src="${topicDarkcDescription.image}" alt="" class="topic__img">
                    <div class="choose__description">
                        <div class="choose__item choose__apply">Áp dụng</div>
                        <div class="choose__item choose__preview">Xem trước</div>
                    </div>
                </div>
                <div class="topic__choose-name">${topicDarkcDescription.name}</div>
            </div>
            `
        })
        $('.topic__dark').innerHTML = htmlTopicDark.join('')
    },
    start: function() {
        this.render()
    }
}

export default topicDark;
