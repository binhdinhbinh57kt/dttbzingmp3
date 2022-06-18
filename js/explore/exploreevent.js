const exploreEvent = {
    exploreEventDescriptions: [
        {
            namemusician: 'Sinh Nhật Sao X B Ray',
            day: '00:00 Thứ Hai, 11 tháng 10',
            avatar1: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar2: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar3: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar4: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar5: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            number: '+1K',
            img: './assets/img/explore/explore_event/explore_event1.jpg',
            btn: 'Mở radio'
        },
        {
            namemusician: 'Sinh Nhật Sao x ERIK',
            day: '00:00 Thứ Tư, 13 tháng 10',
            avatar1: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar2: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar3: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar4: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar5: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            number: '+1K',
            img: './assets/img/explore/explore_event/explore_event2.jpg',
            btn: 'Chúc mừng'
        },
        {
            namemusician: 'Sinh Nhật Sao x Đông Nhi',
            day: '00:00 Thứ Tư, 20 tháng 10',
            avatar1: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar2: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar3: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar4: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            avatar5: './assets/img/explore/explore_avatar/explore_avatar1.jpg',
            number: '+1K',
            img: './assets/img/explore/explore_event/explore_event3.jpg',
            btn: 'Chúc mừng'
        }
    ],
    render: function() {
        const htmlexploreEvents = this.exploreEventDescriptions.map(exploreEventDescription => {
            return `
        <div class="col l-4 m-12 c-12">
            <div class="explore__item-concontainer--content explore__event-img">
                <div class="item__img">
                    <img src="${exploreEventDescription.img}" alt="">
                    <div class="item__img-des">
                        <div class="item__img-btnevent">Sự kiện</div>
                        <div class="item__img-name--musician">${exploreEventDescription.namemusician}</div>
                        <div class="item__img-day">${exploreEventDescription.day}</div>
                    </div>
                </div>
            </div>
            <div class="explore__event-des">
                <div class="explore__event-congratulation">
                    <span class="event__concongratulation-title">Lượt chúc mừng</span>
                    <div class="event__concongratulation-avatar">
                        <div class="event__avatar-item">
                            <img src="${exploreEventDescription.avatar1}" alt="">
                        </div>
                        <div class="event__avatar-item">
                            <img src="${exploreEventDescription.avatar2}" alt="">
                        </div>
                        <div class="event__avatar-item">
                            <img src="${exploreEventDescription.avatar3}" alt="">
                        </div>
                        <div class="event__avatar-item">
                            <img src="${exploreEventDescription.avatar4}" alt="">
                        </div>
                        <div class="event__avatar-item">
                            <img src="${exploreEventDescription.avatar5}" alt="">
                        </div>
                        <div class="event__avatar-item">
                            <span>${exploreEventDescription.number}</span>
                        </div>
                    </div>
                </div>
                <div class="explore__event-btn">${exploreEventDescription.btn}</div>
            </div>
        </div>
        `
        })
        $('.explore__event').innerHTML = htmlexploreEvents.join('')
    },
    start: function() {
        this.render()
    }
}
exploreEvent.start()


