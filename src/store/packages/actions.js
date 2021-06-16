import { FETCH_PACKAGES } from '../../helpers/requests'

export default {
    FETCH_PACKAGES(context,data) {
        FETCH_PACKAGES(data)
        .then(res => {
            context.commit('SET_DATA', {
                field: 'modulePackages.packages',
                data: res.objects
            }, {root: true})
            context.commit('SET_DATA', {
                field: 'modulePackages.total',
                data: res.total
            }, {root: true})
        })
        .catch(err => {
            console.error(err)
            context.commit('SET_DATA', {
                field: 'modulePackages.error',
                data: err
            }, {root: true})
        })
    }
}