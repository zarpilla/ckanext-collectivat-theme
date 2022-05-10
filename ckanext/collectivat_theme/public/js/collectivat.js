// const axios = require('axios');
import MyComponent from './component.js'

const { createApp } = Vue

createApp(MyComponent).mount('#vue-app-packages')



// getDatasets = async () => {
//     const { data } = await axios.get('/api/3/action/package_search?rows=1000')
//     console.log('data', data)
//     if (data.result.results) {

//     }
// }

// const collectivatPackages = document.querySelector('.collectivat-packages-js');
// console.log('collectivatPackages', collectivatPackages)
// console.log('axios', axios)

// getDatasets()


/*

http://localhost:5000/api/3/action/package_search?rows=1000 
http://localhost:5000/api/3/action/package_show?id=gdfgfdhfg
localhost:5000/api/3/action/package_list?limit=10&offset=0

*/