const { createApp } = Vue;

createApp({
    data( ){
        return{
            message: 'Ciao a tutti',
            imgData: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHRrruruD4LVmtGBt3CGwwrUVRWhYiJc4og&s'
        }
    }
}).mount('#app')