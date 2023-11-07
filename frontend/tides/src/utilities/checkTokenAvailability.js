export const checkTokenAvailability = () =>{
    if(localStorage["token"]){
        return true;
    }else{
        return false;
    }
}