import React from 'react'


interface inputProps {
    value:number,
    handleClick() : void,
    handleChange(e:any) : void,
}

export const TimerInput = ({value , handleClick ,handleChange}: inputProps) => {
  return (
    <div className="z-6 mx-auto space-y-4 flex flex-col md:flex-row justify-center items-center md:space-y-0">

    </div>
  )
}
