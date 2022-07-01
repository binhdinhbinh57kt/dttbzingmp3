const topicDynamic = {
    topicDynamicDescriptions: [
        {
            name: 'London',
            image: './assets/img/themes/dynamic/dynamic__london.png'
        },
        {
            name: 'Sáng Tối',
            image: './assets/img/themes/dynamic/dynamic__black.jpg'
        },
        {
            name: 'Xanh da trời',
            image: './assets/img/themes/dynamic/dynamic__blue.jpg'
        },
        {
            name: 'Hồng',
            image: './assets/img/themes/dynamic/dynamic__pink.jpg'
        },
        {
            name: 'Nâu',
            image: './assets/img/themes/dynamic/dynamic__brown.jpg'
        },
    ],
    render: function() {
        const htmlTopicDynamics = this.topicDynamicDescriptions.map(topicDynamicDescription => {
            return `
            <div class="col c-4 l-2 m-4 choose--item">
                <div class="topic__choose-img ">
                    <img src="${topicDynamicDescription.image}" alt="" class="topic__img">
                    <div class="choose__description">
                        <div class="choose__item choose__apply">Áp dụng</div>
                        <div class="choose__item choose__preview">Xem trước</div>
                    </div>
                </div>
                <div class="topic__choose-name">${topicDynamicDescription.name}</div>
            </div>
            `
        })
        $('.topic__dynamic').innerHTML = htmlTopicDynamics.join('')
    },
    start: function() {
        this.render()
    }
}

export default topicDynamic;
