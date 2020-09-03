new Vue({
    el: '#app',
    data: {
        blueClass: false,
        yellowClass: false

    },
    computed: {

    },
    methods: {

        opposite: function (v) {


            switch (v) {
                case 'blueClass':

                    final = (this.blueClass) ? false : true;
                    this.blueClass = final;
                    break;
                case 'yellowClass':
                    final = (this.yellowClass) ? false : true;
                    this.yellowClass = final;
                    break;
            }
        },
    },

})
