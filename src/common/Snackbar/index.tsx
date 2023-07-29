/**
 * WRITTEN DATE: 2023/07/29
 * AUTHOR: TONGIL KIM
 * PURPOSE:  API 에러 발생 시, 아래 하단에서 에러메시지와 함께 보여지는 snackbar
 */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setOpenSnackBar } from "../../stores/slice/SnackbarSlice";
import style from "./Snackbar.module.css";

export default function Snackbar() {
  const dispatch = useAppDispatch();
  const { snackbarMsg } = useAppSelector((state) => state.snackBar);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setOpenSnackBar(false));
    }, 3000);
  }, [snackbarMsg]);
  return <div className={style.snackbar}>{snackbarMsg}</div>;
}
