import api from "./index"


export const CheckLogIn=async(data)=>{
    console.log(data.action.payload.Email)
    try{
        const res=await api.get(`/.../.../?email=${data.action.payload.Email}&password=${data.action.payload.pass}`);
        return res.data
    }catch(error){
        console.log(error);
    }
}


export const SignUp=async(data)=>{
    console.log(data)
    try{
       const res=await api.post("/.../signUp",data)
       return res.data;
    }catch(error){
        console.log(error);
    }
} 

export const logOut=async()=>{
    try{
        const res=await api.get(".../...")
        return res.data
    }catch(error){
        console.log(error)
    }
}
