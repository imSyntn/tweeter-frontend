import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import BaseUrl from "./BaseUrl";

const accessToken = sessionStorage.getItem("access token")
const config = {
    headers:{
        "Authorization" :`Bearer ${accessToken}`
    }
}

function ProfileAction (username){
    return async function (dispatch){
        dispatch({
            type:"VIEW_PROFILE",
        })
        await BaseUrl.get(`/p/${username}`,config)
        .then((res)=>{
            dispatch({
                type:"VIEW_PROFILE_SUCCED",
                payload:res
            })
        })
        .catch((err)=>{
            dispatch({
                type:"VIEW_PROFILE_FAIL",
                payload:err
            })
        })
    }
}

export default ProfileAction

function EditProfileAction (fd){
    return async function (dispatch){
        dispatch({
            type:"EDIT_PROFILE",
        })
        await BaseUrl.put("/p/editprofile",fd,config)
        .then((res)=>{
            console.log(res)
            dispatch({
                type:"EDIT_PROFILE_SUCCED",
                payload:res
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type:"EDIT_PROFILE_FAIL",
                payload:err
            })
        })
    }
}

export {EditProfileAction}


export const ProfileApi=(name)=>{
    return {
       type:"PROFILE_API_NAME",
       payload: name
    }
  }