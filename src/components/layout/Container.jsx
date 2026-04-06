import React from 'react'

const Container = ({
  children,
  my = "my-0",
  w = "w-[280px] xs:w-[320px] smd:w-[500px] lg:w-[900px] xl:w-[1150px]",
}) => {
  return (
    <div className={`${w} mx-auto ${my}`}>
      {children}
    </div>
  )
}

export default Container