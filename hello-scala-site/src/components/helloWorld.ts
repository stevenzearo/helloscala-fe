import {defineComponent} from "vue"

export default defineComponent({
    props: {
        message: String
    },
    setup(props) {
        return {
            message: props.message
        }
    }
})
