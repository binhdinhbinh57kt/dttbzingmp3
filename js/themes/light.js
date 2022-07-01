const topicLight = {
    topicLightcDescriptions: [
        {
            name: 'Sáng',
            image: './assets/img/themes/light/light__white.jpg'
        },
        {
            name: 'Xám',
            image: './assets/img/themes/light/light__gray.jpg'
        },
        {
            name: 'Xanh nhạt',
            image: './assets/img/themes/light/light__green-light.jpg'
        },
        {
            name: 'Hồng Cánh Sen',
            image: './assets/img/themes/light/light__pink-light.jpg'
        }
    ],
    render: function() {
        const htmlTopicLight = this.topicLightcDescriptions.map(topicLightcDescription => {
            return `
            <div class="col c-4 l-2 m-4 choose--item">
                <div class="topic__choose-img ">
                    <img src="${topicLightcDescription.image}" alt="" class="topic__img">
                    <div class="choose__description">
                        <div class="choose__item choose__apply">Áp dụng</div>
                        <div class="choose__item choose__preview">Xem trước</div>
                    </div>
                </div>
                <div class="topic__choose-name">${topicLightcDescription.name}</div>
            </div>
            `
        })
        $('.topic__light').innerHTML = htmlTopicLight.join('')
    },
    start: function() {
        this.render()
    }
}
export default topicLight;
