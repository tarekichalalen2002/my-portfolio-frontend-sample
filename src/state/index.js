import { proxy } from "valtio";


const state = proxy({
    currentPage:1,
    isMenuVisible:false,
    projectsCount:1,
})

export default state;