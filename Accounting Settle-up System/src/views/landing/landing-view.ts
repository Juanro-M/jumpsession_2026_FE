import { defineComponent } from 'vue'
import sideNavComponent from '@/components/side-nav/side-nav-component.vue'
import cardComponent from '@/components/card/card-component.vue'

export default defineComponent({
  components: {
    sideNavComponent: sideNavComponent,
    cardComponent: cardComponent
  }
})