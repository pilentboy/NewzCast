const handleUploadDate= ()=>{
    
    const date=new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    const day= date.getDate()
    const year= date.getFullYear()
    const res= [year, month, day]
    
    return res
  
}   

export default handleUploadDate
