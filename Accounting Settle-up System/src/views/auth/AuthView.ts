import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useAuthLogic() {
    const router = useRouter()
    const isRightPanelActive = ref(false)

    // Login State
    const loginUsername = ref('')
    const loginPassword = ref('')
    const loginMessage = ref('')
    const loginIsError = ref(false)
    const showLoginPassword = ref(false)

    // Register State
    const regUsername = ref('')
    const regEmail = ref('')
    const regPassword = ref('')
    const regMessage = ref('')
    const regIsError = ref(false)
    const showRegPassword = ref(false)

    const apiBase = 'http://localhost:5108/api/auth'

    const togglePanel = () => {
        isRightPanelActive.value = !isRightPanelActive.value
    }

    const handleRegister = async () => {
        regMessage.value = ''
        regIsError.value = false
        try {
            const response = await fetch(`${apiBase}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: regUsername.value,
                    email: regEmail.value,
                    password: regPassword.value,
                    name: regUsername.value
                })
            })
            const result = await response.json()
            regMessage.value = result.message
            if (!result.success) {
                regIsError.value = true
            } else {
                regUsername.value = ''
                regEmail.value = ''
                regPassword.value = ''
                setTimeout(() => isRightPanelActive.value = false, 1500)
            }
        } catch (error) {
            regIsError.value = true
            regMessage.value = 'Failed to connect to server.'
        }
    }

    const handleLogin = async () => {
        loginMessage.value = ''
        loginIsError.value = false
        try {
            const response = await fetch(`${apiBase}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: loginUsername.value,
                    password: loginPassword.value
                })
            })
            const result = await response.json()
            if (result.success) {
                loginMessage.value = 'Login successful!'
                setTimeout(() => router.push('/landing'), 1000)
            } else {
                loginIsError.value = true
                loginMessage.value = result.message || 'Invalid credentials.'
            }
        } catch (error) {
            loginIsError.value = true
            loginMessage.value = 'Failed to connect to server.'
        }
    }

    return {
        isRightPanelActive,
        loginUsername,
        loginPassword,
        loginMessage,
        loginIsError,
        showLoginPassword,
        regUsername,
        regEmail,
        regPassword,
        regMessage,
        regIsError,
        showRegPassword,
        togglePanel,
        handleRegister,
        handleLogin
    }
}
