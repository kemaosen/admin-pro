import Vue from "vue";
import Vuex from "vuex";
import state from "./states.js";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import user from "./module/user.js";
import promission from "./module/promission.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        user,
        promission
    }
});
