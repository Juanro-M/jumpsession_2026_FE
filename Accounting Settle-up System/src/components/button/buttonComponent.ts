import { defineComponent } from 'vue'
import { AuthService } from '@/services/authService';

export default defineComponent({
    methods: {
        handleClick() {
            AuthService.login();
        }
    }
})