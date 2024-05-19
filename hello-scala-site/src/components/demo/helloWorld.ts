import {defineComponent} from "vue"

export default defineComponent({
    props: {
        msg: String
    },
    setup(props) {
        return {
            msg: props.msg
        }
    }
})
