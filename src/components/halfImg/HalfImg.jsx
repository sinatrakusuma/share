import React from 'react'

const HalfImg = () => {
  return (
    <div
    style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh",
        marginTop:"50px"
    }}
    >
        <div
        style={{
            width: "1152px",
            height: "250px",
            backgroundImage: "url(https://images.unsplash.com/photo-1668260920944-ec171ceb8633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            backgroundPositionY:"-83px"
        }}
        >
            </div>
    </div>
  )
}

export default HalfImg