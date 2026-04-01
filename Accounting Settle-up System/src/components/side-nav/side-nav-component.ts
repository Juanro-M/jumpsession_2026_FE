import { defineComponent } from 'vue'
import router from '@/router/router';

export default defineComponent({
    methods: {
            logout() {
                router.push('/');
            },
            navigateTo(route: string){
                router.push(route);
            },
        }
})