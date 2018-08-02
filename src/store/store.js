import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
	state:{
        menuItems:{}
	},
	getters:{

	},
	mutations:{
            setMenuItems(state,data){
            	state.menuItems=data

            }
	},
	actions:{

	}
})