import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../../utils/api";
export  const getLanguages=createAsyncThunk("languages/getLanguages",async()=>{
const res=await api.get("/getLanguages");
return res.data.data.languages;
});
export const translateText=createAsyncThunk("translate",async(p)=>{
 console.log(p)
    const params=new URLSearchParams();
 console.log(params);
 params.set('source_language',p.sourceLang.value);
 params.set('target_language',p.targetLang.value);
 params.set('text',p.text);
 const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };
 console.log(params);
 const res= await api.post("/translate",params,{headers});
 return res.data.data;
});