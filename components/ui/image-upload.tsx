"use client"

import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    const ref = useRef<any>()

    useEffect(() => {
        ref.current = onChange;
    });

    useEffect(() =>{
        setIsMounted(true);
         },[])

    if(!isMounted){
        return false;
       }


         return (
            <div>
               <div className="mb-4 flex items-center gap-4">
              {value.map((url) => (
                <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                <div className="z-10 absolute top-2 right-2">
                    <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                 <Trash  className="h-4 w-4"/>
                    </Button>
                    </div>
                    <Image 
                    fill
                    className="object-cover"
                    alt="Image"
                    src={url}
                    />
                </div>
              ))}
               </div>
               <CldUploadWidget uploadPreset="wrojldl8" onSuccess={(results) => {
                if (results.info) {
                    const info = results.info as CloudinaryUploadWidgetInfo;
                    ref.current(info.secure_url);
                }
               }}>
                {({ open}) => {
                    const onClick = () => {
                        open();
                    }
                    return (
                        <Button
                        type="button"
                        disabled={disabled}
                        variant="secondary"
                        onClick={onClick}
                        >
                            <ImagePlus className="h-4 w-4 mr-2"/>
                            Upload an image
                        </Button>
                    )
                }}
               </CldUploadWidget>
            </div>
         )
}

export default ImageUpload;