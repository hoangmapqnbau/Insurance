import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "./constants";

export const closeSideBar = payload => ({
    type: CLOSE_SIDE_BAR,
    payload
})
export const onpenSideBar = payload => ({
    type: OPEN_SIDE_BAR,
    payload
})