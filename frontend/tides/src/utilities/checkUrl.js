export const checkUrl = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const eno = urlParams.get('eno')
    if(eno){
        localStorage.setItem("token",eno)
    }
}