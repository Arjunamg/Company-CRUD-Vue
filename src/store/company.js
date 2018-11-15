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
       console.log(company);
       state.companies.splice(company,1);
    }
}
const actions = {
    GET_COMPANY: async (context) => {
        let {
            data
        } = await Axios.get('http://localhost:3000/api/v1/companies/' + 'get')
        console.log("from server ",data);
        context.commit('GET_COMPANY', data)
    },
    ADD_COMPANY:  (context, company) => {
        Axios.post('http://localhost:3000/api/v1/companies/create',company)
        .then(res=>{
            console.log('res', res)
            if(res.status == 200){
                context.commit('ADD_COMPANY', res.data)
            }
        });
           
        
    },
    // EDIT_COMPANY: async (context, id) => {

    // },
    DELETE_COMPANY:  (context, id) => {
        console.log(id);
        Axios.delete('http://localhost:3000/api/v1/companies/delete/'+id)
        .then((res) => {
            if(res.status==200){
                context.commit('DELETE_COMPANY', id);
            }
        })
        .catch(err => {console.log(err)});
        

    },
}

export default {
    state,
    getters,
    actions,
    mutations
}