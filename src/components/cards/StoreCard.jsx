import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BsArrowRightCircle } from 'react-icons/bs'

export default function StoreCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="group">
      <CardMedia
        component="img"
        alt="green iguana"
        image="https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-48"
      />
      <CardContent className="group-hover:bg-[#C3129B]">
        <img className='h-16 w-16 rounded-full object-center object-cover -mt-12' src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="store logo"/>

        <p className="pt-3 font-light group-hover:text-white text-3xl">
          Globe Scope
        </p>
      </CardContent>
      <div className='flex items-center justify-between px-4 pb-4 group-hover:bg-[#C3129B]'>   
        <p className='font-light text-sm group-hover:text-white'>
          Nairobi, Kenya
        </p>
        <div>
            <BsArrowRightCircle className="h-6 w-6 group-hover:text-white"/>
        </div>
      </div>
    </Card>
  );
}