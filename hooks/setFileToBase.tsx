import React from "react"
// interface FileToBaseTypes {
//     file:File
//     image:string
// }

 export const toBase64 = (file: File) =>
   new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = () => resolve(reader.result);
     reader.onerror = (error) => reject(error);
   });