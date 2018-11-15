import Axios from 'axios'



const state = {
    companies: []
}

const getters = {
    COMPANIES: state => {
        return state.companies;
    }
}
const mutations = {
    GET_COMPANY: (state, company) => {
        state.companies = company
    },
    ADD_COMPANY: (state, company) => {
        state.companies.push(company)
    },
    // EDIT_COMPANY: (state, id) => {

    // },
    DELETE_COMPANY: (state, id) => {
       let company = state.companies.findIndex(company => company._id == id);
       //console.log(company);
       state.companies.splice(company);
    }
}
const actions = {
    GET_COMPANY: async (context) => {
        let {
            data
        } = await Axios.get('http://localhost:3000/api/v1/companies/' + 'get')
        console.log(data);
        context.commit('GET_COMPANY', data)
    },
    ADD_COMPANY: async (context, company) => {
        let {
            data
        } = await Axios.post('http://localhost:3000/api/v1/companies/create',company    )
            context.commit('ADD_COMPANY', company)
        
    },
    // EDIT_COMPANY: async (context, id) => {

    // },
    DELETE_COMPANY: async (context, id) => {
        let {
            data
        } = await Axios.delete('http://localhost:3000/api/v1/companies/delete/'+id)
        context.commit('DELETE_COMPANY', id);

    },
}

export default {
    state,
    getters,
    actions,
    mutations
}