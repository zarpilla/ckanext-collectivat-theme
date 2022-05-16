export default {
  data() {
    return { count: 20, list: [], lang: '' };
  },
  template: `
  <div class="vue-list">
        <ul class="media-grid" v-if="list.length">
            <li class="media-item" v-for="dataset in list" :key="dataset.id">
                <div class="dataset-content">
                    <div class="module-image-block">
                        <a class="module-image module-image-organization" :href="lang + 'dataset/' + dataset.name">    
                            <img :src="dataset.image_url" :alt="dataset.title">    
                        </a>
                    </div>
                    <h2 class="dataset-heading">
                        <a :href="lang + 'dataset/' + dataset.name">{{dataset.title}}</a>
                    </h2>
                    <div class="notes">
                        {{ dataset.notes.length > 170 ? dataset.notes.substring(0, 170) + '...' : dataset.notes }}
                    </div>
                </div>
            </li>
        </ul>
    </div>`,
  async mounted() {
    this.lang = window.location.pathname
    const { data } = await axios.get("/api/3/action/package_search?rows=1000&sort=score asc");
    if (data.result.results) {
        data.result.results.forEach(r => {
            if (r.extras && r.extras.find(e => e.key === 'image_url')) {
                r.image_url = r.extras.find(e => e.key === 'image_url').value
            }            
            else if (r.organization && r.organization.image_url && !r.organization.image_url.startsWith('http')) {
                r.image_url = '/uploads/group/' + r.organization.image_url
            }            
        });
        document.querySelector('.media-grid').style.display = 'none';
        this.list = data.result.results;
      
    }
  },
};
