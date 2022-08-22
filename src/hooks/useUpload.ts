import React, { useState } from 'react'

export default function useUpload(photo: any) {
    const [photoName, setPhotoName] = useState('Upload your photo')

    function uploadFile(event: Event) {
        const file = (event.target as HTMLInputElement).files![0];
        if (file) {
          setPhotoName(file.name)
          photo.fileOnChange(file)
          return;
        }
        photo.fileOnChange(null)
        setPhotoName('Upload your photo')
      }

      return {
        uploadFile,
        photoName,
        setPhotoName
      }
}