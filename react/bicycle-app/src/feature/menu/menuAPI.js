import React from "react";
import { createMenu/*, filterProduct*/ } from "./menuSlice.js";
import { axiosData, groupByRows } from "../../utils/dataFetch.js";

export const getMenuList = (number) => async(dispatch) => {
    const jsonData = await axiosData("/data/menus.json"); //비동기
    const rows = groupByRows(jsonData, number); //groupByRows()로 1차원인 jsonData를 2차원 배열로 변경한다 //dataFetch.js에 있음
    dispatch(createMenu({"menuList": rows, "menus": jsonData}));
}

// export const getProduct = (pid) => async(dispatch) => {
//     dispatch(filterProduct({"pid": pid}));
// }