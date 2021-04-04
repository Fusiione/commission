        var menu = ['', '', '', '', '', '', '', '', '', '']
        var mySwiper = new Swiper('.swiper-container', {
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: document.querySelector("#next"),
                prevEl: document.querySelector("#prev"),
            },
        })
