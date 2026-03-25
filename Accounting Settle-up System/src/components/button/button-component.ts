import { defineComponent } from 'vue'
import { AuthService } from '@/services/auth-service';

export default defineComponent({
    methods: {
        handleClick() {
            AuthService.login();
        }
    }
})