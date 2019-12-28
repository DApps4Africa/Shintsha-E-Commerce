

<script>
import swal from 'sweetalert2'
export default {
    mounted() {
        this.error('Feature under development')
    },
    methods: {
        error(message) {
            swal.fire({
                icon: 'warn',
                title: 'Under Development',
                text: message,
                confirmButtonColor:'green',
            })
        }
    }
}
</script>
